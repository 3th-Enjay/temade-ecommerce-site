'use client';

import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { categoryImages } from '../data/shopCategories'; // adjust path if needed
import type { CategoryImage } from '../data/shopCategories';

function Shop() {
  return (
    <div className="max-w-[1280px] m-auto px-8 py-4">
      {/* Breadcrumb */}
      <div className="font-WorkSans flex space-x-1">
        <h2 className="text-[16px] font-normal text-[#CA6F86]">Home</h2>
        <h2>/</h2>
        <h2 className="text-[16px] font-normal text-[#838383]">Categories</h2>
      </div>

      {/* Header with dropdown */}
      <div className="flex items-center justify-between mt-4 mb-6">
        <h1 className="text-[#000000] font-medium text-[25px]">Categories</h1>
        <div className="flex items-center">
          <h2 className="text-[20px] font-normal font-WorkSans">List</h2>
          <ChevronDown className="h-4 w-4" />
        </div>
      </div>

      {/* Render each category except "All" */}
      <div className="space-y-10">
        {Object.entries(categoryImages)
          .filter(([category]) => category !== 'All')
          .map(([category, items]) => (
            <div key={category}>
              <h2 className="text-[#000000] font-normal text-[24px] mb-4">{category}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {items.map((item: CategoryImage) => {
                  // Use the first image of the first color variant as the display image
                  const firstImage = item.colorVariants[0]?.images[0];

                  if (!firstImage) return null; // skip if no images

                  return (
                    <Link key={item.id} href={`/shop/${item.id}`}>
                      <div className="cursor-pointer">
                        <Image
                          src={firstImage.src}
                          alt={firstImage.alt}
                          width={250}
                          height={280}
                          className="rounded-lg object-cover w-full h-[280px]"
                        />
                        <p className="mt-2 text-sm text-[#030C26]">{item.name}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Shop;
