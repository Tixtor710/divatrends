import { Mail, MapPin, Phone, Instagram } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-playfair font-bold text-center mb-12">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-playfair mb-6">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <p>Y-33, Tulsi Nagar, Bhopal, Madhya Pradesh, 462003</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:bhartisachan18@gmail.com" className="hover:text-primary transition-colors">
                  bhartisachan18@gmail.com
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-playfair mb-6">Follow Us</h2>
            <div className="space-y-4">
              <a 
                href="https://www.instagram.com/divas_trend24?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span>@divas_trend24</span>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;