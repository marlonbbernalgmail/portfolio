"use client";

type BadgeStatus = 'Live' | 'Beta' | 'Coming Soon';

interface ProductDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  status: BadgeStatus;
  tagline: string;
  heroImage: string;
  galleryImages: string[];
  overview: string;
  features: string[];
  useCases: string[];
  primaryActionLabel: string;
  secondaryActionLabel: string;
}

import React, { useState } from 'react';

export default function ProductDetailsModal({
  isOpen,
  onClose,
  name,
  status,
  tagline,
  heroImage,
  galleryImages,
  overview,
  features,
  useCases,
  primaryActionLabel,
  secondaryActionLabel,
}: ProductDetailsModalProps) {
  const [selectedImage, setSelectedImage] = useState<string>(heroImage);
  React.useEffect(() => {
    setSelectedImage(heroImage);
  }, [heroImage]);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={onClose}>
      <div className="relative w-full max-w-5xl bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]" onClick={e => e.stopPropagation()}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 text-zinc-400 hover:text-zinc-900 transition-colors"
        >
          <span className="flex items-center justify-center">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
          </span>
        </button>

        {/* Header */}
        <div className="px-8 pt-10 pb-6 border-b border-zinc-100">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-black tracking-tight">{name}</h1>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-bold uppercase">
              {status}
            </span>
          </div>
          <p className="text-zinc-500 text-lg">{tagline}</p>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="flex flex-col gap-4">
              <div className="relative aspect-square w-full overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-200"
                  style={{ backgroundImage: `url(${selectedImage})` }}
                />
              </div>
              <div className="grid grid-cols-3 gap-3">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`aspect-square rounded-lg bg-cover bg-center border transition-all duration-150 ${selectedImage === img ? 'border-primary ring-2 ring-primary/30' : 'border-zinc-200'}`}
                    style={{ backgroundImage: `url(${img})` }}
                    onClick={() => setSelectedImage(img)}
                    aria-label={`Show image ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
            {/* Right Column */}
            <div className="flex flex-col gap-8">
              <section>
                <h3 className="text-xl font-bold mb-3">Overview</h3>
                <p className="text-zinc-600 leading-relaxed">{overview}</p>
              </section>
              <section>
                <h3 className="text-xl font-bold mb-3">Key Features</h3>
                <ul className="space-y-3">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-primary text-xl flex items-center justify-center">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                      </span>
                      <span className="text-zinc-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
              <section>
                <h3 className="text-xl font-bold mb-3">Use Cases</h3>
                <div className="flex flex-wrap gap-2">
                  {useCases.map((useCase, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-zinc-100 text-zinc-700 rounded text-sm font-medium"
                    >
                      {useCase}
                    </span>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
