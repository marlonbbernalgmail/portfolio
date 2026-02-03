
"use client";
import ProductCard from './ProductCard';
import { products, Product } from '@/data/products';
import { useState } from 'react';
import ProductDetailsModal from './ProductDetailsModal';

export default function ProductGrid() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section>
      <div className="flex flex-col items-center text-center mb-16 gap-4">
        <h2 className="text-black text-4xl md:text-5xl font-black tracking-tight">Featured Software Products</h2>
        <div className="h-1.5 w-24 bg-primary rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onViewProduct={handleViewProduct} />
        ))}
      </div>
      {selectedProduct && (
        <ProductDetailsModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          name={selectedProduct.name}
          status={selectedProduct.status}
          tagline={selectedProduct.tagline}
          heroImage={selectedProduct.heroImage}
          galleryImages={selectedProduct.galleryImages}
          overview={selectedProduct.overview}
          features={selectedProduct.features}
          useCases={selectedProduct.useCases}
          primaryActionLabel={selectedProduct.primaryActionLabel}
          secondaryActionLabel={selectedProduct.secondaryActionLabel}
        />
      )}
    </section>
  );
}
