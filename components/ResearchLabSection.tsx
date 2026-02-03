'use client';

import { useState } from 'react';
import { experiments } from '@/data/experiments';
import ExperimentModal from './ExperimentModal';
import type { Experiment } from '@/data/experiments';

export default function ResearchLabSection() {
  const [selectedExperiment, setSelectedExperiment] = useState<Experiment | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (experiment: Experiment) => {
    setSelectedExperiment(experiment);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedExperiment(null);
  };

  return (
    <section className="py-20 mb-20">
      <div className="mb-12 flex items-center justify-between">
        <h2 className="text-black text-3xl font-black tracking-tight opacity-40">Experiments & Prototypes</h2>
        <div className="h-px flex-1 bg-black/10 mx-8 opacity-40"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {experiments.map((experiment) => (
          <div key={experiment.id} className="bg-white/40 backdrop-blur-sm border border-dashed border-black/10 p-8 rounded-[2rem] flex flex-col gap-6 hover:bg-white transition-all group">
            <h4 className="text-black text-xl font-black">{experiment.name}</h4>
            <p className="text-black/50 text-base leading-relaxed">{experiment.description}</p>
              <button
                type="button"
                onClick={() => handleOpenModal(experiment)}
                className="mt-auto flex items-center gap-2 group-hover:gap-3 transition-all px-4 py-1.5 rounded-full bg-gray-100 text-sm font-black text-[rgb(255,126,103)] shadow border border-gray-200/50 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200/60 cursor-pointer"
                style={{ fontSize: '0.95rem', boxShadow: '0 1px 4px 0 rgba(0,0,0,0.03)' }}
              >
                READ RESEARCH
                <svg className="w-4 h-4 text-inherit" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7"/></svg>
              </button>
          </div>
        ))}
      </div>

      {selectedExperiment && (
        <ExperimentModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          typeLabel={selectedExperiment.typeLabel}
          dateLabel={selectedExperiment.dateLabel}
          title={selectedExperiment.title}
          context={selectedExperiment.context}
          problem={selectedExperiment.problem}
          approach={selectedExperiment.approach}
          codeTitle={selectedExperiment.codeTitle}
          codeSnippet={selectedExperiment.codeSnippet}
          learnings={selectedExperiment.learnings}
          limitations={selectedExperiment.limitations}
          nextSteps={selectedExperiment.nextSteps}
          relatedProjectLabel={selectedExperiment.relatedProjectLabel}
        />
      )}
    </section>
  );
}
