"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { categories, categoryImages, CategoryImage } from "../data/shopCategories";

type ShopTemadeDropdownProps = {
  onClose: () => void;
  onSelect: (category: string) => void;
};

const ShopTemadeDropdown = ({ onClose, onSelect }: ShopTemadeDropdownProps) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    setVisible(true);

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    onSelect(category);
  };

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  // Helper: get only one color variant's images per product for the selected category
  const getOneColorImagesForCategory = (category: string) => {
    const items = categoryImages[category] || [];
    // For each product, pick the first color variant and get its first image only
    return items.map((item: CategoryImage) => {
      const firstColorVariant = item.colorVariants[0];
      const firstImage = firstColorVariant.images[0];
      return {
        src: firstImage.src,
        alt: firstImage.alt,
        productName: item.name,
      };
    });
  };

  const images = getOneColorImagesForCategory(selectedCategory);

  return (
    <div className="fixed inset-0 z-20 flex top-16">
      <div className="flex-1 bg-black bg-opacity-50" onClick={handleClose} />
      <div
        className={`relative w-full max-w-[1013px] h-full bg-[#FFFBEB] px-[50px] py-8 overflow-y-auto font-WorkSans right-0
          transform transition-transform duration-300 ease-in-out
          ${visible ? "translate-y-0" : "-translate-y-full"}`}
        style={{ willChange: "transform" }}
      >
        <div className="flex justify-end">
          <button
            onClick={handleClose}
            className="text-black font-bold text-lg underline hover:text-[#8D2741]"
          >
            Close
          </button>
        </div>

        <div className="mt-6 flex flex-col text-[#030C26] text-lg font-normal space-y-4">
          <h2 className="font-semibold text-xl mb-2">Category</h2>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`text-left transition-colors ${
                selectedCategory === cat ? "text-[#8D2741] font-semibold underline" : ""
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div key={index} className="text-center">
              <Image
                src={img.src}
                alt={img.alt}
                width={254}
                height={282}
                className="object-cover"
              />
              <p className="mt-2 text-[#030C26] text-sm text-left font-normal">
                {img.productName} - {img.alt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopTemadeDropdown;
