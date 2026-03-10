import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Users,
  CheckCircle,
  Clock,
  ArrowRight,
  BarChart3,
} from "lucide-react";
import Layout from "@/components/Layout";

interface Module {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  duration: string;
  status: "available" | "completed" | "in-progress";
  participants?: number;
}

const modules: Module[] = [
  {
    id: "1",
    title: "Introduction to the LMS",
    description:
      "Overview of the Juta Training LMS and how learners will navigate the platform. Get familiar with all the essential features.",
    icon: <BookOpen className="w-8 h-8" />,
    duration: "2-3 hours",
    status: "available",
    participants: 24,
  },
  {
    id: "2",
    title: "Using Juta Training Content",
    description:
      "Learn how to access and use Juta training materials within the LMS. Master content navigation and resources.",
    icon: <Users className="w-8 h-8" />,
    duration: "3-4 hours",
    status: "available",
    participants: 18,
  },
  {
    id: "3",
    title: "Assessments and Reporting",
    description:
      "Understand assessments, monitoring learner progress, and basic reporting concepts to track your development.",
    icon: <BarChart3 className="w-8 h-8" />,
    duration: "2 hours",
    status: "available",
    participants: 12,
  },
];

export default function Modules() {
  const navigate = useNavigate();

  const getStatusBadge = (status: Module["status"]) => {
    switch (status) {
      case "completed":
        return (
          <Badge className="bg-green-50 text-green-700 border-green-200 flex items-center gap-1">
            <CheckCircle className="w-3 h-3" />
            Completed
          </Badge>
        );
      case "in-progress":
        return (
          <Badge className="bg-blue-50 text-blue-700 border-blue-200">
            In Progress
          </Badge>
        );
      default:
        return (
          <Badge className="bg-gray-50 text-gray-700 border-gray-200">
            Available
          </Badge>
        );
    }
  };

  return (
    <Layout showNav={true}>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-3">
              Available Modules
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Explore our comprehensive training modules designed to help you
              succeed. Complete modules at your own pace.
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            <Card className="p-6 bg-white border-border">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-muted-foreground text-sm font-medium mb-1">
                    Total Modules
                  </p>
                  <p className="text-3xl font-bold text-foreground">3</p>
                </div>
                <BookOpen className="w-8 h-8 text-primary opacity-20" />
              </div>
            </Card>
            <Card className="p-6 bg-white border-border">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-muted-foreground text-sm font-medium mb-1">
                    Completed
                  </p>
                  <p className="text-3xl font-bold text-foreground">0</p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-500 opacity-20" />
              </div>
            </Card>
            <Card className="p-6 bg-white border-border">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-muted-foreground text-sm font-medium mb-1">
                    Your Progress
                  </p>
                  <p className="text-3xl font-bold text-foreground">25%</p>
                </div>
                <BarChart3 className="w-8 h-8 text-primary opacity-20" />
              </div>
            </Card>
          </div>

          {/* Modules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module) => (
              <Card
                key={module.id}
                className="bg-white border-border hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Card Header with Icon */}
                <div className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-b border-border">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white">
                      {module.icon}
                    </div>
                    {getStatusBadge(module.status)}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {module.title}
                  </h3>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-muted-foreground text-sm mb-4 flex-1">
                    {module.description}
                  </p>

                  {/* Module Meta */}
                  <div className="space-y-3 mb-6 pb-6 border-b border-border">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{module.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>
                        {module.participants} participants enrolled
                      </span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button
                    onClick={() => navigate("/assessment")}
                    className="w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold h-10 rounded-lg hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    Take Assessment
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Support Section */}
          <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-foreground mb-2">
              Need Help?
            </h3>
            <p className="text-muted-foreground mb-4">
              Our support team is here to assist you. Contact us if you have any
              questions about the modules or assessments.
            </p>
            <Button className="bg-primary text-white hover:bg-primary/90">
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
