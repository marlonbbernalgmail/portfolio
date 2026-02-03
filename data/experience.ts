import { MdSettings, MdGroup, MdTrendingUp } from 'react-icons/md';
import { IconType } from 'react-icons';

export interface ExperienceItem {
  id: number;
  icon: IconType;
  iconBgColor: 'pastel-peach' | 'pastel-pink';
  title: string;
  description: string;
  spanFull?: boolean;
}

export const experienceData: ExperienceItem[] = [
{
  id: 1,
  icon: MdSettings,
  iconBgColor: 'pastel-peach',
  title: 'Building Internal Systems',
  description:
    'Designing and developing internal tools such as POS systems, inventory tracking, payroll, and operational dashboards tailored to how businesses actually work. Focused on replacing spreadsheets and manual processes with reliable systems that teams can depend on daily.',
},
{
  id: 2,
  icon: MdGroup,
  iconBgColor: 'pastel-pink',
  title: 'Designing for Non-Tech Users',
  description:
    'Building software for front-desk staff, operators, and business owners with little to no technical background. Prioritizing clarity, speed, and simplicity so systems are easy to use in busy, real-world environments.',
},
{
  id: 3,
  icon: MdTrendingUp,
  iconBgColor: 'pastel-peach',
  title: 'Scaling Through Automation',
  description:
    'Identifying repetitive operational tasks and implementing automation for reporting, reconciliation, and data flow. Reducing manual effort, minimizing errors, and allowing small teams to operate efficiently as the business grows.',
  spanFull: true,
},

];
