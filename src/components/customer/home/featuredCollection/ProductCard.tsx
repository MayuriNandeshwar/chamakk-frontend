'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import { useState } from 'react';
import { BestsellerProduct } from '@/lib/api/home/products.service';

export default function ProductCard({ product }: { product: BestsellerProduct }) {
  const images = product.images ?? [product.imageUrl];
  const primaryImage = images[0];
  const hoverImage = images[1] ?? images[0];

  const [liked, setLiked] = useState(false);

  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div
        className="
          bg-white rounded-2xl overflow-hidden
          shadow-sm hover:shadow-lg transition
          flex flex-col h-full
        "
      >
        {/* IMAGE */}
        <div className="relative h-[350px] overflow-hidden">
          {/* Primary image – gentle zoom */}
          <Image
            src={primaryImage}
            alt={product.productName}
            fill
            className="
              object-cover
              transition-transform duration-[1100ms] ease-out
              group-hover:scale-[1.03]
            "
          />

          {/* Hover image – soft fade */}
          <Image
            src={hoverImage}
            alt={product.productName}
            fill
            className="
              object-cover absolute inset-0
              opacity-0
              transition-opacity duration-[800ms] ease-out
              group-hover:opacity-100
            "
          />

          {/* SAVE RIBBON */}
          {product.discountPercentage > 0 && (
            <div
              className="
                absolute top-4 left-[-46px] rotate-[-45deg]
                bg-[#eb8b17] text-white
                text-[13px] font-semibold tracking-wide
                px-14 py-1 shadow-sm
              "
            >
              SAVE {product.discountPercentage.toFixed(0)}%
            </div>
          )}

          {/* WISHLIST */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setLiked(prev => !prev);
            }}
            className="
              absolute top-4 right-4
              w-11 h-11 rounded-full
              bg-white/85 backdrop-blur
              border border-white/70
              flex items-center justify-center
              transition-all duration-300
              hover:scale-105
            "
            aria-label="Add to wishlist"
          >
              <Heart
                className={`
                  w-5 h-5 transition-all duration-300
                  ${liked
                    ? 'fill-red-600 text-red-600 scale-110'
                    : 'fill-none text-gray-700'}
                `}
                strokeWidth={1.8}
              />
          </button>
        </div>

        {/* INFO (FIXED HEIGHT) */}
        <div
          className="
            p-5 text-center
            flex flex-col gap-2 min-h-[110px]">
          {/* TITLE – FIXED HEIGHT */}
          <h3
            className="
              font-medium text-gray-900 text-[15px]
              leading-tight line-clamp-2 min-h-[2 rem]
              group-hover:text-emerald-700 transition">
            {product.productName}
          </h3>

          {/* PRICE */}
          <div className="mt-1 flex items-center justify-center gap-3">
            <span className="font-semibold text-lg">
              ₹{product.price}
            </span>
            <span className="text-sm line-through text-gray-400">
              ₹{product.mrp}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
