'use client';

interface ExperimentModalProps {
  isOpen: boolean;
  onClose: () => void;

  typeLabel: string; // e.g. "Prototype", "Experiment"
  dateLabel: string; // e.g. "March 2024"
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

export default function ExperimentModal({
  isOpen,
  onClose,
  typeLabel,
  dateLabel,
  title,
  context,
  problem,
  approach,
  codeTitle,
  codeSnippet,
  learnings,
  limitations,
  nextSteps,
  relatedProjectLabel,
}: ExperimentModalProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl h-full max-h-[90vh] bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Sticky Header */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md border-b border-slate-100 px-6 md:px-10 py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full">
                  {typeLabel}
                </span>
                <span className="text-slate-400 text-sm">{dateLabel}</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                {title}
              </h1>
            </div>

            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 transition-colors"
              aria-label="Close"
            >
              <span aria-label="Close" className="text-2xl leading-none">×</span>
            </button>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto px-6 md:px-24 py-10 space-y-12">

          {/* Context */}
          <Section title="Context">
            <p className="text-slate-600 leading-relaxed text-lg">{context}</p>
          </Section>

          {/* Problem */}
          <Section title="The Problem">
            <p className="text-slate-600 leading-relaxed">{problem}</p>
          </Section>

          {/* Approach */}
          <Section title="Approach">
            <p className="text-slate-600 leading-relaxed mb-6">{approach}</p>

            {codeSnippet && (
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 font-mono text-sm overflow-x-auto">
                {codeTitle && (
                  <div className="flex justify-between items-center mb-4 text-slate-400 border-b border-slate-200 pb-2">
                    <span>{codeTitle}</span>
                    <span className="text-sm" aria-label="Copy code">Copy</span>
                  </div>
                )}
                <pre className="text-slate-800">
                  <code>{codeSnippet}</code>
                </pre>
              </div>
            )}
          </Section>

          {/* Key Learnings */}
          <Section title="Key Learnings">
            <ul className="space-y-4">
              {learnings.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="text-primary mt-1" aria-label="Check">✔</span>
                  <span className="text-slate-600">{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          {/* Limitations */}
          <Section title="Limitations">
            <p className="text-slate-600 leading-relaxed">{limitations}</p>
          </Section>

          {/* Next Steps */}
          <Section title="Next Steps">
            <p className="text-slate-600 leading-relaxed">{nextSteps}</p>
          </Section>
        </div>

        {/* Sticky Footer */}
        <div className="sticky bottom-0 bg-slate-50 border-t border-slate-100 px-6 md:px-10 py-5 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-5 py-2 text-slate-600 hover:text-slate-900 font-medium transition-colors"
          >
            x
          </button>

          {relatedProjectLabel && (
            <button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
              <span>{relatedProjectLabel}</span>
              <span className="text-sm" aria-label="Arrow">→</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------- */
/* Reusable Section Wrapper                           */
/* -------------------------------------------------- */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
        <span className="w-1 h-6 bg-primary rounded-full"></span>
        {title}
      </h2>
      {children}
    </section>
  );
}
