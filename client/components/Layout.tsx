import { ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogOut, Menu, X } from "lucide-react";
import { useState } from "react";

interface LayoutProps {
  children: ReactNode;
  showNav?: boolean;
}

export default function Layout({ children, showNav = false }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Here you can add any logout logic like clearing tokens, etc.
    // For now, we'll just redirect to the login page
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo and Brand */}
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/juta-logo.png"
                alt="Juta Training and Skills Development"
                className="h-16 w-auto object-contain group-hover:shadow-lg transition-shadow"
              />
              <div className="hidden sm:block ml-2">
                <h1 className="text-xl font-bold text-foreground">Juta Consulting</h1>
                <p className="text-sm text-muted-foreground">Learning Management System</p>
              </div>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-secondary/10 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>

            {/* Desktop Navigation */}
            {showNav && (
              <nav className="hidden md:flex items-center gap-8">
                <Link
                  to="/modules"
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  Modules
                </Link>
                <Link
                  to="/profile"
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  Profile
                </Link>
                <button 
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-2 bg-destructive text-destructive-foreground rounded-lg hover:bg-red-700 transition-colors font-medium"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </nav>
            )}
          </div>

          {/* Mobile Navigation */}
          {showNav && mobileMenuOpen && (
            <nav className="md:hidden border-t border-border py-4 flex flex-col gap-2">
              <Link
                to="/modules"
                className="px-4 py-2 text-foreground hover:bg-secondary/10 rounded-lg transition-colors font-medium"
              >
                Modules
              </Link>
              <Link
                to="/profile"
                className="px-4 py-2 text-foreground hover:bg-secondary/10 rounded-lg transition-colors font-medium"
              >
                Profile
              </Link>
              <button 
                onClick={handleLogout}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-destructive text-destructive-foreground rounded-lg hover:bg-red-700 transition-colors font-medium w-full"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>
    </div>
  );
}
