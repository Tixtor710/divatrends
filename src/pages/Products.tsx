import { useState } from "react";
import { products } from "@/data/products";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Product } from "@/data/types";
import { useToast } from "@/components/ui/use-toast";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-playfair font-bold mb-8">Our Products</h1>
      
      <Tabs defaultValue="all" className="w-full mb-8" onValueChange={setSelectedCategory}>
        <TabsList className="w-full justify-start mb-6">
          <TabsTrigger value="all">All Products</TabsTrigger>
          <TabsTrigger value="Corporate Dress">Corporate Co-Ords</TabsTrigger>
          <TabsTrigger value="Saree">Sarees</TabsTrigger>
          <TabsTrigger value="Fabric">Fabric Wear</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-0">
          <ProductGrid products={filteredProducts} />
        </TabsContent>
        <TabsContent value="Corporate Dress" className="mt-0">
          <ProductGrid products={filteredProducts} />
        </TabsContent>
        <TabsContent value="Saree" className="mt-0">
          <ProductGrid products={filteredProducts} />
        </TabsContent>
        <TabsContent value="Fabric" className="mt-0">
          <ProductGrid products={filteredProducts} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

const ProductGrid = ({ products }: { products: Product[] }) => {
  const { toast } = useToast();

  const handleBuyNow = (product: Product) => {
    toast({
      title: "Product Added",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
          <CardContent className="p-4">
            <AspectRatio ratio={1}>
              <img
                src={product.images[0]}
                alt={product.name}
                className="object-cover w-full h-full rounded-md"
                onError={(e) => {
                  console.error(`Error loading image for ${product.name}:`, e);
                  e.currentTarget.src = "/placeholder.svg";
                }}
              />
            </AspectRatio>
            <div className="mt-4">
              <h2 className="text-xl font-playfair font-semibold">{product.name}</h2>
              <p className="text-gray-600 mt-2">₹{product.price.toLocaleString()}</p>
              <p className="text-sm text-gray-500 mt-1">{product.material}</p>
              <Button 
                className="w-full mt-4"
                onClick={() => handleBuyNow(product)}
              >
                Buy Now
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Products;