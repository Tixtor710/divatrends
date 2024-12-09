export interface Product {
  id: string;
  name: string;
  category: 'Corporate Dress' | 'Saree' | 'Fabric';
  price: number;
  description: string;
  material: string;
  details: {
    [key: string]: string | string[];
  };
  images: string[];
}

export const products: Product[] = [
  // Corporate Dress Category
  {
    id: 'cd1',
    name: 'Blue Tie-Dye Corporate Co-ord Set',
    category: 'Corporate Dress',
    price: 1499,
    description: "Step into the office with confidence in our elegant corporate co-ord set. Featuring a subtle blue handmade tie-dye pattern on premium cotton-silk blend fabric, this outfit is designed to balance professionalism and style. Perfect for meetings, presentations, or any formal setting.",
    material: "Cotton-Silk Blend",
    details: {
      Design: "Handmade Tie-Dye",
      Care: "Dry clean or gentle hand wash in cold water",
      "Delivery Time": "Ready stock delivered in 8-10 days; custom orders take 10-15 days",
      "Delivery Option": "Prepaid"
    },
    images: ["/placeholder.svg"]
  },
  // Add 5 more corporate dress items with similar structure but different names/ids
  
  // Saree Category
  {
    id: 's1',
    name: 'Blue Mudal Silk Saree',
    category: 'Saree',
    price: 2799,
    description: "Elevate your elegance with our Mudal Silk Saree. Designed with a luxurious feel and lightweight comfort, this saree is perfect for any occasion, from casual gatherings to formal events.",
    material: "Mudal Silk",
    details: {
      Color: "Shades of Blue",
      Size: "Saree Length: 5.5 meters (includes blouse material)",
      Care: "Gentle hand wash in cold water or dry clean",
      "Delivery Time": "Ready stock: Delivered in 8-10 days\nCustom handicrafts: 10-15 days as each piece is made to order",
      "Delivery Option": "Prepaid"
    },
    images: ["/placeholder.svg"]
  },
  // Add 5 more saree items with similar structure but different names/ids
  
  // Fabric Category
  {
    id: 'f1',
    name: 'Handmade Tie-Dye Fabric',
    category: 'Fabric',
    price: 180,
    description: "Discover the art of traditional craftsmanship with our handmade tie-dye fabrics, crafted from the finest high-quality silk and cotton. Perfect for creating bespoke garments, this fabric combines vibrant artistry with durability and comfort.",
    material: "High-Quality Silk & Cotton",
    details: {
      Design: "Handmade Tie-Dye (custom patterns available)",
      "Color Variants": "Wide range of colors and patterns to choose from",
      Care: "Gentle hand wash in cold water or dry clean",
      "Delivery Time": "Ready stock: Delivered in 8-10 days\nCustom orders: Delivered in 10-15 days",
      "Delivery Option": "Prepaid"
    },
    images: ["/placeholder.svg"]
  },
  // Add 5 more fabric items with similar structure but different names/ids
];