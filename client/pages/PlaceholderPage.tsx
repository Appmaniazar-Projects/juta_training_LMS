import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Lightbulb } from "lucide-react";
import Layout from "@/components/Layout";

export default function PlaceholderPage() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Layout showNav={true}>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-primary hover:text-primary/80 font-medium mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-3">
              Page Under Development
            </h1>
            <p className="text-lg text-muted-foreground">
              {location.pathname}
            </p>
          </div>

          {/* Content Card */}
          <Card className="bg-white border-border p-8 text-center">
            <div className="flex justify-center mb-4">
              <Lightbulb className="w-12 h-12 text-primary opacity-50" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Coming Soon
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              This page is currently a placeholder. Let us know what content you'd
              like to add here!
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-left max-w-md mx-auto mb-6">
              <p className="text-sm text-blue-900">
                <span className="font-semibold">Ready to customize?</span> Let
                us know what features you'd like on this page, and we'll build it
                for you.
              </p>
            </div>

            <Button
              onClick={() => navigate("/modules")}
              className="bg-primary text-white hover:bg-primary/90"
            >
              Go to Modules
            </Button>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
