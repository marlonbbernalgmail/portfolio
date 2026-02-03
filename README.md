# Product Catalog Website

A clean, static-first product catalog website built for showcasing software products and solutions. This site presents SaaS products, custom-built systems, and engineering experiments in a professional, easy-to-navigate format.

## Features

- **Modern Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **Static-First**: All data is stored in TypeScript files (no backend required)
- **Responsive Design**: Mobile-friendly layouts with Tailwind CSS
- **Clean UI**: White cards on soft pastel background with solid black text
- **Product Categories**: 
  - SaaS Products (for sale)
  - Internal Systems (showcase)
  - Engineering Experiments (R&D projects)
- **Dynamic Routes**: Individual product detail pages with slugs
- **Reusable Components**: Modular, type-safe UI components

## Project Structure

```
/app
  /products
    page.tsx              # Products listing page
    /[slug]
      page.tsx            # Dynamic product detail pages
  /custom-builds
    page.tsx              # Custom development services page
  /builder
    page.tsx              # About the builder page
  /contact
    page.tsx              # Contact page
  layout.tsx              # Root layout with navigation and footer
  page.tsx                # Home page
  globals.css             # Global styles with pastel background

/components
  ProductCard.tsx         # Reusable product card component
  Button.tsx              # Button component with variants
  Badge.tsx               # Status/category badge component
  Section.tsx             # Page section wrapper component

/data
  products.ts             # Product catalog data and types
  customBuilds.ts         # Custom build case studies data

/public
  /images                 # Directory for product images
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies (already done):
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Adding Content

### Adding a New Product

Edit `/data/products.ts` and add a new product object:

```typescript
{
  id: 'unique-id',
  name: 'Product Name',
  slug: 'product-slug',
  description: 'Product description',
  category: 'sale' | 'internal' | 'experiment',
  status: 'live' | 'beta' | 'coming-soon',
  tagline: 'Short tagline (optional)',
  features: ['Feature 1', 'Feature 2'],
  pricing: 'Starting at $X/month (optional)',
  link: 'https://example.com (optional)',
}
```

### Adding a Custom Build Case Study

Edit `/data/customBuilds.ts` and add a new case study:

```typescript
{
  id: 'unique-id',
  title: 'Project Title',
  description: 'Project description',
  industry: 'Industry name (optional)',
  technologies: ['Tech 1', 'Tech 2'],
  outcome: 'Results achieved (optional)',
}
```

## Design System

### Colors

- Background: Soft pastel (peach/pink) with radial gradients
- Cards: Solid white (#FFFFFF)
- Text: Solid black (#000000)
- Buttons: Solid colors (blue, purple)
- No gradients on text or cards

### Components

All components are in `/components` and are fully typed with TypeScript:

- **Button**: Primary, secondary, and outline variants
- **Badge**: Status indicators for products
- **ProductCard**: Displays product information in a card layout
- **Section**: Wrapper for page sections with optional titles

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Inter (via Google Fonts)
- **Deployment**: Vercel-ready

## Deployment

This project is optimized for deployment on Vercel:

1. Push to GitHub
2. Import repository in Vercel
3. Deploy (zero configuration needed)

Alternatively, you can deploy to any platform that supports Next.js:

```bash
npm run build
npm start
```

## Future Enhancements (Not Implemented)

These features are intentionally not included in this initial version:

- Authentication
- Content Management System (CMS)
- Payment integration
- Backend API
- Form submission handling
- Blog functionality
- User accounts

## Support

For questions or issues, visit the Contact page at `/contact`.
