import { MdCode, MdLightbulb, MdRocketLaunch } from 'react-icons/md';

export interface JourneyItem {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  period: string;
  description: string;
}

export const journeyData: JourneyItem[] = [
{
  id: '1',
  icon: MdRocketLaunch,
  title: 'Operational Product Builder & Business Operator',
  period: '2021 – Present • Founder / Product Builder',
  description:
    'Currently building and operating software based on firsthand business experience. Designed POS systems, inventory and payroll platforms, workforce tools, call center auditing systems, and automation pipelines rooted in real operational pain points. This phase blends engineering, product design, and business ownership to create systems that teams rely on daily.',
},
{
  id: '2',
  icon: MdLightbulb,
  title: 'Enterprise & Long-Running Systems',
  period: '2018 – 2021 • Senior Software Engineer',
  description:
    'Worked on large-scale, long-lived systems supporting international and enterprise clients. Built and maintained platforms involving data aggregation, automated verification, third-party integrations, and business-critical workflows. Contributed to architectural decisions, performance tuning, and system stability over time.',
},
{
  id: '3',
  icon: MdLightbulb,
  title: 'Operational Systems & Data-Driven Platforms',
  period: '2016 – 2018 • Senior Software Engineer',
  description:
    'Took ownership of operational and analytics-heavy systems, including internal dashboards, reporting tools, and auditing platforms. Worked with high-volume data, call logs, and transactional records, focusing on data accuracy, traceability, and reliability for billing, performance tracking, and decision-making.',
},
{
  id: '4',
  icon: MdCode,
  title: 'Full-Stack Development & Client Platforms',
  period: '2014 – 2016 • Software Developer',
  description:
    'Transitioned into full-stack development, building custom web applications for multiple clients. Delivered systems such as internal tools, delivery platforms, and data-driven applications using PHP, Laravel, JavaScript frameworks, and MySQL. Gained hands-on experience turning business requirements into working production systems.',
},
{
  id: '5',
  icon: MdCode,
  title: 'Early Web & Systems Foundations',
  period: '2012 – 2014 • Web Developer',
  description:
    'Began building production websites and CMS-driven systems from real client requirements. Worked extensively with HTML, CSS, JavaScript, PHP, and WordPress, translating design mockups into responsive, functional systems. This phase established strong fundamentals in front-end discipline, backend logic, and delivering under client expectations.',
},

];
