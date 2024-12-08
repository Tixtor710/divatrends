import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Heart, Palette } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-pattern py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-playfair text-center mb-6">About Diva's Trends</h1>
          <p className="text-lg text-center text-secondary/80">Where heritage meets modernity, and fashion becomes a canvas for sustainability and artistry.</p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-playfair text-center mb-8">Our Story</h2>
          <Card className="mb-12">
            <CardContent className="pt-6">
              <p className="text-secondary/80 leading-relaxed">
                Diva's Trends was born out of a passion for preserving India's rich textile heritage while reimagining it for the modern wardrobe. Inspired by the timeless art of tie-dye (Bandhani) and the vibrant culture of handcrafted fabrics, we sought to create a brand that marries traditional techniques with contemporary designs. Every saree and corporate suit we create tells a story of craftsmanship, sustainability, and individuality.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-accent py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-playfair text-center mb-12">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-background/50 backdrop-blur">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Palette className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-playfair mb-4">Timeless Elegance</h3>
                  <p className="text-secondary/80">Each piece is crafted to be versatile, functional, and undeniably stylish.</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-background/50 backdrop-blur">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Leaf className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-playfair mb-4">Sustainability</h3>
                  <p className="text-secondary/80">We prioritize the planet, using organic materials and ethical practices in every step.</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-background/50 backdrop-blur">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Heart className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-playfair mb-4">Artisanal Craftsmanship</h3>
                  <p className="text-secondary/80">Our products are individually handcrafted, making each one truly unique.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-playfair text-center mb-6">Our Vision</h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-secondary/80 leading-relaxed">
                    We aim to redefine fashion by making it more meaningful. At Diva's Trends, our vision is to offer timeless pieces that go beyond fleeting trends—clothing that celebrates authenticity, craftsmanship, and the beauty of imperfection. We strive to create fashion that not only looks good but feels good, for both the wearer and the planet.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div>
              <h2 className="text-3xl font-playfair text-center mb-6">Our Mission</h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-secondary/80 leading-relaxed">
                    To celebrate India's artisanal heritage while creating sustainable fashion that resonates with today's conscious consumer. We believe in the power of storytelling through clothing, connecting people with the culture and craftsmanship behind every design.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="bg-accent py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-playfair text-center mb-8">Our Commitment to Sustainability</h2>
          <Card className="bg-background/50 backdrop-blur">
            <CardContent className="pt-6">
              <p className="text-secondary/80 leading-relaxed">
                At Diva's Trends, sustainability is more than just a value—it's at the core of everything we do. From using natural dyes derived from plants and minerals to collaborating with artisans who use eco-friendly techniques, we ensure our entire production process is environmentally responsible. By choosing us, you're supporting a brand that believes in slow fashion, ethical practices, and transparency.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;