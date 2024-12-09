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
    images: ["https://images.unsplash.com/photo-1649972904349-6e44c42644a7"]
  },
  {
    id: 'cd2',
    name: 'Navy Tie-Dye Corporate Co-ord Set',
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
    images: ["https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"]
  },
  {
    id: 'cd3',
    name: 'Indigo Tie-Dye Corporate Co-ord Set',
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
    images: ["https://images.unsplash.com/photo-1518770660439-4636190af475"]
  },
  {
    id: 'cd4',
    name: 'Azure Tie-Dye Corporate Co-ord Set',
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
    images: ["https://images.unsplash.com/photo-1461749280684-dccba630e2f6"]
  },
  {
    id: 'cd5',
    name: 'Teal Tie-Dye Corporate Co-ord Set',
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
    images: ["https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"]
  },
  {
    id: 'cd6',
    name: 'Cerulean Tie-Dye Corporate Co-ord Set',
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
    images: ["https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"]
  },

  // Saree Category
  {
    id: 's1',
    name: 'Royal Blue Mudal Silk Saree',
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
    images: ["https://images.unsplash.com/photo-1485827404703-89b55fcc595e"]
  },
  {
    id: 's2',
    name: 'Sapphire Mudal Silk Saree',
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
    images: ["https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"]
  },
  {
    id: 's3',
    name: 'Ocean Blue Mudal Silk Saree',
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
    images: ["https://images.unsplash.com/photo-1531297484001-80022131f5a1"]
  },
  {
    id: 's4',
    name: 'Azure Mudal Silk Saree',
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
    images: ["https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"]
  },
  {
    id: 's5',
    name: 'Turquoise Mudal Silk Saree',
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
    images: ["https://images.unsplash.com/photo-1605810230434-7631ac76ec81"]
  },
  {
    id: 's6',
    name: 'Aqua Mudal Silk Saree',
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
    images: ["https://images.unsplash.com/photo-1473091534298-04dcbce3278c"]
  },

  // Fabric Category
  {
    id: 'f1',
    name: 'Classic Blue Tie-Dye Fabric',
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
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c"]
  },
  {
    id: 'f2',
    name: 'Royal Blue Tie-Dye Fabric',
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
    images: ["https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b"]
  },
  {
    id: 'f3',
    name: 'Navy Blue Tie-Dye Fabric',
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
    images: ["https://images.unsplash.com/photo-1498050108023-c5249f4df085"]
  },
  {
    id: 'f4',
    name: 'Indigo Tie-Dye Fabric',
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
    images: ["https://images.unsplash.com/photo-1434494878577-86c23bcb06b9"]
  },
  {
    id: 'f5',
    name: 'Azure Tie-Dye Fabric',
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
    images: ["https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"]
  },
  {
    id: 'f6',
    name: 'Sapphire Tie-Dye Fabric',
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
    images: ["https://images.unsplash.com/photo-1483058712412-4245e9b90334"]
  },
];