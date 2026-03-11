# RetailMind AI 🛍️🤖

> An intelligent retail management platform powered by AI, providing comprehensive analytics, market insights, and predictive capabilities for modern retail businesses.

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![AWS](https://img.shields.io/badge/AWS-Serverless-orange?style=flat&logo=amazon-aws)](https://aws.amazon.com/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

## 🌟 Overview

RetailMind AI is a next-generation retail intelligence platform that combines advanced AI capabilities with comprehensive business analytics. Built on a modern serverless architecture, it empowers retail businesses with real-time insights, predictive analytics, and intelligent automation.

## ✨ Key Features

### 🤖 AI-Powered Intelligence
- **AI Copilot**: Interactive assistant for business queries and insights
- **Product Analysis**: Automated product performance evaluation using multiple AI providers (AWS Bedrock, Google Gemini, Groq)
- **RAG System**: Knowledge base with document upload and intelligent retrieval
- **Market Analysis Engine**: Real-time market trend analysis and competitive intelligence

### 📊 Advanced Analytics
- **Sales Analytics**: Comprehensive sales performance tracking and forecasting
- **Market Segmentation**: Customer segmentation with behavioral analysis
- **Churn Prediction**: ML-powered customer retention insights
- **Quality Dashboard**: Product quality monitoring and analytics

### 💼 Business Operations
- **Inventory Management**: Real-time stock tracking with intelligent search
- **Order Management**: Complete order lifecycle management
- **Bill Generation**: Automated billing with PDF export
- **Product Management**: Bulk upload, parsing, and management capabilities

### 🔐 Enterprise Features
- **Secure Authentication**: JWT-based auth with OTP verification
- **Multi-tenant Support**: Store-specific data isolation
- **Document Verification**: GST and PAN validation
- **Profile Management**: Comprehensive user and store settings

## 🏗️ System Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         Client Layer                             │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  Next.js 16 Frontend (React 19 + TypeScript)             │  │
│  │  • App Router • Server Components • Streaming            │  │
│  │  • Radix UI • Tailwind CSS • Framer Motion               │  │
│  └──────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                              ↓ HTTPS
┌─────────────────────────────────────────────────────────────────┐
│                      API Gateway Layer                           │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  Next.js API Routes + AWS API Gateway                    │  │
│  │  • RESTful APIs • Serverless Functions                   │  │
│  └──────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                     Business Logic Layer                         │
│  ┌──────────────┬──────────────┬──────────────┬─────────────┐  │
│  │   Auth       │   Analytics  │   AI Engine  │   RAG       │  │
│  │   Service    │   Service    │   Service    │   Service   │  │
│  └──────────────┴──────────────┴──────────────┴─────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                      AI/ML Services Layer                        │
│  ┌──────────────┬──────────────┬──────────────┬─────────────┐  │
│  │ AWS Bedrock  │ Google       │ Groq         │ SageMaker   │  │
│  │ (Claude)     │ Gemini       │ (Llama)      │ (Custom ML) │  │
│  └──────────────┴──────────────┴──────────────┴─────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                       Data Layer (AWS)                           │
│  ┌──────────────┬──────────────┬──────────────┬─────────────┐  │
│  │  DynamoDB    │  S3 Bucket   │  Neon DB     │  Supabase   │  │
│  │  (NoSQL)     │  (Storage)   │  (Postgres)  │  (Auth)     │  │
│  └──────────────┴──────────────┴──────────────┴─────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

### Technology Stack

#### Frontend
- **Framework**: Next.js 16.1.6 (App Router)
- **UI Library**: React 19.2.4
- **Language**: TypeScript 5.7.3
- **Styling**: Tailwind CSS 4.2.0
- **Components**: Radix UI (Accessible component library)
- **Animations**: Framer Motion 12.34.5
- **State Management**: React Hooks + Server Components
- **Forms**: React Hook Form + Zod validation

#### Backend & APIs
- **Runtime**: Node.js 20.x
- **API Framework**: Next.js API Routes
- **Authentication**: JWT (jose) + bcryptjs
- **Validation**: Zod schemas
- **File Processing**: Papa Parse (CSV), XLSX, PDF-lib

#### AI/ML Integration
- **AWS Bedrock**: Claude models for advanced reasoning
- **Google Gemini**: Multi-modal AI capabilities
- **Groq**: Fast inference with Llama models
- **AWS SageMaker**: Custom ML model deployment
- **AI SDK**: Vercel AI SDK for streaming responses

#### Data Storage
- **DynamoDB**: NoSQL database for scalable data storage
- **Neon**: Serverless Postgres for relational data
- **Supabase**: Authentication and real-time features
- **S3**: Object storage for documents and media

#### Infrastructure & Deployment
- **Deployment**: SST (Serverless Stack) + AWS SAM
- **Hosting**: AWS Lambda + API Gateway
- **CDN**: CloudFront (via Open Next)
- **Build**: Open Next 3.1.3 for optimized serverless deployment
- **Region**: us-east-1 (configurable)

### Data Flow Architecture

```
User Request
     ↓
Next.js Frontend (SSR/CSR)
     ↓
API Route Handler
     ↓
Authentication Middleware (JWT)
     ↓
Business Logic Layer
     ├→ DynamoDB (User/Product/Order Data)
     ├→ S3 (File Storage)
     ├→ AI Services (Analysis/Predictions)
     └→ External APIs (Market Data)
     ↓
Response Processing
     ↓
Client (JSON/Stream)
```

### Security Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Security Layers                          │
├─────────────────────────────────────────────────────────────┤
│  1. Transport Layer                                          │
│     • HTTPS/TLS encryption                                   │
│     • Secure headers (CSP, HSTS)                            │
├─────────────────────────────────────────────────────────────┤
│  2. Authentication Layer                                     │
│     • JWT tokens with expiration                            │
│     • OTP verification for sensitive operations             │
│     • Password hashing (bcryptjs)                           │
├─────────────────────────────────────────────────────────────┤
│  3. Authorization Layer                                      │
│     • Role-based access control                             │
│     • Store-level data isolation                            │
│     • API route protection                                  │
├─────────────────────────────────────────────────────────────┤
│  4. Data Layer                                              │
│     • Encrypted environment variables                       │
│     • AWS IAM roles and policies                            │
│     • Database encryption at rest                           │
└─────────────────────────────────────────────────────────────┘
```

## 📁 Project Structure

```
retailmind-ai/
├── app/                          # Next.js App Router
│   ├── api/                      # API Routes
│   │   ├── auth/                 # Authentication endpoints
│   │   ├── products/             # Product management
│   │   ├── orders/               # Order management
│   │   ├── bills/                # Billing system
│   │   ├── chat/                 # AI Copilot
│   │   ├── market-analysis/      # Market insights
│   │   ├── churn-predict/        # ML predictions
│   │   └── rag/                  # RAG system
│   ├── dashboard/                # Dashboard pages
│   │   ├── copilot/              # AI assistant
│   │   ├── products/             # Product management UI
│   │   ├── orders/               # Order management UI
│   │   ├── sales-analysis/       # Sales analytics
│   │   ├── market-segmentation/  # Customer segments
│   │   ├── churn-prediction/     # Churn analytics
│   │   ├── market-analysis/      # Market insights
│   │   ├── quality-dashboard/    # Quality metrics
│   │   └── knowledge-base/       # RAG interface
│   ├── login/                    # Authentication pages
│   ├── register/                 # Registration flow
│   └── store/                    # Store management
├── components/                   # React components
│   ├── ui/                       # Reusable UI components
│   └── dashboard/                # Dashboard-specific components
├── lib/                          # Utility libraries
│   ├── auth.ts                   # Authentication utilities
│   ├── dynamodb.ts               # DynamoDB client
│   ├── s3.ts                     # S3 operations
│   ├── bedrock.ts                # AWS Bedrock integration
│   ├── sagemaker.ts              # SageMaker client
│   ├── rag.ts                    # RAG implementation
│   ├── marketAnalysisEngine.ts   # Market analysis logic
│   └── productPriceService.ts    # Pricing algorithms
├── .aws-sam/                     # AWS SAM build artifacts
├── .open-next/                   # Open Next build output
├── lambda/                       # Lambda function code
├── sst.config.ts                 # SST configuration
├── template.yaml                 # AWS SAM template
├── next.config.mjs               # Next.js configuration
├── tailwind.config.ts            # Tailwind configuration
└── tsconfig.json                 # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or higher
- AWS Account with configured credentials
- AWS CLI installed
- SAM CLI (for local testing)
- SST CLI (for deployment)

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Authentication
JWT_SECRET=your_jwt_secret_key

# AI Services
GROQ_API_KEY=your_groq_api_key
GOOGLE_API_KEY=your_google_api_key
GOOGLE_GENERATIVE_AI_API_KEY=your_gemini_api_key
SERP_API_KEY=your_serp_api_key

# AWS Configuration
AWS_REGION=us-east-1
MY_AWS_S3_BUCKET_NAME=your_s3_bucket_name
DYNAMODB_PREFIX=RetailIQ_

# Email Configuration
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_app_password

# Database
DATABASE_URL=your_neon_database_url

# Supabase (Optional)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/retailmind-ai.git
cd retailmind-ai

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit `http://localhost:3000` to see the application.

### Building for Production

```bash
# Build the Next.js application
npm run build

# Start production server locally
npm start
```

### Deployment

#### Deploy with SST (Recommended)

```bash
# Install SST CLI
npm install -g sst

# Deploy to AWS
sst deploy --stage production
```

#### Deploy with AWS SAM

```bash
# Build the SAM application
sam build

# Deploy to AWS
sam deploy --guided
```

## 📊 Core Modules

### 1. AI Copilot
Interactive AI assistant that helps with:
- Business queries and insights
- Data analysis and visualization
- Product recommendations
- Market trend analysis

### 2. Market Analysis Engine
- Real-time market trend monitoring
- Competitive analysis
- Price optimization suggestions
- Demand forecasting

### 3. Customer Churn Prediction
- ML-based churn risk scoring
- Customer lifetime value prediction
- Retention strategy recommendations
- Historical churn analysis

### 4. RAG Knowledge Base
- Document upload and processing
- Semantic search capabilities
- Context-aware responses
- Multi-document reasoning

### 5. Sales Analytics
- Revenue tracking and forecasting
- Product performance metrics
- Customer behavior analysis
- Interactive dashboards with Recharts

### 6. Inventory Management
- Real-time stock tracking
- Low stock alerts
- Bulk product upload (CSV/Excel)
- Intelligent search and filtering

## 🔧 API Documentation

### Authentication Endpoints

```
POST /api/auth/register          # User registration
POST /api/auth/login             # User login
POST /api/auth/logout            # User logout
POST /api/auth/forgot-password   # Password reset
```

### Product Management

```
GET    /api/products             # List all products
POST   /api/products             # Create product
GET    /api/products/[id]        # Get product details
PUT    /api/products/[id]        # Update product
DELETE /api/products/[id]        # Delete product
POST   /api/products/bulk        # Bulk upload
POST   /api/products/parse-file  # Parse CSV/Excel
```

### AI & Analytics

```
POST /api/chat                   # AI Copilot chat
POST /api/ai/product-analysis    # Product analysis
POST /api/market-analysis        # Market insights
POST /api/churn-predict          # Churn prediction
POST /api/forecast               # Sales forecasting
POST /api/sales-insights         # Sales analytics
```

### RAG System

```
POST /api/rag/documents          # Upload documents
GET  /api/rag/documents          # List documents
POST /api/chat                   # Query knowledge base
```

## 🎨 UI Components

Built with Radix UI for accessibility and customization:
- Accordion, Alert Dialog, Avatar
- Checkbox, Dialog, Dropdown Menu
- Form controls with validation
- Data tables with sorting/filtering
- Charts and visualizations (Recharts)
- Toast notifications (Sonner)
- Theme switching (next-themes)

## 🧪 Testing

```bash
# Run linting
npm run lint

# Type checking
npx tsc --noEmit
```

## 📈 Performance Optimizations

- Server-side rendering with Next.js App Router
- Image optimization with next/image
- Code splitting and lazy loading
- Edge caching with CloudFront
- Serverless architecture for auto-scaling
- DynamoDB single-table design
- S3 presigned URLs for direct uploads

## 🔒 Security Best Practices

- JWT token-based authentication
- Password hashing with bcryptjs
- Environment variable encryption
- HTTPS-only communication
- CORS configuration
- Input validation with Zod
- SQL injection prevention
- XSS protection

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👥 Authors

- **Your Name** - *Initial work* - [YourGitHub](https://github.com/yourusername)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for AI SDK and deployment platform
- AWS for serverless infrastructure
- Radix UI for accessible components
- All open-source contributors

## 📞 Support

For support, email support@retailmind.ai or join our Slack channel.

## 🗺️ Roadmap

- [ ] Mobile app (React Native)
- [ ] Advanced ML models for demand forecasting
- [ ] Multi-language support
- [ ] Real-time collaboration features
- [ ] Integration with popular e-commerce platforms
- [ ] Advanced reporting and export capabilities
- [ ] Webhook support for third-party integrations

---

Made with ❤️ by the RetailMind AI Team
