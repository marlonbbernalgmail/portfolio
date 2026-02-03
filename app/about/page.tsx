import React from 'react';
import { journeyData } from '@/data/journey';
import { experienceData } from '@/data/experience';
import { principlesData } from '@/data/principles';

export default function AboutPage() {
  return (
    <div className="abstract-bg min-h-screen flex flex-col">
      <main className="flex flex-1 justify-center py-12">
        <div className="layout-content-container flex flex-col max-w-[900px] w-full px-6">
          <section className="pb-20 pt-8 text-center">
            <h1 className="text-black tracking-tight text-[48px] md:text-[60px] font-bold leading-[1.1] pb-6">
              Building software from real operations
            </h1>
            <p className="text-black text-lg md:text-xl font-normal leading-relaxed max-w-[700px] mx-auto opacity-80">
              A philosophy focused on sustainable growth, operational problem-solving, and building tools that work for the people on the ground.
            </p>
          </section>

          <section className="py-12" id="journey">
            <h2 className="text-black text-3xl font-bold mb-12 text-center">The Journey</h2>
            <div className="grid grid-cols-[60px_1fr] gap-x-8 max-w-2xl mx-auto">
              {journeyData.map((item, index) => {
                const Icon = item.icon;
                const isLast = index === journeyData.length - 1;
                
                return (
                  <React.Fragment key={item.id}>
                    <div className="flex flex-col items-center">
                      <div className="bg-black text-white p-3 rounded-full flex items-center justify-center">
                        <Icon className="text-[20px]" />
                      </div>
                      {!isLast && <div className="w-0.5 bg-black/10 grow my-3"></div>}
                    </div>
                    <div className={`flex flex-1 flex-col ${!isLast ? 'pb-16' : ''}`}>
                      <p className="text-black text-xl font-bold">{item.title}</p>
                      <p className="text-[color:#ff7e67] text-sm font-bold mb-3 uppercase tracking-widest">{item.period}</p>
                      <p className="text-black leading-relaxed opacity-80">
                        {item.description}
                      </p>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </section>

          <section className="py-24" id="experience">
            <div className="flex flex-col items-center mb-12">
              <h2 className="text-black text-3xl font-bold">Experience Highlights</h2>
              <div className="h-1.5 w-12 bg-primary-coral mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {experienceData.map((item) => {
                const Icon = item.icon;
                
                return (
                  <div 
                    key={item.id}
                    className={`bg-white p-8 rounded-[2rem] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-white transition-transform hover:-translate-y-1 ${item.spanFull ? 'md:col-span-2' : ''}`}
                  >
                    {item.spanFull ? (
                      <div className="flex flex-col md:flex-row md:items-center gap-8">
                        <div className={`size-14 shrink-0 bg-${item.iconBgColor} rounded-2xl flex items-center justify-center text-primary-coral`}>
                          <Icon className="text-[32px]" />
                        </div>
                        <div>
                          <h3 className="text-black font-bold text-xl mb-3">{item.title}</h3>
                          <p className="text-black text-base leading-relaxed opacity-70">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className={`size-14 bg-${item.iconBgColor} rounded-2xl flex items-center justify-center text-primary-coral mb-6`}>
                          <Icon className="text-[32px]" />
                        </div>
                        <h3 className="text-black font-bold text-xl mb-3">{item.title}</h3>
                        <p className="text-black text-base leading-relaxed opacity-70">
                          {item.description}
                        </p>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          <section className="py-20" id="principles">
            <h2 className="text-black text-3xl font-bold mb-12">How I Work</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {principlesData.map((principle) => {
                const Icon = principle.icon;
                
                return (
                  <div key={principle.id} className="flex items-start gap-5">
                    <div className="mt-1 text-primary-coral">
                      <Icon className="text-[28px]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-black text-lg mb-1">{principle.title}</h4>
                      <p className="text-black opacity-70 text-sm leading-relaxed">{principle.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
