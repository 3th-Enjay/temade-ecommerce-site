'use client';

import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { categoryImages } from '../data/shopCategories'; // Adjust the path as needed

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
                {items.map((item, index) => (
                  <div key={index}>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={250}
                      height={280}
                      className="rounded-lg object-cover w-full h-[280px]"
                    />
                    <p className="mt-2 text-sm text-[#030C26]">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Shop;
