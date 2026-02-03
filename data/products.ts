
export type BadgeStatus = 'Live' | 'Subscription' | 'Coming Soon';

export interface Product {
  id: string;
  name: string;
  status: BadgeStatus;
  tagline: string;
  heroImage: string;
  galleryImages: string[];
  overview: string;
  features: string[];
  useCases: string[];
  primaryActionLabel: string;
  secondaryActionLabel: string;
}

export const products: Product[] = [
{
  id: '1',
  name: 'Laundry POS System',
  status: 'Live',
  tagline: 'End-to-end job tracking, payments, and reporting built for real laundry operations.',
  heroImage: '/images/lpos2.png',
  galleryImages: [
    '/images/lpos2.png',
    '/images/lpos-job-flow.png',
    '/images/lpos-receipt.png',
  ],
  overview:
    'Laundry POS System is a mobile-first point-of-sale designed specifically for laundromats and laundry service businesses. It streamlines job creation, washing and drying workflows, payments, and daily reporting—helping operators run their business with clarity and control.',
  features: [
    'Estimate and job lifecycle tracking (created, washing, drying, ready, completed)',
    'Flexible payment handling with partial payments and cash tracking',
    'Customer job history and quick repeat job creation',
    'Daily shift summaries and batch-based sales reporting',
    'Receipt generation for customers and internal records',
    'Tablet-friendly interface optimized for front-desk use',
  ],
  useCases: [
    'Self-service and full-service laundromats',
    'Laundry shops with manual or semi-automated machines',
    'Small laundry businesses transitioning from paper or spreadsheets',
  ],
  primaryActionLabel: 'Request Demo',
  secondaryActionLabel: 'Contact Sales',
},

{
  id: '2',
  name: 'Econosave Grocery Delivery',
  status: 'Subscription',
  tagline: 'A modern grocery ordering and delivery platform built for local stores.',
  heroImage: '/images/econo2.png',
  galleryImages: [
    '/images/econo2.png',
    '/images/econo-s2.png',
    '/images/econo-s1.png'
  ],
  overview:
    'Econosave is a mobile grocery delivery platform designed for neighborhood stores, sari-sari owners, and local distributors. It streamlines product browsing, order placement, and last-mile delivery through a clean, mobile-first experience.',
  features: [
    'Mobile grocery catalog with categories and product images',
    'Case-based and retail pricing support',
    'Customer ordering app with cart and checkout',
    'Order management for store admins',
    'Delivery-ready workflow for riders and fulfillment',
    'Real-time order status updates',
  ],
  useCases: [
    'Sari-sari and neighborhood grocery stores',
    'Local grocery delivery businesses',
    'Wholesale-to-retail distributors',
    'Community-based delivery services',
  ],
  primaryActionLabel: 'Join Waitlist',
  secondaryActionLabel: 'View Demo',
},
{
  id: '3',
  name: 'Workforce Management System',
  status: 'Coming Soon',
  tagline: 'Attendance, payroll, and workforce tracking built for real operational needs.',
  heroImage: '/images/worklio2.png',
  galleryImages: [
    '/images/worklio2.png',
    '/images/worklio-g1.png',
    '/images/worklio-g2.png',
  ],
  overview:
    'Workforce Management System is an operations-focused platform designed to simplify employee attendance tracking, payroll computation, and workforce oversight. Built for small to mid-sized businesses, it replaces manual logs and spreadsheets with a clear, reliable system aligned with real payroll rules and business workflows.',
  features: [
    'Daily attendance and time tracking with flexible schedules',
    'Automated payroll computation based on monthly or daily rates',
    'Support for statutory deductions and custom adjustments',
    'Employee profiles with attendance and pay history',
    'Payroll summaries and period-based reporting',
    'Designed to integrate with existing POS and internal systems',
  ],
  useCases: [
    'Small and growing businesses managing hourly or salaried staff',
    'Operations teams transitioning from manual attendance tracking',
    'Businesses needing accurate payroll without complex HR software',
  ],
  primaryActionLabel: 'Notify Me',
  secondaryActionLabel: 'Learn More',
},
];

