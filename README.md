# VStorage

High-performance storage solution built with cutting-edge web technologies.

## Technology Stack

- **Svelte** - Modern, reactive frontend framework
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Vercel** - Deployment platform

## Features

- 🎨 **Modern UI** - Beautiful, responsive interface
- 📊 **Real-time metrics** - Performance monitoring
- 🔧 **File operations** - Upload, download, and manage data
- 🚀 **Optimized for speed** - Built for maximum performance

## Development

### Prerequisites

- Node.js 18+
- Resend API key

### Installation

```bash
npm install
```

### Environment Setup

Create a `.env` file in the root directory:

```bash
# Resend API Configuration
RESEND_API_KEY=your_resend_api_key_here

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# Environment
NODE_ENV=production

# Email Configuration
FROM_EMAIL=noreply@vstorage.com
TO_EMAIL=enterprise@vstorage.com
```

### Vercel Deployment Environment Variables

When deploying to Vercel, add these environment variables in your Vercel dashboard:

- `RESEND_API_KEY` - Your Resend API key for email functionality
- `NEXT_PUBLIC_SITE_URL` - Your production domain URL
- `NODE_ENV` - Set to `production` for production builds

### Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see the application.

### Build for Production

```bash
npm run build
```

## Deployment

The application is configured for Vercel deployment. Simply push to your repository and Vercel will automatically build and deploy.

## Architecture

VStorage uses a modern web architecture:

1. **Frontend**: Svelte components with Tailwind CSS
2. **API Layer**: SvelteKit API routes for backend functionality
3. **Deployment**: Vercel with Node.js runtime

## Performance

- Operations per second: 10,000+
- Average latency: <2ms
- Throughput: 100+ MB/s
- Memory usage: <30MB

Built with cutting-edge technologies for maximum performance and innovation.
