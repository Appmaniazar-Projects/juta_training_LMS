import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, AlertCircle, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";
import { useState } from "react";

export default function Assessment() {
  const navigate = useNavigate();

  return (
    <Layout showNav={true}>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => navigate("/modules")}
            className="flex items-center gap-2 text-primary hover:text-primary/80 font-medium mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Modules
          </button>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-3">
              Module Assessment
            </h1>
            <p className="text-lg text-muted-foreground">
              Complete this assessment to demonstrate your understanding of the
              module content.
            </p>
          </div>

          {/* Assessment Container */}
          <Card className="bg-white border-border p-6 sm:p-8">
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Module Assessment
                </h2>
                <p className="text-muted-foreground">
                  Complete this assessment to demonstrate your understanding of the module content.
                </p>
              </div>

              {/* Google Form Container */}
              <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <div className="max-w-md mx-auto">
                  <div className="flex justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                      <path d="M8 14h.01"></path>
                      <path d="M12 14h.01"></path>
                      <path d="M16 14h.01"></path>
                      <path d="M8 18h.01"></path>
                      <path d="M12 18h.01"></path>
                      <path d="M16 18h.01"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Google Form Assessment</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    The assessment for this module will be conducted through Google Forms. 
                    Once available, the form will be embedded here for you to complete.
                  </p>
                  <div className="space-y-3">
                    <Button 
                      variant="outline" 
                      className="w-full bg-white hover:bg-gray-50"
                      disabled={true}
                    >
                      <span className="opacity-50">Form will appear here</span>
                    </Button>
                    <p className="text-xs text-muted-foreground">
                      Form not showing up? Contact support if you need assistance.
                    </p>
                  </div>
                </div>
              </div>

              {/* Instructions */}
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h2a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-blue-800">How to add your Google Form</h3>
                    <div className="mt-2 text-sm text-blue-700 space-y-1">
                      <p>1. Open your Google Form</p>
                      <p>2. Click <strong>Send</strong> in the top-right corner</p>
                      <p>3. Go to the <strong>Embed</strong> tab (code icon)</p>
                      <p>4. Copy the iframe code and share it with us</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center pt-4">
                <Button
                  onClick={() => navigate("/modules")}
                  variant="outline"
                  className="border-border"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Modules
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
