import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Blog = () => {
  const blogPosts = [
    {
      title: "The Timeless Art of Tie-Dye: A Heritage Worth Preserving",
      description: "Discover the rich history and cultural significance of tie-dye in Indian fashion.",
      content: `Tie-dye is more than just a vibrant pattern or fleeting fashion trend—it's an ancient art form that holds cultural significance and historical value. At Diva's Trends, we honor this tradition by incorporating tie-dye techniques into our handcrafted sarees and corporate co-ords, bringing the beauty of the past into the present.

      The History of Tie-Dye

      The origins of tie-dye can be traced back thousands of years to cultures across the globe, including India, where it is known as Bandhani. This intricate method of resist dyeing involves carefully tying fabric into specific patterns before immersing it in natural dyes. The result? Exquisite, vibrant patterns that tell a story of craftsmanship and creativity. Over time, tie-dye has become a symbol of cultural heritage, especially in regions like Rajasthan and Gujarat.

      Our Process at Diva's Trends

      At Diva's Trends, we carry forward this rich legacy by adding a modern, eco-conscious twist. Our artisans use organic Indian dyes derived from plants, flowers, and minerals to ensure that every piece is both sustainable and stunning. Each saree and suit is individually hand-dyed, making every product one-of-a-kind. This commitment to authenticity ensures that our customers not only wear fashion but also carry a piece of tradition with them.

      Why It Matters

      Preserving the art of tie-dye isn't just about aesthetics; it's about supporting artisans, reducing environmental impact, and keeping cultural traditions alive. When you purchase a tie-dye saree or suit from Diva's Trends, you're contributing to this cause. You're helping preserve an art form that has been passed down through generations and making a sustainable choice that supports the planet.`,
      date: "March 15, 2024"
    },
    {
      title: "Sustainable Fashion: Why It's the Future of Style",
      description: "Learn about our commitment to sustainable fashion and eco-friendly practices.",
      content: `In recent years, the fashion industry has undergone a significant transformation, with sustainability emerging as a key focus. As more consumers recognize the environmental and social impact of their choices, sustainable fashion has gone from a niche concept to a global movement. At Diva's Trends, sustainability isn't just a buzzword; it's a principle we live by.

      What is Sustainable Fashion?

      Sustainable fashion encompasses practices that minimize harm to the environment while supporting ethical labor and production processes. It's about creating clothing that lasts, using materials that are eco-friendly, and adopting production methods that reduce waste and pollution. For us at Diva's Trends, this means handcrafting our sarees and co-ords using organic dyes and natural fabrics, all while ensuring fair practices for our artisans.

      How We Stay Committed to Sustainability

      Our approach begins with our materials. Instead of synthetic dyes that harm the environment, we use natural dyes derived from plant-based sources like indigo, turmeric, and madder. These dyes are not only safer for the planet but also for the wearer, as they are free from harsh chemicals. Additionally, our production process involves minimal water and energy use, ensuring a lower carbon footprint.

      Why You Should Choose Sustainable Fashion

      When you invest in sustainable clothing, you're making a statement. You're saying no to fast fashion and yes to high-quality, ethically made pieces that align with your values. Sustainable fashion doesn't mean compromising on style; our collection is proof that you can have elegant, versatile clothing while being kind to the planet.`,
      date: "March 10, 2024"
    },
    {
      title: "How to Style Tie-Dye Sarees for Every Occasion",
      description: "Expert styling tips for wearing tie-dye sarees at work, events, and casual outings.",
      content: `Tie-dye sarees have come a long way from being associated only with traditional occasions. Today, they are versatile pieces that can be styled to suit any event, whether it's a formal office meeting, a festive celebration, or a casual day out. At Diva's Trends, our handcrafted tie-dye sarees are designed to blend timeless elegance with modern trends. Here's how you can style them to perfection.

      For Work: Subtle and Sophisticated

      Who says sarees can't be office wear? Pair a soft pastel tie-dye saree with a structured blouse in a complementary shade. Opt for minimal accessories, such as stud earrings and a simple bracelet, to keep the look professional yet stylish. Complete the outfit with low-heeled pumps and a sleek bun for a polished appearance that exudes confidence.

      For Social Events: Bold and Glamorous

      Make a statement at weddings or festive gatherings with a vibrant tie-dye saree in rich hues like indigo or maroon. Pair it with a sequined or embroidered blouse for added glam. Chunky jewelry, such as chandelier earrings or a statement necklace, will elevate your look, while bold makeup and loose curls add the finishing touch.

      For Casual Outings: Effortlessly Chic

      For a day out with friends or a casual dinner, style a tie-dye saree with a crop top or a trendy jacket for a fusion look. Add a pair of white sneakers or comfortable flats for a playful twist. Keep your accessories light—think hoop earrings and a sling bag—and let the saree do the talking.`,
      date: "March 5, 2024"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-playfair font-bold text-secondary mb-4">Our Blog</h1>
        <p className="text-muted-foreground">Discover stories about fashion, sustainability, and style</p>
      </div>
      
      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1 max-w-4xl mx-auto">
        {blogPosts.map((post, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-accent">
            <CardHeader>
              <div className="space-y-1">
                <CardTitle className="text-2xl font-playfair text-secondary">{post.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">{post.date}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-secondary/80 mb-4">{post.description}</p>
              <div className="prose prose-lg max-w-none">
                {post.content.split('\n\n').map((paragraph, pIndex) => (
                  <p key={pIndex} className="mb-4 text-secondary/80">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Blog;