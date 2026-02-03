export interface Experiment {
  id: string;
  name: string;
  description: string;
  typeLabel: string;
  dateLabel: string;
  title: string;
  context: string;
  problem: string;
  approach: string;
  codeTitle?: string;
  codeSnippet?: string;
  learnings: string[];
  limitations: string;
  nextSteps: string;
  relatedProjectLabel?: string;
}

export const experiments: Experiment[] = [
  {
    id: '1',
    name: 'Offline-First Sync Prototype',
    description:
      'Prototype exploring reliable data synchronization strategies for systems operating with unstable or intermittent internet connectivity.',
    typeLabel: 'Prototype',
    dateLabel: 'March 2024',
    title: 'Offline-First Sync Prototype',
    context:
      'Many field and front-line operations depend on systems that must function reliably despite unstable or unavailable internet connections. In these environments, traditional online-first synchronization approaches often result in lost updates, data conflicts, and poor user trust.',
    problem:
      'Most existing synchronization solutions assume stable connectivity and fail poorly when network interruptions occur. This leads to data inconsistencies, duplicate records, and manual reconciliation work that disrupts daily operations.',
    approach:
      'Built a prototype using IndexedDB for local persistence combined with a conflict-free replicated data type (CRDT) approach to reduce merge conflicts. Implemented a queue-based synchronization mechanism that retries failed operations, tracks pending changes, and intelligently merges updates once connectivity is restored.',
    codeTitle: 'Queue-Based Sync Strategy',
    codeSnippet: `const syncQueue = new PQueue({ concurrency: 1 });

async function queueSync(operation) {
  return syncQueue.add(async () => {
    try {
      await syncToServer(operation);
      await markAsSynced(operation.id);
    } catch (error) {
      await markAsPending(operation.id);
      throw error;
    }
  });
}`,
    learnings: [
      'CRDT-based merging significantly reduces data conflicts but increases payload size by approximately 30%',
      'Retry queues require exponential backoff to prevent server overload during reconnection storms',
      'Explicit UI feedback for pending and synced operations greatly improves user trust',
      'IndexedDB performs reliably for datasets under ~10MB but requires careful indexing to avoid performance degradation',
    ],
    limitations:
      'The prototype does not efficiently handle large binary assets such as images or documents. Conflict resolution for deeply nested or highly relational data structures still requires partial manual intervention.',
    nextSteps:
      'Investigate differential synchronization to reduce payload sizes. Introduce a visual conflict resolution interface for edge cases and validate behavior under real-world network conditions using aggressive throttling and packet loss simulations.',
    relatedProjectLabel: 'View Full Project',
  },

  {
    id: '2',
    name: 'Workflow Automation Sandbox',
    description:
      'Experimental environment for safely testing and refining automation logic before deployment into production systems.',
    typeLabel: 'Experiment',
    dateLabel: 'January 2024',
    title: 'Workflow Automation Sandbox',
    context:
      'Operational workflows often involve complex, multi-step processes where automation can significantly reduce manual effort and human error. However, validating automation logic directly in production environments introduces risk and operational disruption.',
    problem:
      'Traditional staging environments rarely reflect the true complexity of production workflows. Edge cases related to timing, state transitions, and data dependencies often surface only after deployment, making pre-release validation unreliable.',
    approach:
      'Designed a sandbox environment that mirrors production workflow states using synthetic but realistic datasets. Implemented a visual workflow builder with step-by-step execution previews, state snapshots, and rollback capabilities to observe and validate automation behavior safely.',
    codeTitle: 'Workflow Step Executor',
    codeSnippet: `class WorkflowExecutor {
  async executeStep(step, context) {
    const snapshot = this.createSnapshot(context);

    try {
      const result = await step.action(context);
      return { success: true, result, snapshot };
    } catch (error) {
      await this.rollback(snapshot);
      return { success: false, error, snapshot };
    }
  }
}`,
    learnings: [
      'Visualizing workflow state transitions quickly exposes logic gaps and unintended side effects',
      'Snapshot-based rollback is more predictable and reliable than compensation-based error handling',
      'Synthetic datasets must intentionally include rare edge cases to be effective',
      'Time-dependent workflows require execution acceleration to be testable at scale',
    ],
    limitations:
      'The sandbox does not accurately simulate third-party API rate limits or external service failures. Accelerated execution can mask certain real-world timing issues.',
    nextSteps:
      'Introduce network and API failure simulation. Add A/B testing capabilities for comparing automation strategies and build a reusable library of common workflow patterns.',
  },

  {
    id: '3',
    name: 'Hardware Integration Tests',
    description:
      'Prototypes exploring practical approaches to integrating printers and scanners into web and mobile operational systems.',
    typeLabel: 'Prototype',
    dateLabel: 'November 2023',
    title: 'Hardware Integration Tests',
    context:
      'Operational systems frequently require interaction with physical hardware such as printers and barcode scanners. Browser security models and fragmented hardware protocols make cross-platform integration difficult and inconsistent.',
    problem:
      'Web applications are restricted from directly accessing USB or network-connected hardware, while native mobile applications require platform-specific implementations. Maintaining consistent behavior across platforms introduces significant complexity.',
    approach:
      'Prototyped three integration strategies: direct browser access using the WebUSB API, a local WebSocket-based bridge service for unsupported browsers, and native mobile modules built with React Native. Each approach was tested across multiple printer models and environments.',
    codeTitle: 'Local WebSocket Bridge Pattern',
    codeSnippet: `// Local bridge service
const bridge = new WebSocket('ws://localhost:8080');

bridge.send(JSON.stringify({
  action: 'print',
  printer: 'HP_LaserJet',
  data: documentBuffer,
}));

bridge.onmessage = (event) => {
  const { status, jobId } = JSON.parse(event.data);
  updatePrintStatus(jobId, status);
};`,
    learnings: [
      'WebUSB offers excellent performance but is limited to Chromium-based browsers',
      'Local bridge services provide broad compatibility but introduce installation and maintenance overhead',
      'Abstracting printer drivers is essential due to significant vendor inconsistencies',
      'Clear error reporting and print status feedback are critical for operator confidence',
      'Network printers are generally easier to integrate than USB-connected devices',
    ],
    limitations:
      'The WebSocket bridge approach requires users to install and maintain a local service. Driver compatibility issues still require manual configuration for certain printer models.',
    nextSteps:
      'Package the bridge service as a self-updating desktop application. Build a printer compatibility matrix and evaluate WebHID for more reliable scanner integration.',
  },
];

