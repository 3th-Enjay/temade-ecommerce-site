'use client';

import React, { useState } from 'react';
import { use } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { categoryImages, CategoryImage, ColorVariant, ColorImage } from '@/app/data/shopCategories';
import { Star } from 'lucide-react';
import Link from 'next/link';

type ParamsType = {
    productId: string;
};

type Props = {
    params: Promise<ParamsType>;
};

export default function ProductDetailPage({ params }: Props) {
    const { productId } = use(params);

    const allProducts: CategoryImage[] = Object.entries(categoryImages)
        .filter(([category]) => category !== 'All')
        .flatMap(([_, items]) => items);

    const product = allProducts.find((item) => item.id === productId);
    if (!product) notFound();

    const category = Object.entries(categoryImages)
        .filter(([cat]) => cat !== 'All')
        .find(([_, items]) => items.some((item) => item.id === productId))?.[0];

    const [mainImage, setMainImage] = useState<ColorImage>(
        product?.colorVariants?.[0]?.images?.[0] ?? { src: '', alt: '' }
    );

    const [selectedSize, setSelectedSize] = useState<string>('');

    return (
        <div className="p-8 max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <ul className="flex flex-wrap items-center space-x-1 text-sm sm:text-base mb-6 font-WorkSans">
                <li className="text-pink-600">Home</li>
                <li>/</li>
                <li className="text-pink-600">Categories</li>
                <li>/</li>
                {category && <li className="text-pink-600">{category}</li>}
                <li>/</li>
                <li className="text-gray-500">{product?.name}</li>
            </ul>

            {/* Main content */}
            <div className="flex flex-col smb:flex-row lg:items-center  gap-8">
                {/* Images */}
                <div className="flex flex-col lg:flex-row  gap-4 w-full lg:w-[50%]">
                    {/* Thumbnails */}
                    <div className="flex gap-3 lg:flex-col max-smb:overflow-x-auto max-smb:overflow-visible">
                        {product.colorVariants.map((variant, variantIdx) =>
                            variant.images.map((img, imgIdx) => {
                                const isSelected = img.src === mainImage.src;
                                return (
                                    <button
                                        key={`${variantIdx}-${imgIdx}`}
                                        onClick={() => setMainImage(img)}
                                        className={`flex-shrink-0 w-[88px] h-[110px] sm:w-[132px] sm:h-[158px] rounded-md overflow-hidden border-2 duration-200 bg-cover bg-center ${isSelected ? 'border-pink-600' : 'border-gray-200'
                                            }`}
                                        style={{ backgroundImage: `url(${img.src})` }}
                                        aria-label="Select image variant"
                                    />
                                );
                            })
                        )}
                    </div>

                    {/* Main Image */}
                    <div className="w-full max-w-[700px] aspect-[3/4] rounded-lg overflow-hidden relative ">
                        <Image
                            src={mainImage.src}
                            alt={mainImage.alt}
                            fill
                            className="object-cover rounded-lg"
                            sizes="(min-width: 1024px) 50vw, 100vw"
                        />
                    </div>
                </div>

                {/* Product Info */}
                <div className="w-full max-w-[604px] lg:w-[50%] space-y-5">
                    <h1 className="text-2xl sm:text-3xl font-bold text-[#030C26]">{product.name}</h1>

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                        <div className="flex text-yellow-400">
                            {[...Array(4)].map((_, i) => (
                                <Star key={i} className="fill-yellow-400 w-4 h-4" />
                            ))}
                        </div>
                        <span className="text-sm text-gray-500">15 reviews</span>
                    </div>

                    {/* Price */}
                    <p className="text-3xl font-semibold text-[#252525]">₦{product.price.toFixed(2)}</p>

                    {/* Description */}
                    <p className="text-base text-[#626262] leading-relaxed">{product.description}</p>

                    {/* Color Selector */}
                    <div className="flex gap-2">
                        <h2 className="text-lg font-semibold text-[#030C26]">Color</h2>
                        <div className="flex gap-1 flex-wrap items-center">
                            {product.colorVariants.map((variant, variantIdx) => {
                                const isActive = mainImage.src === variant.images[0].src;
                                return (
                                    <button
                                        key={variantIdx}
                                        onClick={() => setMainImage(variant.images[0])}
                                        title={variant.colorName}
                                        className={`w-6 h-6 rounded-full border-2 duration-200 ${isActive ? 'border-pink-600' : 'border-gray-300'
                                            }`}
                                        style={{ backgroundColor: variant.colorName }}
                                        aria-label={`Select color: ${variant.colorName}`}
                                    />
                                );
                            })}
                        </div>
                    </div>


                    {/* Size Selector (Button Style) */}
                    <div className="flex gap-2">
                        <h2 className="text-lg font-semibold text-[#030C26]">Size</h2>
                        <div className="flex gap-2 flex-wrap">
                            {product.sizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() =>
                                        setSelectedSize((prev) => (prev === size ? '' : size))
                                    }
                                    className={`px-3 py-1 hover:border-[2px] hover:border-[#8D2741] rounded-[6px] text-sm border ${selectedSize === size
                                        ? 'bg-[#8D2741] text-white border-[#8D2741]'
                                        : 'text-[#2C2C2C] border-gray-300'
                                        } transition-colors duration-200`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>
                    
                        {/* Add to Cart Button + increaseand decrease button  */}
                        <div className="flex items-center max-xsmb:flex-col gap-4">
                            <div className="flex items-center justify-between gap-[24px] border border-[#ADADAD] rounded-[5px] px-6 py-3 max-xsmb:w-full">
                                <button className="">
                                    -
                                </button>
                                <span className="">1</span>
                                <button className="">
                                    +
                                </button>
                            </div>
                            <button className="px-6 py-3 bg-[#222222] text-[16px] text-white font-semibold rounded-[5px] max-xsmb:w-full">
                                ADD TO CART
                            </button>
                        </div>
                    {/* material*/}
                    <div className="text-sm flex text-[#626262] gap-2">
                        <p className="font-semibold text-[#030C26]">Material:</p>
                        <p>100% Cotton</p>
                    </div>
                    {/* category*/}
                    <div className="text-sm flex text-[#626262] gap-2">
                        <p className="font-semibold text-[#030C26]">Category:</p>
                        <p className="capitalize">{category}</p>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-2[32px] font-medium text-[#000000] mt-10 mb-4 text-center">Shop More From This Collection</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {allProducts.slice(0, 6).map((item: any) => (
                        <Link href={`/shop/${item.id}`} key={item.id} className="group">
                            <div key={item.id}>
                                <Image
                                    src={item.colorVariants[0].images[0].src}
                                    alt={item.name}
                                    width={300}
                                    height={400}
                                    className="w-full h-auto object-cover  mb-4"
                                />

                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
