# Glow - AI-Powered Skincare Analysis Platform

## Overview

Glow is an innovative skincare analysis platform that leverages artificial intelligence to provide personalized skincare recommendations and product analysis. Our platform helps users understand their skin conditions, track their skincare journey, and make informed decisions about skincare products.

## Functionality

- **Product Scanner:** Analyze skincare product ingredients with our advanced AI scanner to determine suitability
- **Skin Analysis:** Upload photos or complete questionnaires for facial or body skin analysis
- **Skin Age Detection:** Receive estimated skin age analysis from uploaded photos
- **Personalized Recommendations:** Get customized skincare advice and product recommendations based on your analysis
- **Progress Tracking:** Monitor your skincare improvements over time with tracking features
- **Educational Content:** Access skincare myths, FAQs, and blog articles to enhance your skincare knowledge
- **User Dashboard:** View summaries, progress reports, and personalized tips in a user-friendly interface

## Tech Stack

- **Core:** React 19, Vite
- **Routing:** React Router DOM 7
- **Styling:** Tailwind CSS, PostCSS, tailwindcss-animate
- **UI Components:** Shadcn UI pattern (using Radix UI, CVA, tailwind-merge), Headless UI
- **Icons:** Lucide Icons, React Icons
- **Animation:** Framer Motion
- **Charting/Visualization:** Chart.js, Recharts, React Circular Progressbar
- **Utilities:** clsx, react-select-country-list, world-countries
- **Linting/Typing:** ESLint, TypeScript

## Project Structure

```
src/
├── assets/            # Static assets (images, fonts)
├── components/        # React components
│   ├── check-in/      # Check-in flow components
│   │   ├── advance/   # Advanced check-in components
│   │   └── freee/     # Free check-in components
│   ├── common/        # Reusable components across the application
│   ├── homepage/      # Dashboard components
│   ├── ingredients/   # Components for ingredient analysis
│   ├── layout/        # Layout components like Header and Footer
│   ├── profile/       # User profile components
│   ├── sections/      # Landing page section components
│   ├── signup/        # Authentication and multi-step analysis flows
│   │   └── product/   # Product-related signup flows
│   │       ├── productAnalysis/ # Product analysis components
│   │       ├── skinAgeAnalysis/ # Skin age analysis components
│   │       └── skinAnalysis/    # Skin analysis components
│   ├── treatments/    # Treatment tracking components
│   └── ui/            # Shadcn UI base components
├── lib/               # Utility functions and shared logic
├── styles/            # Global styles and CSS configurations
├── App.jsx            # Main application component with routing
└── main.jsx           # Entry point for the application
```

## Pages and Routes

The application includes the following main pages:

- **Landing Page:** `/` - Introduction to Glow and its features
- **Authentication:** `/auth` - User login and registration
- **Product Selection:** `/product-choice` - Choose between different analysis types
- **Skin Analysis Flow:**
  - `/skin-area-selection` - Select area for skin analysis
  - `/get-ready/:skinType` - Preparation screen for skin analysis
  - `/analysis/:skinType` - Skin analysis form
  - `/skin-analysis-display` - Analysis in progress screen
  - `/skin-analysis-result` - Results display
- **Product Analysis Flow:**
  - `/scan-product` - Scan product for analysis
  - `/product-analysis-display` - Analysis in progress screen
  - `/product-analysis-result` - Product analysis results
- **Skin Age Analysis:**
  - `/upload-image` - Upload photo for skin age analysis
  - `/skin-age-analysis-flow` - Skin age analysis process
- **Dashboard:**
  - `/dashboard-skin` - Skin analysis dashboard
  - `/dashboard-product` - Product analysis dashboard
- **User Features:**
  - `/user-profile` - User profile management
  - `/my-ingredients` - Saved ingredients list
  - `/tracking-free` - Free tracking features
  - `/tracking-paid` - Premium tracking features
  - `/daily-tracker` - Daily skincare tracking
- **Check-in Features:**
  - `/check-in`, `/check-in-2`, `/check-in-3` - Advanced check-in flow
  - `/check-in-basic` - Basic check-in process

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/sh1vdatt/Glow.git
```

2. Navigate to the project directory

```bash
cd Glow
```

3. Install dependencies

```bash
npm install
# or
yarn install
```

4. Start the development server

```bash
npm run dev
# or
yarn dev
```

The application should now be running at `http://localhost:5173` (or another port if 5173 is in use).

### Building for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory ready for deployment.

## Deployment

The project is configured for Firebase Hosting. After building the project:

```bash
firebase deploy
```

- GitHub: [@sh1vdatt](https://github.com/sh1vdatt)
