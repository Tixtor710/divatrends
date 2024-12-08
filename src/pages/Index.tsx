import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Palette, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="hero-pattern min-h-[80vh] flex items-center justify-center">
        <div className="max-w-screen-xl mx-auto px-4 py-32 flex flex-col items-center text-center animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 text-secondary">
            Artisanal Tie-Dye Fashion
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl text-secondary/80">
            Discover our handcrafted collection of sarees and corporate suits, where traditional tie-dye artistry meets contemporary design using organic Indian colors.
          </p>
          <div className="flex gap-4">
            <Button asChild size="lg">
              <Link to="/products">
                Shop Collection <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/about">Our Process</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 px-4 bg-accent">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-3xl font-playfair text-center mb-12">Our Commitment</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-primary" />
                  Organic Dyes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-secondary/80">
                  We use only natural, eco-friendly dyes sourced from traditional Indian artisans.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5 text-primary" />
                  Handcrafted
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-secondary/80">
                  Each piece is carefully tie-dyed by skilled artisans, ensuring unique patterns.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  Sustainable
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-secondary/80">
                  Supporting traditional craftsmanship while promoting sustainable fashion.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16 px-4">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-3xl font-playfair text-center mb-12">Featured Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-lg aspect-square bg-primary/10 hover:bg-primary/20 transition-colors">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <h3 className="text-2xl font-playfair mb-4">Handcrafted Sarees</h3>
                <p className="mb-6 text-secondary/80">Elegant tie-dye patterns on premium silk and cotton</p>
                <Button variant="secondary" asChild>
                  <Link to="/products?category=sarees">Explore Sarees</Link>
                </Button>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg aspect-square bg-primary/10 hover:bg-primary/20 transition-colors">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <h3 className="text-2xl font-playfair mb-4">Corporate Suits</h3>
                <p className="mb-6 text-secondary/80">Contemporary tie-dye designs for the modern professional</p>
                <Button variant="secondary" asChild>
                  <Link to="/products?category=suits">Explore Suits</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-secondary text-white">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl font-playfair mb-6">Join Our Sustainable Fashion Journey</h2>
          <p className="mb-8 text-white/80 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive updates, behind-the-scenes content, and early access to new collections.
          </p>
          <Button size="lg" variant="default" asChild className="bg-primary hover:bg-primary/90">
            <Link to="/contact">Subscribe Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;