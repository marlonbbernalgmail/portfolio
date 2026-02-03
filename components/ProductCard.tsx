"use client";
import React, { useState } from 'react';
import Image from "next/image";
import { Product } from '@/data/products';


interface ProductCardProps {
  product: Product;
  onViewProduct?: (product: Product) => void;
}

export default function ProductCard({ product, onViewProduct }: ProductCardProps) {


  return (
    <div
      className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-black/10 flex flex-col items-center text-center gap-6 hover:shadow-md transition-all group cursor-pointer"
      style={{ overflow: 'visible' }}
      onClick={() => {
        if (typeof onViewProduct === 'function') onViewProduct(product);
      }}
      tabIndex={0}
      role="button"
      onKeyDown={e => {
        if ((e.key === 'Enter' || e.key === ' ') && typeof onViewProduct === 'function') {
          onViewProduct(product);
        }
      }}
    >
      <div className="service-illustration mb-2 w-full h-40 rounded-2xl overflow-hidden flex items-center justify-center relative">
        <Image
          src={product.heroImage}
          alt={product.name}
          fill
          style={{ objectFit: "cover" }}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
          priority={product.id === '1'}
        />
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-black text-2xl font-black">{product.name}</h3>
        <p className="text-black/60 text-sm leading-relaxed px-4">{product.tagline}</p>
      </div>
      <div className="w-full mt-auto">
        <button
          className="w-full py-4 text-white font-extrabold rounded-full text-base tracking-tight shadow-lg hover:scale-105 hover:shadow-xl transition-all border-0 outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2 cursor-pointer"
          style={{ background: 'rgb(255, 126, 103)' }}
          onClick={e => {
            e.stopPropagation();
            if (typeof onViewProduct === 'function') onViewProduct(product);
          }}
        >
          View Product
        </button>
	  </div>
    </div>
  );
}


