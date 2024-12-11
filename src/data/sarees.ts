import { Product } from './types';

export const sarees: Product[] = [
  {
    id: 's1',
    name: 'Violet Tie-dye Saree',
    category: 'Saree',
    price: 2799,
    description: "Elevate your elegance with our Violet Mudal Silk Saree. Designed with a luxurious feel and lightweight comfort, this saree is perfect for any occasion, from casual gatherings to formal events.",
    material: "Mudal Silk",
    details: {
      Color: "Shades of Violet",
      Size: ["S", "M", "L", "XL", "XXL"],
      "Saree Length": "5.5 meters (includes blouse material)",
      Care: "Gentle hand wash in cold water or dry clean",
      "Delivery Time": "Ready stock: Delivered in 8-10 days\nCustom handicrafts: 10-15 days as each piece is made to order",
      "Delivery Option": "Prepaid"
    },
    images: [`${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/product-images/violet-saree.jpg`]
  },
  {
    id: 's2',
    name: 'Pink Tie-dye Saree',
    category: 'Saree',
    price: 2799,
    description: "Elevate your elegance with our Pink Mudal Silk Saree. Designed with a luxurious feel and lightweight comfort, this saree is perfect for any occasion, from casual gatherings to formal events.",
    material: "Mudal Silk",
    details: {
      Color: "Shades of Pink",
      Size: ["S", "M", "L", "XL", "XXL"],
      "Saree Length": "5.5 meters (includes blouse material)",
      Care: "Gentle hand wash in cold water or dry clean",
      "Delivery Time": "Ready stock: Delivered in 8-10 days\nCustom handicrafts: 10-15 days as each piece is made to order",
      "Delivery Option": "Prepaid"
    },
    images: [`${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/product-images/pink-saree.jpg`]
  },
  {
    id: 's3',
    name: 'Blue Tie-dye Saree',
    category: 'Saree',
    price: 2799,
    description: "Elevate your elegance with our Blue Mudal Silk Saree. Designed with a luxurious feel and lightweight comfort, this saree is perfect for any occasion, from casual gatherings to formal events.",
    material: "Mudal Silk",
    details: {
      Color: "Shades of Blue",
      Size: ["S", "M", "L", "XL", "XXL"],
      "Saree Length": "5.5 meters (includes blouse material)",
      Care: "Gentle hand wash in cold water or dry clean",
      "Delivery Time": "Ready stock: Delivered in 8-10 days\nCustom handicrafts: 10-15 days as each piece is made to order",
      "Delivery Option": "Prepaid"
    },
    images: [`${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/product-images/blue-saree.jpg`]
  },
  {
    id: 's4',
    name: 'Lite Green Tie-dye Saree',
    category: 'Saree',
    price: 2799,
    description: "Elevate your elegance with our Green Mudal Silk Saree. Designed with a luxurious feel and lightweight comfort, this saree is perfect for any occasion, from casual gatherings to formal events.",
    material: "Mudal Silk",
    details: {
      Color: "Shades of Green",
      Size: ["S", "M", "L", "XL", "XXL"],
      "Saree Length": "5.5 meters (includes blouse material)",
      Care: "Gentle hand wash in cold water or dry clean",
      "Delivery Time": "Ready stock: Delivered in 8-10 days\nCustom handicrafts: 10-15 days as each piece is made to order",
      "Delivery Option": "Prepaid"
    },
    images: [`${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/product-images/green-saree.jpg`]
  }
];