"use client";

import { useState } from "react";
import {
  ChevronDown,
  CircleUser,
  Heart,
  Menu,
  Search,
  ShoppingCart,
  X,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ShopTemadeDropdown from "./ShopTemadeDropdown"; // adjust the path if needed

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    console.log("Selected category:", category);
    // You can use this state to filter and render product cards based on selectedCategory
  };

  return (
    <>
      {/* Top Nav */}
      <nav className="sticky top-0 z-30 bg-[#FFFBEB] ">
        <div className="max-w-[1280px] m-auto px-8 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/temade-icon.png"
              alt="Temade Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex space-x-[32px] text-sm text-[#030C26]">
            <Link href="/">NEW ARRIVALS</Link>
            <Link href="/shop">COLLECTIONS</Link>
            <button
              onClick={() => setIsCategoryDropdownOpen(true)}
              className={`flex items-center gap-1 transition-colors ${
                isCategoryDropdownOpen
                  ? "underline text-[#8D2741] font-semibold"
                  : ""
              }`}
            >
              SHOP TEMADE
              <ChevronDown className="w-4 h-4" />
            </button>
            <Link href="/contact">LOOKBOOK</Link>
          </div>

          {/* Icons */}
          <div className="hidden sm:flex items-center space-x-5 text-[#030C26]">
            <Link href="/search" className="hover:text-[#8D2741] transition-colors">
              <Search />
            </Link>
            <Link href="/wishlist" className="hover:text-[#8D2741] transition-colors">
              <Heart />
            </Link>
            <Link href="/account" className="hover:text-[#8D2741] transition-colors">
              <CircleUser />
            </Link>
            <Link href="/cart" className="relative hover:text-[#8D2741] transition-colors">
              <ShoppingCart />
              <span className="absolute z-10 top-0 text-[14px] left-5 font-bold px-1">
                [0]
              </span>
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="hidden sm:block lg:hidden text-[#030C26] ml-4"
            >
              <Menu />
            </button>
          </div>

          {/* Hamburger Icon (Mobile Only) */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="sm:hidden text-[#030C26]"
          >
            <Menu />
          </button>
        </div>
      </nav>

      {/* Mobile Side Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#FFFBEB] shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <Image src="/temade-icon.png" alt="Logo" width={36} height={36} />
          <button onClick={() => setIsMobileMenuOpen(false)} className="text-[#030C26]">
            <X />
          </button>
        </div>
        <div className="flex flex-col px-6 py-4 space-y-6 text-[#030C26] text-sm">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>NEW ARRIVALS</Link>
          <Link href="/shop" onClick={() => setIsMobileMenuOpen(false)}>COLLECTIONS</Link>
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsCategoryDropdownOpen(true);
            }}
            className="ml-0 block text-left"
          >
            SHOP TEMADE
          </button>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>LOOKBOOK</Link>
          <div className="flex sm:hidden w-full space-x-4">
            <Link href="/search" onClick={() => setIsMobileMenuOpen(false)}><Search /></Link>
            <Link href="/wishlist" onClick={() => setIsMobileMenuOpen(false)}><Heart /></Link>
            <Link href="/account" onClick={() => setIsMobileMenuOpen(false)}><CircleUser /></Link>
            <Link href="/cart" className="relative" onClick={() => setIsMobileMenuOpen(false)}>
              <ShoppingCart />
              <span className="absolute z-10 top-1 left-6 text-[14px] font-bold rounded-full px-1">
                [0]
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Category Fullscreen Dropdown */}
      {isCategoryDropdownOpen && (
        <ShopTemadeDropdown
          onClose={() => setIsCategoryDropdownOpen(false)}
          onSelect={handleCategorySelect}
        />
      )}
    </>
  );
};

export default NavBar;
