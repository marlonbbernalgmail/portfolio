import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-black/5 py-16 px-10">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col gap-4 items-center md:items-start">
          <div className="flex items-center gap-3 text-black">
            <Image src="/profile/logo.svg" alt="Bernal Software Systems Logo" className="h-20 w-auto" width={80} height={80} />
          </div>
          <p className="text-black/40 text-sm max-w-[200px] text-center md:text-left">Built for operations, designed for people.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
          <a className="text-black/60 text-sm font-bold hover:text-primary" href="https://www.linkedin.com/in/marlon-bantolino-bernal">LinkedIn</a>
        </div>
        <p className="text-black/30 text-xs font-bold tracking-widest uppercase">© 2026 Bernal Software System</p>
      </div>
    </footer>
  );
}
