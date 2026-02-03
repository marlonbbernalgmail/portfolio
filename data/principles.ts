import { MdCheckCircle } from 'react-icons/md';
import { IconType } from 'react-icons';

export interface PrincipleItem {
  id: number;
  icon: IconType;
  title: string;
  description: string;
}

export const principlesData: PrincipleItem[] = [
{
  id: 1,
  icon: MdCheckCircle,
  title: 'Understand the operation before writing code',
  description:
    'I start by understanding how the business actually operates on a daily basis. Many problems are caused by unclear workflows, not missing features, and the right solution often combines small process changes with targeted software.',
},
{
  id: 2,
  icon: MdCheckCircle,
  title: 'Build with real users, not assumptions',
  description:
    'I work closely with the people who use the system—front-desk staff, operators, and managers—to observe where friction happens. Real usage uncovers issues that never appear in tickets or specifications.',
},
{
  id: 3,
  icon: MdCheckCircle,
  title: 'Prefer simple, reliable systems',
  description:
    'I choose proven, maintainable technology over unnecessary abstraction. Systems that are easy to understand, debug, and extend are more valuable than clever solutions that create long-term risk.',
},
{
  id: 4,
  icon: MdCheckCircle,
  title: 'Be transparent about trade-offs',
  description:
    'I communicate openly about limitations, technical debt, and timelines. Clear expectations help stakeholders make better decisions and prevent surprises during development and operations.',
},

];
