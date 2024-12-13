import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const Auth = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleGoogleSignIn = () => {
    // Implement Google Sign In
    console.log("Google Sign In clicked");
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success!",
      description: "Thank you for subscribing to our newsletter!",
    });
    setEmail("");
  };

  return (
    <div className="container mx-auto px-4 py-16 flex flex-col gap-8">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Welcome to Diva's Trend</CardTitle>
          <CardDescription>Sign in to your account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button 
            variant="outline" 
            className="w-full" 
            onClick={handleGoogleSignIn}
          >
            <Mail className="mr-2 h-4 w-4" />
            Continue with Google
          </Button>
        </CardContent>
      </Card>

      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Subscribe to our Newsletter</CardTitle>
          <CardDescription>
            Get updates on new collections and special offers!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleNewsletterSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" className="w-full">
              Subscribe
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;