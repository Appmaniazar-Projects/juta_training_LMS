# Juta Training Learning Management System

A modern, full-stack Learning Management System (LMS) built for Juta Consulting's Training & Skills Development programs. This platform provides comprehensive training management capabilities with a beautiful, responsive interface.

## 🚀 Features

### Core Functionality
- **User Authentication**: Secure login system with email/password authentication
- **Student Onboarding**: Guided onboarding process for new students
- **Course Management**: Browse and enroll in training modules
- **Assessment System**: Take assessments and track progress
- **User Profiles**: Personalized student profiles with progress tracking
- **Responsive Design**: Mobile-first design that works on all devices

### Technical Features
- **Modern UI/UX**: Built with Radix UI components and TailwindCSS
- **TypeScript**: Full type safety across frontend and backend
- **Single Page Application**: React Router 6 for seamless navigation
- **API Integration**: RESTful API with Express.js backend
- **Hot Reload**: Development server with instant refresh
- **Production Ready**: Optimized build process with multiple deployment options

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and concurrent features
- **React Router 6** - Client-side routing in SPA mode
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and development server
- **TailwindCSS 3** - Utility-first CSS framework
- **Radix UI** - Accessible component library
- **Lucide React** - Beautiful icon library
- **Framer Motion** - Smooth animations and transitions

### Backend
- **Express.js** - Fast, minimalist web framework
- **TypeScript** - Type-safe server code
- **Zod** - Schema validation
- **CORS** - Cross-origin resource sharing

### Development Tools
- **Vitest** - Fast unit testing framework
- **Prettier** - Code formatting
- **ESLint** - Code linting
- **PNPM** - Fast, disk space efficient package manager

## 📁 Project Structure

```
juta_training_LMS/
├── client/                     # React SPA frontend
│   ├── components/
│   │   ├── Layout.tsx         # Main layout component
│   │   └── ui/                # Reusable UI components (Radix UI)
│   ├── pages/                 # Route components
│   │   ├── Index.tsx          # Login page (home)
│   │   ├── Onboarding.tsx     # Student onboarding
│   │   ├── Modules.tsx        # Course modules
│   │   ├── Assessment.tsx     # Assessment system
│   │   ├── Profile.tsx        # User profile
│   │   └── NotFound.tsx       # 404 page
│   ├── hooks/                 # Custom React hooks
│   ├── lib/                   # Utility functions
│   ├── global.css             # Global styles and theme
│   └── App.tsx                # App entry point with routing
├── server/                    # Express API backend
│   ├── index.ts               # Server setup and configuration
│   ├── routes/                # API route handlers
│   └── node-build.ts          # Production server build
├── shared/                    # Shared types and utilities
│   └── api.ts                 # API type definitions
├── public/                    # Static assets
│   └── juta-logo.png          # Company logo
└── docs/                      # Documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- PNPM (recommended) or npm/yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Appmaniazar-Projects/juta_training_LMS.git
   cd juta_training_LMS
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

### Available Scripts

```bash
# Development
pnpm dev          # Start development server (client + server)

# Building
pnpm build        # Production build (client + server)
pnpm build:client # Build client only
pnpm build:server # Build server only

# Production
pnpm start        # Start production server

# Development Tools
pnpm typecheck    # TypeScript type checking
pnpm test         # Run Vitest tests
pnpm format.fix   # Format code with Prettier
```

## 🔧 Development

### Adding New Pages

1. Create a new component in `client/pages/MyPage.tsx`
2. Add the route in `client/App.tsx`:
   ```typescript
   import MyPage from './pages/MyPage';
   
   <Route path="/my-page" element={<MyPage />} />
   ```

### Adding API Endpoints

1. Create a new route handler in `server/routes/my-route.ts`:
   ```typescript
   import { RequestHandler } from "express";
   
   export const handleMyRoute: RequestHandler = (req, res) => {
     res.json({ message: 'Hello from my endpoint!' });
   };
   ```

2. Register the route in `server/index.ts`:
   ```typescript
   import { handleMyRoute } from "./routes/my-route";
   app.get("/api/my-endpoint", handleMyRoute);
   ```

### Styling

- **Global Styles**: Edit `client/global.css` for theme customization
- **Component Styles**: Use TailwindCSS utility classes
- **UI Components**: Use pre-built components from `client/components/ui/`

### Type Safety

Shared types are defined in `shared/api.ts` and can be imported in both client and server:
```typescript
import { MyType } from '@shared/api';
```

## 🎨 UI Components

The project includes a comprehensive UI component library based on Radix UI:

- **Forms**: Input, Button, Label, Select, Checkbox, Radio Group
- **Navigation**: Navigation Menu, Breadcrumb, Tabs
- **Feedback**: Alert, Toast, Dialog, Drawer
- **Data Display**: Card, Table, Badge, Avatar
- **Layout**: Separator, Scroll Area, Resizable Panels
- **Charts**: Recharts integration for data visualization

## 🚀 Deployment

### Production Build

```bash
pnpm build
```

### Deployment Options

1. **Traditional Hosting**
   - Build the application: `pnpm build`
   - Deploy the `dist/` folder to any static hosting service
   - Use the `dist/server/node-build.mjs` for the backend

2. **Docker**
   ```dockerfile
   FROM node:18-alpine
   WORKDIR /app
   COPY package*.json ./
   RUN pnpm install
   COPY . .
   RUN pnpm build
   EXPOSE 8080
   CMD ["pnpm", "start"]
   ```

3. **Cloud Platforms**
   - **Vercel**: Connect your GitHub repository
   - **Netlify**: Deploy with the GitHub integration
   - **AWS**: Use AWS Amplify or EC2

## 🧪 Testing

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test --watch

# Run tests with coverage
pnpm test --coverage
```

## 📝 Environment Variables

Create a `.env` file in the root directory:

```env
# Server Configuration
PORT=8080
NODE_ENV=development

# Database (when implemented)
DATABASE_URL=your_database_url

# Authentication (when implemented)
JWT_SECRET=your_jwt_secret
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is proprietary to Juta Consulting. All rights reserved.

## 📞 Support

For support and questions:
- **Organization**: Appmaniazar-Projects
- **Repository**: https://github.com/Appmaniazar-Projects/juta_training_LMS
- **Issues**: Use GitHub Issues for bug reports and feature requests

## 🏢 About Juta Consulting

Juta Consulting is a leading provider of training and skills development programs. This Learning Management System is designed to deliver high-quality educational experiences with modern technology and best practices in online learning.

---

**Built with ❤️ by the Juta Consulting Development Team**
