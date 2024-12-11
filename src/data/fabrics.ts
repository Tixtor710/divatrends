import { Product } from './types';

export const fabrics: Product[] = [
  {
    id: 'f1',
    name: 'Grey Tie-Dye Fabric',
    category: 'Fabric',
    price: 599,
    description: "Transform your wardrobe with our premium Grey Tie-Dye fabric. Perfect for creating unique garments, this versatile material features intricate handmade patterns that make each piece truly one-of-a-kind.",
    material: "Cotton-Silk Blend",
    details: {
      Width: "44 inches",
      MOQ: "1 meter",
      Care: "Dry clean recommended",
      "Delivery Time": "Ready stock: Delivered in 8-10 days\nCustom orders: Delivered in 10-15 days",
      "Delivery Option": "Prepaid"
    },
    images: [`${process.env.VITE_SUPABASE_URL}/storage/v1/object/public/product-images/grey-fabric.jpg`]
  },
  {
    id: 'f2',
    name: 'Navy Blue Tie-Dye Fabric',
    category: 'Fabric',
    price: 599,
    description: "Transform your wardrobe with our premium Navy Blue Tie-Dye fabric. Perfect for creating unique garments, this versatile material features intricate handmade patterns that make each piece truly one-of-a-kind.",
    material: "Cotton-Silk Blend",
    details: {
      Width: "44 inches",
      MOQ: "1 meter",
      Care: "Dry clean recommended",
      "Delivery Time": "Ready stock: Delivered in 8-10 days\nCustom orders: Delivered in 10-15 days",
      "Delivery Option": "Prepaid"
    },
    images: [`${process.env.VITE_SUPABASE_URL}/storage/v1/object/public/product-images/navy-fabric.jpg`]
  },
  {
    id: 'f3',
    name: 'Maroon Tie-Dye Fabric',
    category: 'Fabric',
    price: 599,
    description: "Transform your wardrobe with our premium Maroon Tie-Dye fabric. Perfect for creating unique garments, this versatile material features intricate handmade patterns that make each piece truly one-of-a-kind.",
    material: "Cotton-Silk Blend",
    details: {
      Width: "44 inches",
      MOQ: "1 meter",
      Care: "Dry clean recommended",
      "Delivery Time": "Ready stock: Delivered in 8-10 days\nCustom orders: Delivered in 10-15 days",
      "Delivery Option": "Prepaid"
    },
    images: [`${process.env.VITE_SUPABASE_URL}/storage/v1/object/public/product-images/maroon-fabric.jpg`]
  },
  {
    id: 'f4',
    name: 'Rose Tie-Dye Fabric',
    category: 'Fabric',
    price: 599,
    description: "Transform your wardrobe with our premium Rose Tie-Dye fabric. Perfect for creating unique garments, this versatile material features intricate handmade patterns that make each piece truly one-of-a-kind.",
    material: "Cotton-Silk Blend",
    details: {
      Width: "44 inches",
      MOQ: "1 meter",
      Care: "Dry clean recommended",
      "Delivery Time": "Ready stock: Delivered in 8-10 days\nCustom orders: Delivered in 10-15 days",
      "Delivery Option": "Prepaid"
    },
    images: [`${process.env.VITE_SUPABASE_URL}/storage/v1/object/public/product-images/rose-fabric.jpg`]
  }
];