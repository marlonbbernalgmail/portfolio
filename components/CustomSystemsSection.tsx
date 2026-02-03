import { customSystems } from '@/data/customBuilds';
import { MdSettings, MdEvent } from 'react-icons/md';

export default function CustomSystemsSection() {
  return (
    <section className="py-20">
      <div className="mb-12">
        <h2 className="text-black text-3xl font-black tracking-tight">Custom &amp; Internal Systems</h2>
        <div className="mt-3 mb-2 text-black/70 text-base max-w-2xl">
          “I can analyze your operation and build exactly what you need — no bloat, no overengineering.”
        </div>
       
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {customSystems.map((system) => (
          <div key={system.id} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-black/5 flex flex-col gap-6 group hover:border-primary/30 transition-all">
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-3">
                <h3 className="text-black text-2xl font-black">{system.name}</h3>
                <p className="text-black/60 text-lg leading-relaxed">{system.description}</p>
              </div>
              <span className="text-primary text-5xl">
                {system.icon === 'settings' && <MdSettings />}
                {system.icon === 'event' && <MdEvent />}
                {/* Add more icon mappings as needed */}
              </span>
            </div>
            <div className="flex gap-3 mt-4">
              {system.badges.map((badge, index) => (
                <span 
                  key={index}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest ${
                    badge.variant === 'primary' 
                      ? 'bg-primary/10 text-primary' 
                      : 'bg-black/5 text-black/40'
                  }`}
                >
                  {badge.text}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
