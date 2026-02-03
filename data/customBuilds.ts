export interface CustomSystem {
  id: string;
  name: string;
  description: string;
  icon: string;
  badges: {
    text: string;
    variant: 'primary' | 'secondary';
  }[];
}

export const customSystems: CustomSystem[] = [
{
  id: '1',
  name: 'Operational Task Automation',
  description: 'Automated internal workflows built to remove repetitive manual tasks and improve day-to-day operational efficiency.',
  icon: 'settings',
  badges: [
    { text: 'Internal Tool', variant: 'primary' },
    { text: 'Automation', variant: 'secondary' },
  ],
},
{
  id: '2',
  name: 'Internal Booking System',
  description: 'Lightweight scheduling system designed for internal use, simplifying appointment and resource management without SaaS overhead.',
  icon: 'event',
  badges: [
    { text: 'Client Project', variant: 'primary' },
    { text: 'Internal System', variant: 'secondary' },
  ],
},

];
