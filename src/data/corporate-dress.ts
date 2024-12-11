import { Product } from './types';

export const corporateDress: Product[] = [
  {
    id: 'cd1',
    name: 'Blue Professional Co-ords',
    category: 'Corporate Dress',
    price: 1499,
    description: "Step into the office with confidence in our elegant corporate co-ord set. Featuring a subtle blue handmade tie-dye pattern on premium cotton-silk blend fabric, this outfit is designed to balance professionalism and style. Perfect for meetings, presentations, or any formal setting.",
    material: "Cotton-Silk Blend",
    details: {
      Size: ["S", "M", "L", "XL", "XXL"],
      Design: "Handmade Tie-Dye",
      Care: "Dry clean or gentle hand wash in cold water",
      "Delivery Time": "Ready stock delivered in 8-10 days; custom orders take 10-15 days",
      "Delivery Option": "Prepaid"
    },
    images: [`${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/product-images/blue-coords.jpg`]
  },
  {
    id: 'cd2',
    name: 'Purple Professional Co-ords',
    category: 'Corporate Dress',
    price: 1499,
    description: "Step into the office with confidence in our elegant corporate co-ord set. Featuring a subtle purple handmade tie-dye pattern on premium cotton-silk blend fabric, this outfit is designed to balance professionalism and style. Perfect for meetings, presentations, or any formal setting.",
    material: "Cotton-Silk Blend",
    details: {
      Size: ["S", "M", "L", "XL", "XXL"],
      Design: "Handmade Tie-Dye",
      Care: "Dry clean or gentle hand wash in cold water",
      "Delivery Time": "Ready stock delivered in 8-10 days; custom orders take 10-15 days",
      "Delivery Option": "Prepaid"
    },
    images: [`${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/product-images/purple-coords.jpg`]
  }
];