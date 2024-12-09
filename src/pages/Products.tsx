import { useState } from "react";
import { products } from "@/data/products";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useIsMobile } from "@/hooks/use-mobile";

const Products = () => {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState<string>("Corporate Dress");
  const isMobile = useIsMobile();

  const handleAddToCart = (productName: string) => {
    toast({
      title: "Added to Cart",
      description: `${productName} has been added to your cart.`,
    });
  };

  const categories = ["Corporate Dress", "Saree", "Fabric"];
  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-playfair font-bold text-center mb-8">
        Our Products
      </h1>

      {isMobile ? (
        <div className="mb-8">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      ) : (
        <Tabs
          defaultValue="Corporate Dress"
          value={selectedCategory}
          className="w-full"
          onValueChange={setSelectedCategory}
        >
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="text-lg font-medium"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="flex flex-col">
            <CardHeader>
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <CardTitle className="mt-4">{product.name}</CardTitle>
              <CardDescription>
                Material: {product.material}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-gray-600 mb-4">
                {product.description}
              </p>
              <div className="space-y-2">
                {Object.entries(product.details).map(([key, value]) => (
                  <div key={key} className="text-sm">
                    <span className="font-medium">{key}:</span>{" "}
                    <span className="text-gray-600">{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <span className="text-xl font-semibold">
                ₹{product.price}
                {product.category === 'Fabric' && '/meter'}
              </span>
              <Button
                onClick={() => handleAddToCart(product.name)}
                className="bg-primary hover:bg-primary/90"
              >
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Products;