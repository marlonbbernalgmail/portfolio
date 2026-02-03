export interface Project {
  id: number;
  title: string;
  category: 'SaaS Product' | 'Internal System' | 'Client Project' | 'SaaS (Planned)' | 'Internal / Client Tools' | 'Prototype';
  description: string;
  techStack: string[];
  detailsLink: string;
  details: {
    status: string;
    overview: string;
    problem: string;
    solution: string;
    keyCapabilities: string[];
    availability: string;
  };
}

export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'saas-product', label: 'SaaS Product' },
  { id: 'internal-system', label: 'Internal System' },
  { id: 'client-project', label: 'Client Project' },
  { id: 'saas-planned', label: 'SaaS (Planned)' },
  { id: 'internal-client-tools', label: 'Internal / Client Tools' },
  { id: 'prototype', label: 'Prototype' },
];

export const projectsData: Project[] = [
{
  id: 1,
  title: 'Laundry POS System',
  category: 'SaaS Product',
  description:
    'A point-of-sale and operations management system built specifically for laundry and dry-cleaning businesses. Handles job intake, pricing, payments, shift tracking, and daily reporting, designed from real workflows inside an operating laundry business.',
  techStack: ['React Native', 'Firestore', 'POS & Printer Integration','Mobile Application'],
  detailsLink: '#',
  details: {
    status: 'Live',
    overview:
      'A full operational POS system designed from firsthand experience running a laundry business. The system consolidates daily operations into a single, reliable platform.',
    problem:
      'Laundry shops often rely on paper logs, spreadsheets, or generic POS systems that do not match real workflows. This makes it difficult to accurately track jobs, payments, and daily remittances, increasing the risk of billing mistakes, unrecorded transactions, and lost or unaccounted laundry items.',
    solution:
      'Built a workflow-first POS that mirrors real laundry operations, covering job intake, pricing, tracking, payments, and reporting with minimal friction for staff.',
    keyCapabilities: [
      'Job intake and status tracking',
      'Custom pricing and services',
      'Cash and digital payment handling',
      'Shift-based and daily reports',
      'Receipt and printer integration',
    ],
    availability: 'Available for subscription',
  },
},
{
  id: 2,
  title: 'Inventory & Stock Management System',
  category: 'Internal System',
  description:
    'A practical inventory tracking system developed to replace spreadsheet-based stock monitoring. Supports item movements, low-stock alerts, supplier records, and reporting for small retail and service-based businesses.',
  techStack: ['PHP', 'Laravel', 'MySQL', 'Operational Reporting'],
  detailsLink: '#',
  details: {
    status: 'Internal Use',
    overview:
      'A lightweight inventory system focused on reliability and simplicity for day-to-day operations.',
    problem:
      'Manual inventory tracking causes stock discrepancies, missed restocking, and no visibility into historical item movement.',
    solution:
      'Implemented a straightforward inventory system emphasizing stock movement, alerts, and reporting without unnecessary complexity.',
    keyCapabilities: [
      'Item and category management',
      'Stock movement tracking',
      'Low-stock alerts',
      'Supplier records',
      'Inventory summaries and reports',
    ],
    availability: 'Internal / client deployments',
  },
},
{
  id: 3,
  title: 'Grocery Delivery & Ordering Platform',
  category: 'Client Project',
  description:
    'A cross-platform grocery ordering and delivery system built for both mobile and web. Customers can browse products, place orders, and track deliveries, while operators manage fulfillment and inventory through a centralized admin interface.',
  techStack: [
    'React Native (Mobile)',
    'React / Next.js (Web)',
    'Firestore',
  ],
  detailsLink: '#',
  details: {
    status: 'Completed',
    overview:
      'A cross-platform ordering and delivery platform built to support local grocery operations across mobile and web.',
    problem:
      'Local grocery stores needed an affordable way to accept online orders while keeping inventory, fulfillment, and delivery workflows aligned across multiple platforms.',
    solution:
      'Built a shared backend using Firestore with separate mobile and web clients. The mobile app handles customer ordering and delivery tracking, while the web app provides an admin interface for inventory, order management, and operational oversight.',
    keyCapabilities: [
      'Mobile app for customer ordering and delivery tracking',
      'Web-based admin dashboard',
      'Real-time order and inventory synchronization',
      'Delivery status management',
      'Cross-platform data consistency',
    ],
    availability: 'Past client project',
  },
},

{
  id: 4,
  title: 'Workforce Management & Payroll System',
  category: 'SaaS Product',
  description:
    'A workforce management platform designed to centralize employee records, attendance tracking, payroll computation, government deductions, and reporting. Built to help small teams move away from manual payroll processes.',
  techStack: ['Next.js', 'Laravel', 'MySQL', 'Payroll & Attendance Logic'],
  detailsLink: '#',
  details: {
    status: 'Ongoing Development',
    overview:
      'A planned SaaS platform to simplify attendance tracking and payroll processing for small and growing teams.',
    problem:
      'Manual attendance and payroll processes are error-prone, time-consuming, and difficult to audit.',
    solution:
      'Designed a centralized system to automate attendance capture, payroll computation, and statutory deductions with clear reporting.',
    keyCapabilities: [
      'Employee records management',
      'Attendance tracking',
      'Payroll computation',
      'Government deductions handling',
      'Payroll and attendance reports',
    ],
    availability: 'Planned SaaS product',
  },
},
{
  id: 5,
  title: 'Insurance Verification & Processing System',
  category: 'Client Project',
  description:
    'A backend system built to automate insurance eligibility checks, policy verification, and status tracking. Integrated with external APIs and internal dashboards to reduce manual processing and turnaround time.',
  techStack: ['PHP', 'Laravel', 'Python', 'ExtJs'],
  detailsLink: '#',
  details: {
    status: 'Completed',
    overview:
      'A backend automation system built to speed up insurance eligibility and verification workflows.',
    problem:
      'Manual insurance verification involved multiple systems, long turnaround times, and frequent human error.',
    solution:
      'Integrated third-party APIs with internal dashboards to automate verification and provide clear status tracking.',
    keyCapabilities: [
      'Policy eligibility verification',
      'External API integrations',
      'Status tracking dashboards',
      'Audit-friendly validation',
    ],
    availability: 'Client system',
  },
},
{
  id: 6,
  title: 'Call Center Auditing & Analytics System',
  category: 'Client Project',
  description:
    'An internal auditing and analytics system built for call center operations. Extracts and normalizes raw call data from VICIdial systems to support billing accuracy, agent performance tracking, and operational reporting.',
  techStack: [
    'Perl (VICIdial Integration)',
    'PHP / Laravel / Python',
    'MySQL / Redis',
    'Data Processing & Auditing',
  ],
  detailsLink: '#',
  details: {
    status: 'Completed',
    overview:
      'A backend-heavy system designed to turn raw call logs from a VICIdial environment into structured, auditable data usable by operations, finance, and management teams.',
    problem:
      'Native VICIdial call logs are difficult to use directly for auditing and billing. Raw data lacks structure for measuring agent productivity, validating billable time, and analyzing call outcomes at scale.',
    solution:
      'Built data extraction scripts using native Perl to pull call logs directly from the VICIdial system, then transformed and normalized the data into a structured format. Developed dashboards and reporting tools to support auditing, billing, and performance analysis.',
    keyCapabilities: [
      'Extraction of raw call logs from VICIdial',
      'Normalization of call data for auditing and billing',
      'Agent time tracking and billable hours computation',
      'Metrics for productivity, dropped calls, and successful calls',
      'Custom dashboards for operational and financial review',
      'Campaign and client data management',
    ],
    availability: 'Internal and client use',
  },
},
{
  id: 7,
  title: 'Hardware Integration Prototypes',
  category: 'Prototype',
  description:
    'Experimental projects exploring printer and scanner integration for web and mobile systems. Tested browser-based approaches, local bridge services, and mobile-native integrations for operational environments.',
  techStack: ['React Native', 'WebSocket', 'ESC/POS', 'Hardware APIs'],
  detailsLink: '#',
  details: {
    status: 'Prototype',
    overview:
      'Research and prototype work focused on integrating physical hardware into operational systems.',
    problem:
      'Web platforms have limited access to printers and scanners, complicating real-world operational workflows.',
    solution:
      'Tested multiple approaches including browser APIs, local bridge services, and mobile-native integrations.',
    keyCapabilities: [
      'Printer integration',
      'Scanner integration',
      'Local bridge services',
      'Cross-platform testing',
    ],
    availability: 'Prototype / research',
  },
},
{
  id: 8,
  title: 'Operational Automation & Reporting Tools',
  category: 'Internal / Client Tools',
  description:
    'A collection of small automation tools created to eliminate repetitive operational tasks such as report generation, data reconciliation, and scheduled processing. Focused on reliability and low maintenance.',
  techStack: ['Laravel', 'JavaScript', 'Cron Jobs', 'Queues'],
  detailsLink: '#',
  details: {
    status: 'Active Use',
    overview:
      'A set of focused automation tools built to reduce manual operational workload.',
    problem:
      'Teams spent excessive time on repetitive tasks such as report preparation and data reconciliation.',
    solution:
      'Built scheduled jobs, automated pipelines, and dashboards to handle recurring operational tasks reliably.',
    keyCapabilities: [
      'Automated report generation',
      'Scheduled jobs and data sync',
      'Operational dashboards',
      'Error logging and monitoring',
    ],
    availability: 'Internal and client use',
  },
},
];
