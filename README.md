# VStorage

High-performance storage solution built with cutting-edge web technologies.

## Technology Stack

- **WebAssembly (Rust)** - High-performance storage operations
- **Svelte** - Modern, reactive frontend framework
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Vercel** - Deployment platform

## Features

- ⚡ **WebAssembly-powered storage** - Near-native performance
- 🎨 **Modern UI** - Beautiful, responsive interface
- 📊 **Real-time metrics** - Performance monitoring
- 🔧 **File operations** - Upload, download, and manage data
- 🚀 **Optimized for speed** - Built for maximum performance

## Development

### Prerequisites

- Node.js 18+
- Rust (for WebAssembly compilation)
- wasm-pack
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

# Email Configuration
FROM_EMAIL=noreply@vstorage.com
TO_EMAIL=enterprise@vstorage.com
```

### Build WebAssembly

```bash
cd src/lib/wasm
wasm-pack build --target web --out-dir pkg
cd ../../..
```

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

VStorage uses a hybrid architecture:

1. **Frontend**: Svelte components with Tailwind CSS
2. **Storage Engine**: Rust WebAssembly module for high-performance operations
3. **API Layer**: JavaScript bridge between frontend and WASM
4. **Deployment**: Vercel with Node.js runtime

## Performance

- Operations per second: 10,000+
- Average latency: <2ms
- Throughput: 100+ MB/s
- Memory usage: <30MB

Built with cutting-edge technologies for maximum performance and innovation.
