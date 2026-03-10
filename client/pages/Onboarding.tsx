import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, Loader2 } from "lucide-react";
import Layout from "@/components/Layout";

export default function Onboarding() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    jobTitle: "",
    department: "",
    experience: "",
    role: "",
    phoneNumber: "",
    idNumber: "",
    gender: "",
    province: "",
    modules: {
      intro: false,
      content: false,
      assessments: false,
    },
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, role: value }));
  };

  const handleModuleChange = (module: keyof typeof formData.modules) => {
    setFormData((prev) => ({
      ...prev,
      modules: { ...prev.modules, [module]: !prev.modules[module] },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      navigate("/modules");
      setIsLoading(false);
    }, 500);
  };

  return (
    <Layout showNav={false}>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-2xl mb-4 shadow-lg">
              <span className="text-white font-bold text-xl"></span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
              Learner Onboarding
            </h1>
            <p className="text-lg text-muted-foreground">
              Welcome to Juta Training LMS. Let's get you set up.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="font-semibold">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="h-11 border border-border rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="font-semibold">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="h-11 border border-border rounded-lg"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="font-semibold">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="h-11 border border-border rounded-lg"
                />
              </div>

              {/* Organisation Field */}
              <div className="space-y-2">
                <Label htmlFor="organisation" className="font-semibold">
                  Organisation (Optional)
                </Label>
                <Input
                  id="organisation"
                  name="organisation"
                  type="text"
                  placeholder="Your company name"
                  value={formData.organisation}
                  onChange={handleInputChange}
                  className="h-11 border border-border rounded-lg"
                />
              </div>

              {/* Role Select */}
              <div className="space-y-2">
                <Label htmlFor="role" className="font-semibold">
                  Role
                </Label>
                <Select 
                  name="role"
                  value={formData.role} 
                  onValueChange={(value) => setFormData({...formData, role: value})}
                >
                  <SelectTrigger className="h-11 border border-border rounded-lg">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">Student</SelectItem>
                    <SelectItem value="lecturer">Lecturer</SelectItem>
                    <SelectItem value="trainer">Trainer</SelectItem>
                    <SelectItem value="admin">Administrator</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <Label htmlFor="phoneNumber" className="font-semibold">
                  Phone Number
                </Label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="h-11 border border-border rounded-lg"
                />
              </div>

              {/* ID Number */}
              <div className="space-y-2">
                <Label htmlFor="idNumber" className="font-semibold">
                  ID Number
                </Label>
                <Input
                  id="idNumber"
                  name="idNumber"
                  type="text"
                  placeholder="Enter your ID number"
                  value={formData.idNumber}
                  onChange={handleInputChange}
                  className="h-11 border border-border rounded-lg"
                />
              </div>

              {/* Gender Select */}
              <div className="space-y-2">
                <Label htmlFor="gender" className="font-semibold">
                  Gender
                </Label>
                <Select 
                  name="gender"
                  value={formData.gender} 
                  onValueChange={(value) => setFormData({...formData, gender: value})}
                >
                  <SelectTrigger className="h-11 border border-border rounded-lg">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                    <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Province Select */}
              <div className="space-y-2">
                <Label htmlFor="province" className="font-semibold">
                  Province
                </Label>
                <Select 
                  name="province"
                  value={formData.province} 
                  onValueChange={(value) => setFormData({...formData, province: value})}
                >
                  <SelectTrigger className="h-11 border border-border rounded-lg">
                    <SelectValue placeholder="Select province" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="eastern-cape">Eastern Cape</SelectItem>
                    <SelectItem value="free-state">Free State</SelectItem>
                    <SelectItem value="gauteng">Gauteng</SelectItem>
                    <SelectItem value="kwazulu-natal">KwaZulu-Natal</SelectItem>
                    <SelectItem value="limpopo">Limpopo</SelectItem>
                    <SelectItem value="mpumalanga">Mpumalanga</SelectItem>
                    <SelectItem value="north-west">North West</SelectItem>
                    <SelectItem value="northern-cape">Northern Cape</SelectItem>
                    <SelectItem value="western-cape">Western Cape</SelectItem>
                  </SelectContent>
                </Select>
              </div>


              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-11 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    Continue to Register
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </Button>
            </form>

            {/* Back Link */}
            <div className="mt-6 pt-6 border-t border-border text-center">
              <button
                onClick={() => navigate("/")}
                className="text-primary hover:text-primary/80 font-medium transition-colors"
              >
                Back to Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
