# Product Catalog - Quick Reference

## Running the Project

Start development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Run production build:
```bash
npm start
```

Lint code:
```bash
npm run lint
```

## Pages & Routes

- `/` - Home page with featured products
- `/products` - Full product catalog
- `/products/[slug]` - Individual product detail pages
- `/custom-builds` - Custom development services
- `/builder` - About the builder
- `/contact` - Contact page

## Key Files to Edit

### Add/Edit Products
`data/products.ts` - All product data

### Add/Edit Custom Build Case Studies
`data/customBuilds.ts` - Custom build examples

### Update Navigation
`app/layout.tsx` - Header and footer

### Modify Components
`components/` - All reusable UI components

## Component Usage Examples

### Button
```tsx
<Button variant="primary" size="lg">Click Me</Button>
<Button variant="outline">Learn More</Button>
```

### Badge
```tsx
<Badge variant="live">LIVE</Badge>
<Badge variant="beta">BETA</Badge>
```

### Section
```tsx
<Section title="Title" subtitle="Subtitle">
  {children}
</Section>
```

### ProductCard
```tsx
<ProductCard product={productObject} />
```

## Product Data Structure

```typescript
{
  id: string;
  name: string;
  slug: string;
  description: string;
  category: 'sale' | 'internal' | 'experiment';
  status: 'live' | 'beta' | 'coming-soon';
  tagline?: string;
  features?: string[];
  pricing?: string;
  link?: string;
}
```

## Design Guidelines

- Background: Soft pastel (peach/pink) - defined in globals.css
- Cards: White (#FFFFFF)
- Text: Black (#000000)
- Buttons: Solid colors (blue, purple)
- No gradients on cards or text
- Rounded corners and subtle shadows

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Static data (no backend)
- Vercel-ready deployment

## Build Output

All pages are statically generated at build time:
- Fast loading
- SEO-friendly
- No server required (except for Next.js server features)
- Can be deployed to Vercel, Netlify, or any static host

## Next Steps

1. Replace placeholder content in data files
2. Add product images to `/public/images`
3. Customize colors in components
4. Update company information in layout footer
5. Configure domain and deploy to Vercel
