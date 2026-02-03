export interface ResearchProject {
  id: string;
  name: string;
  description: string;
}

export const researchProjects: ResearchProject[] = [
{
  id: '1',
  name: 'Offline-First Sync Prototype',
  description: 'Prototype exploring reliable data synchronization for systems operating with unstable or no internet connectivity.',
},
{
  id: '2',
  name: 'Workflow Automation Sandbox',
  description: 'Experimental environment used to test and refine automation logic before deploying to production systems.',
},
{
  id: '3',
  name: 'Hardware Integration Tests',
  description: 'Prototypes focused on integrating printers and scanners into mobile and web-based operational systems.',
},
];
