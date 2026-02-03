'use client';

import React from 'react';
import { Project } from '@/data/projects';

interface ProjectDetailsModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectDetailsModal({ project, isOpen, onClose }: ProjectDetailsModalProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Modal Backdrop Overlay */}
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        onClick={onClose}
      />
      
      {/* Centered Modal Container */}
      <div className="fixed inset-0 flex items-center justify-center p-4 md:p-10 z-50 pointer-events-none">
        <div className="relative w-full max-w-[900px] bg-white shadow-2xl rounded-lg flex flex-col max-h-[90vh] overflow-hidden pointer-events-auto">
          {/* Header Section */}
          <header className="flex items-start justify-between border-b border-solid border-[#eee] px-8 py-6 sticky top-0 bg-white z-20">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <h1 className="text-[#000000] text-3xl font-bold leading-tight tracking-tight">
                  {project.title}
                </h1>
              </div>
              {/* Status Badge */}
              <div className="flex gap-3 mt-1">
                <div className="flex h-7 shrink-0 items-center justify-center gap-x-1.5 rounded-full bg-primary/10 px-3 border border-primary/20">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <p className="text-primary text-xs font-bold uppercase tracking-wider">
                    {project.details.status}
                  </p>
                </div>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="flex size-10 cursor-pointer items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6 text-[#000000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </header>

          {/* Modal Body (Scrollable Content) */}
          <div className="flex-1 overflow-y-auto px-8 py-6 space-y-10 custom-scrollbar">
            {/* Overview Section */}
            <section>
              <h2 className="text-[#000000] text-[20px] font-bold leading-tight tracking-tight mb-3">
                Overview
              </h2>
              <p className="text-[#333333] text-[17px] font-normal leading-relaxed">
                {project.details.overview}
              </p>
            </section>

            {/* Problem Addressed Section */}
            <section>
              <h2 className="text-[#000000] text-[20px] font-bold leading-tight tracking-tight mb-3">
                Problem Addressed
              </h2>
              <p className="text-[#333333] text-[17px] font-normal leading-relaxed">
                {project.details.problem}
              </p>
            </section>

            {/* Solution & Approach Section */}
            <section>
              <h2 className="text-[#000000] text-[20px] font-bold leading-tight tracking-tight mb-3">
                Solution &amp; Approach
              </h2>
              <p className="text-[#333333] text-[17px] font-normal leading-relaxed">
                {project.details.solution}
              </p>
            </section>

            {/* Key Capabilities Section */}
            <section>
              <h2 className="text-[#000000] text-[20px] font-bold leading-tight tracking-tight mb-3">
                Key Capabilities
              </h2>
              <ul className="space-y-4">
                {project.details.keyCapabilities.map((capability, index) => (
                  <li 
                    key={index}
                    className="flex items-start gap-3 text-[#333333] text-[17px] leading-relaxed"
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"></span>
                    {capability}
                  </li>
                ))}
              </ul>
            </section>

            {/* Tech Stack Section */}
            <section>
              <h2 className="text-[#000000] text-[20px] font-bold leading-tight tracking-tight mb-3">
                Tech Stack Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-gray-100 border border-gray-200 rounded-md text-sm font-medium text-[#333]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Availability Section */}
            <section className="pb-6">
              <h2 className="text-[#000000] text-[20px] font-bold leading-tight tracking-tight mb-3">
                Availability
              </h2>
              <p className="text-[#333333] text-[17px] font-normal leading-relaxed">
                {project.details.availability}
              </p>
            </section>
          </div>

          {/* Footer Section */}
          <footer className="border-t border-solid border-[#eee] px-8 py-5 bg-gray-50 flex items-center justify-end gap-4 sticky bottom-0 z-20">
            <button 
              onClick={onClose}
              className="px-6 h-11 flex items-center justify-center rounded-lg border border-gray-300 text-sm font-bold text-[#333] hover:bg-gray-100 transition-colors"
            >
              Close
            </button>
            <button className="px-6 h-11 flex items-center justify-center rounded-lg bg-primary text-white text-sm font-bold hover:bg-opacity-90 shadow-md shadow-primary/20 transition-all">
              Contact for Demo
            </button>
          </footer>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e5e7eb;
          border-radius: 4px;
        }
      `}</style>
    </>
  );
}
