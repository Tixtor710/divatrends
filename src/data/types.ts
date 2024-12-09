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