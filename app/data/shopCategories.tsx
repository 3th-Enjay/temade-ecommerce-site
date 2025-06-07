
export type ColorImage = {
  src: string;
  alt: string;
};

export type ColorVariant = {
  colorName: string;
  images: ColorImage[];
};

export type CategoryImage = {
  id: string;
  name: string;
  colorVariants: ColorVariant[];
  price: number;
  description: string;
  sizes: string[];
};

const defaultSizes = ["S", "M", "L", "XL"];

export const baseCategoryImages: Record<string, CategoryImage[]> = {
  Dresses: [
    {
      id: "floral-dress-d",
      name: "Floral Dress",
      price: 59.99,
      description: "A vibrant floral dress perfect for spring and summer outings. Light and breezy with a flattering fit.",
      sizes: defaultSizes,
      colorVariants: [
        {
          colorName: "Red",
          images: [
            { src: "/Rectangle-3.jpg", alt: "Floral Dress Red Front" },
            { src: "/Rectangle-3.jpg", alt: "Floral Dress Red Back" },
          ],
        },
        {
          colorName: "Blue",
          images: [
            { src: "/Rectangle-2.jpg", alt: "Floral Dress Blue Front" },
            { src: "/Rectangle-2.jpg", alt: "Floral Dress Blue Back" },
          ],
        },
      ],
    },
    {
      id: "casual-maxi-d",
      name: "Casual Maxi",
      price: 49.99,
      description: "Comfortable and stylish casual maxi dress, perfect for everyday wear or a relaxed evening out.",
      sizes: defaultSizes,
      colorVariants: [
        {
          colorName: "Black",
          images: [
            { src: "/Rectangle.jpg", alt: "Casual Maxi Black Front" },
            { src: "/Rectangle-2.jpg", alt: "Casual Maxi Black Side" },
          ],
        },
        {
          colorName: "White",
          images: [
            { src: "/Rectangle.jpg", alt: "Casual Maxi White Front" },
            { src: "/Rectangle-2.jpg", alt: "Casual Maxi White Back" },
          ],
        },
      ],
    },
  ],
  Skirts: [
    {
      id: "floral-dress-s",
      name: "Floral Dress",
      price: 39.99,
      description: "A charming floral skirt that pairs well with any top, designed for a feminine and fresh look.",
      sizes: defaultSizes,
      colorVariants: [
        {
          colorName: "Pink",
          images: [
            { src: "/Rectangle-3.jpg", alt: "Floral Skirt Pink Front" },
            { src: "/Rectangle-2.jpg", alt: "Floral Skirt Pink Back" },
          ],
        },
        {
          colorName: "Green",
          images: [
            { src: "/Rectangle.jpg", alt: "Floral Skirt Green Front" },
            { src: "/Rectangle-2.jpg", alt: "Floral Skirt Green Side" },
          ],
        },
      ],
    },
    {
      id: "casual-maxi-s",
      name: "Casual Maxi",
      price: 44.99,
      description: "A versatile casual maxi skirt, perfect for both casual days and dressier occasions.",
      sizes: defaultSizes,
      colorVariants: [
        {
          colorName: "Navy",
          images: [
            { src: "/Rectangle.jpg", alt: "Casual Maxi Navy Front" },
            { src: "/Rectangle-2.jpg", alt: "Casual Maxi Navy Side" },
          ],
        },
        {
          colorName: "Gray",
          images: [
            { src: "/Rectangle-2.jpg", alt: "Casual Maxi Gray Front" },
            { src: "/Rectangle-2.jpg", alt: "Casual Maxi Gray Back" },
          ],
        },
      ],
    },
  ],
  Tops: [
    {
      id: "floral-dress-t",
      name: "Floral Dress",
      price: 29.99,
      description: "Lightweight floral top that adds a splash of color and style to your casual wardrobe.",
      sizes: defaultSizes,
      colorVariants: [
        {
          colorName: "Yellow",
          images: [
            { src: "/Rectangle-3.jpg", alt: "Floral Top Yellow Front" },
            { src: "/Rectangle-2.jpg", alt: "Floral Top Yellow Back" },
          ],
        },
        {
          colorName: "Orange",
          images: [
            { src: "/Rectangle.jpg", alt: "Floral Top Orange Front" },
            { src: "/Rectangle-2.jpg", alt: "Floral Top Orange Side" },
          ],
        },
      ],
    },
    {
      id: "casual-maxi-t",
      name: "Casual Maxi",
      price: 34.99,
      description: "Simple and chic casual top that pairs well with jeans or skirts for an effortless look.",
      sizes: defaultSizes,
      colorVariants: [
        {
          colorName: "White",
          images: [
            { src: "/Rectangle.jpg", alt: "Casual Top White Front" },
            { src: "/Rectangle-2", alt: "Casual Top White Back" },
          ],
        },
        {
          colorName: "Black",
          images: [
            { src: "/Rectangle.jpg", alt: "Casual Top Black Front" },
            { src: "/Rectangle-2.jpg", alt: "Casual Top Black Side" },
          ],
        },
      ],
    },
  ],
  Pants: [
    {
      id: "floral-dress-p",
      name: "Floral Dress",
      price: 45.99,
      description: "Comfortable floral pants designed for casual wear with a touch of elegance.",
      sizes: defaultSizes,
      colorVariants: [
        {
          colorName: "Beige",
          images: [
            { src: "/Rectangle-2.jpg", alt: "Floral Pants Beige Front" },
            { src: "/Rectangle-2.jpg", alt: "Floral Pants Beige Back" },
          ],
        },
        {
          colorName: "Brown",
          images: [
            { src: "/Rectangle.jpg", alt: "Floral Pants Brown Front" },
            { src: "/Rectangle-2.jpg", alt: "Floral Pants Brown Side" },
          ],
        },
      ],
    },
    {
      id: "casual-maxi-p",
      name: "Casual Maxi",
      price: 39.99,
      description: "Classic casual pants suitable for everyday wear with a modern fit.",
      sizes: defaultSizes,
      colorVariants: [
        {
          colorName: "Gray",
          images: [
            { src: "/Rectangle.jpg", alt: "Casual Pants Gray Front" },
            { src: "/Rectangle-2.jpg", alt: "Casual Pants Gray Side" },
          ],
        },
        {
          colorName: "Black",
          images: [
            { src: "/Rectangle.jpg", alt: "Casual Pants Black Front" },
            { src: "/Rectangle-2.jpg", alt: "Casual Pants Black Back" },
          ],
        },
      ],
    },
  ],
  "The Wholeness Collection": [
    {
      id: "floral-dress-w",
      name: "Floral Dress",
      price: 59.99,
      description: "Exclusive floral dress from The Wholeness Collection featuring premium fabric and unique design.",
      sizes: defaultSizes,
      colorVariants: [
        {
          colorName: "Purple",
          images: [
            { src: "/Rectangle.jpg", alt: "Floral Dress Purple Front" },
            { src: "/Rectangle-2.jpg", alt: "Floral Dress Purple Back" },
          ],
        },
        {
          colorName: "Teal",
          images: [
            { src: "/Rectangle.jpg", alt: "Floral Dress Teal Front" },
            { src: "/Rectangle-2.jpg", alt: "Floral Dress Teal Back" },
          ],
        },
      ],
    },
    {
      id: "casual-maxi-w",
      name: "Casual Maxi",
      price: 49.99,
      description: "Stylish and comfortable casual maxi dress designed exclusively for The Wholeness Collection.",
      sizes: defaultSizes,
      colorVariants: [
        {
          colorName: "Maroon",
          images: [
            { src: "/Rectangle.jpg", alt: "Casual Maxi Maroon Front" },
            { src: "/Rectangle-2.jpg", alt: "Casual Maxi Maroon Side" },
          ],
        },
        {
          colorName: "Navy",
          images: [
            { src: "/Rectangle.jpg", alt: "Casual Maxi Navy Front" },
            { src: "/Rectangle-2.jpg", alt: "Casual Maxi Navy Back" },
          ],
        },
      ],
    },
  ],
};

// Flatten for "All" category
export const categoryImages: Record<string, CategoryImage[]> = {
  All: Object.values(baseCategoryImages).flat(),
  ...baseCategoryImages,
};

// List of categories for navigation/buttons
export const categories: string[] = Object.keys(categoryImages);
