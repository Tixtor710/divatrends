import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const NewsletterDialog = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  // Show dialog after user has spent some time on the site and scrolled a bit
  const handleScroll = () => {
    if (window.scrollY > 300 && !localStorage.getItem('newsletterShown')) {
      setOpen(true);
      localStorage.setItem('newsletterShown', 'true');
    }
  };

  // Add scroll listener
  useState(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success!",
      description: "Thank you for subscribing to our newsletter!",
    });
    setOpen(false);
    localStorage.setItem('newsletterSubscribed', 'true');
  };

  // Don't show if user has already subscribed
  if (localStorage.getItem('newsletterSubscribed')) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px] bg-gradient-to-br from-purple-50 to-pink-50">
        <DialogHeader>
          <DialogTitle className="text-2xl font-playfair text-center">Join Our Fashion Community</DialogTitle>
          <DialogDescription className="text-center">
            Get exclusive updates on new collections and special offers!
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border-purple-200 focus:border-purple-300"
          />
          <Button 
            type="submit" 
            className="w-full bg-purple-600 hover:bg-purple-700"
          >
            Subscribe
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewsletterDialog;