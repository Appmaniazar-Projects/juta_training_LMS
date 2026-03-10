import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  ArrowLeft, 
  Edit2, 
  User, 
  Mail, 
  Briefcase, 
  Building, 
  Award, 
  Phone, 
  CreditCard, 
  MapPin, 
  Calendar,
  Cake,
  GraduationCap,
  BookOpen,
  Home
} from "lucide-react";
import Layout from "@/components/Layout";

// This would typically come from your authentication/state management
const mockUserData = {
  fullName: "Mpho Mudau",
  email: "mphomudau@jutatraining.co.za",
  studentNumber: "STD2024001",
  course: "website development programme",
  yearOfStudy: "1 year",
  faculty: "Tech Training",
  campus: "Main Campus",
  phoneNumber: "+27 76 123 4567",
  idNumber: "0512345678089",
  gender: "Female",
  province: "Gauteng",
  joinDate: "February 2023",
  dateOfBirth: "15 March 2003",
  address: "123 Student Village, Johannesburg, 2000"
};

export default function Profile() {
  const navigate = useNavigate();
  const user = mockUserData; // In a real app, this would come from context/state

  const InfoRow = ({ icon: Icon, label, value }: { icon: any, label: string, value: string }) => (
    <div className="flex items-start gap-4 py-3 border-b border-border/50 last:border-0">
      <div className="p-2 bg-primary/10 rounded-lg text-primary">
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex-1">
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );

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
            Back
          </button>

          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground">My Profile</h1>
              <p className="text-muted-foreground">View and manage your account information</p>
            </div>
            <Button variant="outline" className="gap-2">
              <Edit2 className="w-4 h-4" />
              Edit Profile
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Profile Card */}
            <Card className="p-6 h-fit">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <User className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-xl font-bold">{user.fullName}</h2>
                <p className="text-muted-foreground mb-1">{user.course}</p>
                <div className="text-sm text-primary bg-primary/10 px-3 py-1 rounded-full mb-2">
                  {user.yearOfStudy} Student
                </div>
                <div className="text-xs text-muted-foreground">
                  Student #: {user.studentNumber}
                </div>
                
                <div className="w-full mt-6 space-y-2 text-left">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span>{user.province}, South Africa</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Award className="w-4 h-4 text-muted-foreground" />
                    <span>Member since {user.joinDate}</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Details Card */}
            <Card className="lg:col-span-2 p-6">
              <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-border">Academic Information</h3>
              
              <div className="space-y-2">
                <InfoRow icon={User} label="Full Name" value={user.fullName} />
                <InfoRow icon={Mail} label="Student Email" value={user.email} />
                <InfoRow icon={CreditCard} label="Student Number" value={user.studentNumber} />
                <InfoRow icon={Award} label="Program" value={user.course} />
                <InfoRow icon={Calendar} label="Year of Study" value={user.yearOfStudy} />
                <InfoRow icon={Building} label="Faculty" value={user.faculty} />
                <InfoRow icon={MapPin} label="Campus" value={user.campus} />
                
                <div className="pt-4 mt-4 border-t border-border/50">
                  <h4 className="font-medium text-foreground mb-3">Personal Details</h4>
                  <div className="space-y-2">
                    <InfoRow icon={CreditCard} label="ID Number" value={user.idNumber} />
                    <InfoRow icon={Cake} label="Date of Birth" value={user.dateOfBirth} />
                    <InfoRow icon={User} label="Gender" value={user.gender} />
                    <InfoRow icon={Phone} label="Phone Number" value={user.phoneNumber} />
                    <InfoRow icon={MapPin} label="Address" value={user.address} />
                    <InfoRow icon={Calendar} label="Enrollment Date" value={user.joinDate} />
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Additional Actions */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-end">
            <Button variant="outline" onClick={() => navigate('/onboarding')}>
              Update Information
            </Button>
            <Button variant="outline" className="border-destructive/50 text-destructive hover:bg-destructive/10">
              Request Account Deletion
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
