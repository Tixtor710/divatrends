import { products } from "@/data/products";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Products = () => {
  // Add console logs to debug image URLs
  console.log("VITE_SUPABASE_URL:", import.meta.env.VITE_SUPABASE_URL);
  products.forEach(product => {
    console.log(`Product ${product.name} image URL:`, product.images[0]);
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-playfair font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
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
              <h2 className="text-xl font-playfair font-semibold mt-4">{product.name}</h2>
              <p className="text-gray-600 mt-2">₹{product.price}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Products;