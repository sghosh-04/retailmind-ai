import bcrypt from "bcryptjs"
import { NextResponse } from "next/server"
import { db, TABLE_PREFIX } from "@/lib/dynamodb"
import { QueryCommand, UpdateCommand } from "@aws-sdk/lib-dynamodb"
import { generateOTP, sendOTPEmail, signOTPToken, verifyOTPToken } from "@/lib/otp"

export async function POST(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const step = searchParams.get("step") || "request"

    if (step === "request") {
      const { email } = await req.json()
      if (!email)
        return NextResponse.json({ error: "Email is required." }, { status: 400 })

      const emailFormatted = email.toLowerCase().trim();

      const userQuery = await db.send(new QueryCommand({
        TableName: `${TABLE_PREFIX}Users`,
        IndexName: "EmailIndex",
        KeyConditionExpression: "email = :e",
        ExpressionAttributeValues: { ":e": emailFormatted }
      }));

      if (!userQuery.Items || userQuery.Items.length === 0) {
        // We shouldn't leak that the email doesn't exist, just pretend we sent an OTP or report an error if preferred. Let's return error consistently.
        return NextResponse.json({ error: "No account found with that email." }, { status: 404 })
      }

      // Generate and send OTP
      const otp = generateOTP();
      await sendOTPEmail(emailFormatted, otp);

      const otpToken = await signOTPToken(emailFormatted, otp);

      return NextResponse.json({ success: true, otpToken, message: "OTP sent to your email" })
    }
    else if (step === "reset") {
      const { email, otp, otpToken, newPassword } = await req.json()
      if (!email || !otp || !otpToken || !newPassword)
        return NextResponse.json({ error: "Missing required fields." }, { status: 400 })

      if (newPassword.length < 8) {
        return NextResponse.json({ error: "Password must be at least 8 characters long." }, { status: 400 })
      }

      const verifiedEmail = await verifyOTPToken(otpToken, otp);
      if (!verifiedEmail || verifiedEmail !== email.toLowerCase().trim()) {
        return NextResponse.json({ error: "Invalid or expired OTP." }, { status: 401 })
      }

      const userQuery = await db.send(new QueryCommand({
        TableName: `${TABLE_PREFIX}Users`,
        IndexName: "EmailIndex",
        KeyConditionExpression: "email = :e",
        ExpressionAttributeValues: { ":e": verifiedEmail }
      }));

      if (!userQuery.Items || userQuery.Items.length === 0) {
        return NextResponse.json({ error: "User not found." }, { status: 404 })
      }

      const user = userQuery.Items[0];
      const hashedPassword = await bcrypt.hash(newPassword, 10);

      // Update password
      await db.send(new UpdateCommand({
        TableName: `${TABLE_PREFIX}Users`,
        Key: { id: user.id },
        UpdateExpression: "SET password_hash = :p, updated_at = :u",
        ExpressionAttributeValues: {
          ":p": hashedPassword,
          ":u": new Date().toISOString()
        }
      }));

      return NextResponse.json({ success: true, message: "Password updated successfully." })
    }

    return NextResponse.json({ error: "Invalid Auth Step" }, { status: 400 });

  } catch (e: unknown) {
    return NextResponse.json({ error: e instanceof Error ? e.message : "Server error" }, { status: 500 })
  }
}
