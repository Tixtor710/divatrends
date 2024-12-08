import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="hero-pattern min-h-[80vh] flex items-center justify-center">
        <div className="max-w-screen-xl mx-auto px-4 py-32 flex flex-col items-center text-center animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            Artisanal Tie-Dye Fabrics
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            Discover our handcrafted collection of premium tie-dye fabrics, where
            tradition meets contemporary design.
          </p>
          <div className="flex gap-4">
            <Button asChild size="lg">
              <Link to="/products">
                Shop Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>

      <section className="py-16 px-4">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-3xl font-playfair text-center mb-12">
            Featured Collections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Placeholder for Shopify products */}
            <div className="bg-accent rounded-lg p-6 text-center">
              <div className="aspect-square bg-primary/10 rounded-lg mb-4"></div>
              <h3 className="font-playfair text-xl mb-2">Summer Collection</h3>
              <p className="text-gray-600 mb-4">
                Vibrant patterns for the season
              </p>
              <Button variant="outline" asChild>
                <Link to="/products">View Collection</Link>
              </Button>
            </div>
            <div className="bg-accent rounded-lg p-6 text-center">
              <div className="aspect-square bg-primary/10 rounded-lg mb-4"></div>
              <h3 className="font-playfair text-xl mb-2">Autumn Designs</h3>
              <p className="text-gray-600 mb-4">
                Earthy tones and organic patterns
              </p>
              <Button variant="outline" asChild>
                <Link to="/products">View Collection</Link>
              </Button>
            </div>
            <div className="bg-accent rounded-lg p-6 text-center">
              <div className="aspect-square bg-primary/10 rounded-lg mb-4"></div>
              <h3 className="font-playfair text-xl mb-2">Limited Edition</h3>
              <p className="text-gray-600 mb-4">
                Exclusive patterns and designs
              </p>
              <Button variant="outline" asChild>
                <Link to="/products">View Collection</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;