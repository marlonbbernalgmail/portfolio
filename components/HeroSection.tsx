
import Button from './Button';
import Image from 'next/image';
import { MdVerified } from 'react-icons/md';

export default function HeroSection() {
  return (
    <section className="py-16 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-7 flex flex-col gap-10 order-2 lg:order-1">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full w-fit">
            <MdVerified className="text-xs" style={{ color: 'rgb(255, 126, 103)' }} />
            <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: 'rgb(255, 126, 103)' }}>Available for Hire</span>
          </div>
          <h1 className="text-black text-5xl md:text-7xl font-black leading-[1.05] tracking-tight">
            Practical software built from <span style={{ color: 'rgb(255, 126, 103)' }}>real operations</span>
          </h1>
            <p className="text-black/60 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
              I design and build software products rooted in real business operations—balancing robust engineering with clear, user-focused design. The goal is always the same: reliable tools that simplify how work gets done.
            </p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-black text-xs font-black uppercase tracking-widest opacity-40">Core Expertise</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 rounded-full bg-white text-xs font-bold border border-primary/10 shadow-sm" style={{ color: 'rgb(255, 126, 103)' }}>Operational Software Systems</span>
            <span className="px-3 py-1.5 rounded-full bg-white text-xs font-bold border border-primary/10 shadow-sm" style={{ color: 'rgb(255, 126, 103)' }}>Product-Focused Engineering</span>
            <span className="px-3 py-1.5 rounded-full bg-white text-xs font-bold border border-primary/10 shadow-sm" style={{ color: 'rgb(255, 126, 103)' }}>SaaS & POS Architecture</span>
            <span className="px-3 py-1.5 rounded-full bg-white text-xs font-bold border border-primary/10 shadow-sm" style={{ color: 'rgb(255, 126, 103)' }}>Offline-First & Workflow Design</span>
            <span className="px-3 py-1.5 rounded-full bg-white text-xs font-bold border border-primary/10 shadow-sm" style={{ color: 'rgb(255, 126, 103)' }}>Business-Critical Data Modeling</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 items-center">
          <Button variant="primary" size="lg">
            <span>Browse Catalog</span>
          </Button>
        </div>
      </div>
      <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
        <div className="flex flex-col items-center">
          <div className="relative w-full aspect-square max-w-[440px] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-primary/10 rounded-[3rem] rotate-3 scale-105"></div>
            <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-[3rem] -rotate-3 border border-black/5"></div>
            <div className="relative z-10 w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
              <Image alt="The Builder Profile" className="w-full h-full object-cover" src="/profile/profile2.png" width={440} height={440} />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent flex flex-col gap-1">
                <span className="text-white text-xl font-black">Marlon Bernal</span>
                <span className="text-white/70 text-sm font-medium">This person can lead, build, and ship real systems.</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 px-4 mt-6">

          </div>
        </div>
      </div>
    </section>
  );
}
