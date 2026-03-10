import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout showNav={false}>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white px-4">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <AlertTriangle className="w-16 h-16 text-destructive opacity-50" />
          </div>
          <h1 className="text-6xl font-bold text-foreground mb-2">404</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Oops! Page not found
          </p>
          <p className="text-sm text-muted-foreground mb-8 max-w-md">
            The page you're looking for doesn't exist. It may have been moved or
            deleted.
          </p>
          <div className="flex gap-3 justify-center">
            <Link to="/">
              <Button className="bg-primary text-white hover:bg-primary/90">
                Go to Home
              </Button>
            </Link>
            <Link to="/modules">
              <Button variant="outline" className="border-border">
                Go to Modules
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
