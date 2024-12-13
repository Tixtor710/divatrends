import { useState } from "react";
import { products } from "@/data/products";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Product } from "@/data/types";
import { useToast } from "@/hooks/use-toast";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const handleBuyNow = (product: Product) => {
    // Add to cart
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const updatedCart = [...existingCart, product];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    
    toast({
      title: "Added to Cart",
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
            <div className="mt-4 space-y-3">
              <h2 className="text-xl font-playfair font-semibold">{product.name}</h2>
              <p className="text-gray-600">₹{product.price.toLocaleString()}</p>
              <p className="text-sm text-gray-500">{product.material}</p>
              
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="link" className="p-0 h-auto">View Details</Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Product Details</h4>
                    <p className="text-sm">{product.description}</p>
                    <div className="text-sm space-y-1">
                      {Object.entries(product.details).map(([key, value]) => (
                        <div key={key}>
                          <span className="font-medium">{key}:</span>{" "}
                          <span>{Array.isArray(value) ? value.join(", ") : value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>

              <div className="flex gap-2">
                <Button 
                  className="w-full"
                  onClick={() => handleBuyNow(product)}
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Products;