import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Github } from "lucide-react";

const Auth = () => {
  const handleGoogleSignIn = () => {
    // Implement Google Sign In
    console.log("Google Sign In clicked");
  };

  const handleGithubSignIn = () => {
    // Implement Github Sign In
    console.log("Github Sign In clicked");
  };

  return (
    <div className="container mx-auto px-4 py-16 flex justify-center items-center">
      <Card className="w-full max-w-md">
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
          <Button 
            variant="outline" 
            className="w-full" 
            onClick={handleGithubSignIn}
          >
            <Github className="mr-2 h-4 w-4" />
            Continue with Github
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;