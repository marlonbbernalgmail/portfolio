'use client';

import React, { useState } from 'react';
import { MdArrowRightAlt } from 'react-icons/md';
import { projectsData, projectCategories, Project } from '@/data/projects';
import ProjectDetailsModal from '@/components/ProjectDetailsModal';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="abstract-bg min-h-screen">
      <main className="max-w-[800px] mx-auto px-6 py-20 relative">
        <section className="mb-16">
          <h1 className="text-6xl font-black text-slate-900 mb-6 tracking-tight">Products & Projects</h1>
          <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
            A list of client-built systems and SaaS products, showcasing a wide range of experience that informs more robust and well-planned architectures.
          </p>
        </section>

        <nav className="flex border-b border-orange-100 mb-16 gap-10">
          {projectCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`pb-4 text-sm font-bold transition-colors ${
                activeCategory === category.id
                  ? 'border-b-2' : ''
              }`}
              style={activeCategory === category.id ? { borderColor: '#ff7e67', color: '#ff7e67' } : {}}
            >
              {category.label}
            </button>
          ))}
        </nav>

        <div className="space-y-20">
          {projectsData
            .filter((project) => {
              if (activeCategory === 'all') return true;
              const selectedCategory = projectCategories.find(cat => cat.id === activeCategory);
              return selectedCategory && project.category === selectedCategory.label;
            })
            .map((project, index, filteredArray) => {
            const isLast = index === filteredArray.length - 1;
            
            return (
              <article key={project.id} className="group relative">
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-5">
                  <h3 className="text-3xl font-black text-slate-900 group-hover:text-primary transition-colors tracking-tight">
                    {project.title}
                  </h3>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider" style={{ backgroundColor: '#ff7e67', color: '#fff', border: '1px solid #ff7e67' }}>
                    {project.category}
                  </span>
                </div>
                <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-3xl">
                  {project.description}
                </p>
                <div className="flex flex-wrap items-center justify-between gap-6">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-white/60 border border-slate-200 px-3 py-1.5 rounded-md"
                      style={{ backgroundColor: '#fff1ed' }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-sm font-bold flex items-center gap-2 group/link no-underline"
                    style={{ color: '#ff7e67' }}
                  >
                    VIEW DETAILS
                    <MdArrowRightAlt className="text-lg group-hover/link:translate-x-1 transition-transform" style={{ color: '#ff7e67' }} />
                  </button>
                </div>
                {!isLast && <hr className="mt-20 border-orange-100/50" />}
              </article>
            );
          })}
        </div>

      </main>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectDetailsModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
