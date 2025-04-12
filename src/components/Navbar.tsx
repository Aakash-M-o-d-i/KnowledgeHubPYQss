
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, X, HelpCircle } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { toast } from "@/hooks/use-toast";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/subjects?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  const logoPath = "/logo-uploads/c0c247c7-8340-4e0c-9690-799ad85d5329.png";

  return (
    <nav className="sticky top-0 z-40 w-full bg-background border-b shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src={logoPath} 
              alt="Knowledge Hub" 
              className="w-8 h-8 object-contain"
            />
            <span className="text-xl font-bold tracking-tight text-foreground">Knowledge Hub</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-brand-600 transition-colors">
            Home
          </Link>
          <Link to="/subjects" className="text-sm font-medium hover:text-brand-600 transition-colors">
            Subjects
          </Link>
          <Link to="/study-materials" className="text-sm font-medium hover:text-brand-600 transition-colors">
            Study Materials
          </Link>
          <Link to="/quizzes" className="text-sm font-medium hover:text-brand-600 transition-colors">
            Quizzes
          </Link>
          <Link to="/faq" className="text-sm font-medium hover:text-brand-600 transition-colors">
            FAQ
          </Link>
          <Link to="/support" className="text-sm font-medium hover:text-brand-600 transition-colors">
            Support
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-brand-600 transition-colors">
            About
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search by subject or department..."
              className="pl-8 w-[200px] lg:w-[300px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="p-2 rounded-md hover:bg-accent"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-background border-b shadow-lg z-50">
          <div className="p-4 space-y-4">
            <form onSubmit={handleSearch} className="relative mb-4">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search by subject or department..."
                className="pl-8 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
            <div className="space-y-2">
              <Link 
                to="/" 
                className="block p-2 text-sm hover:bg-accent rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/subjects" 
                className="block p-2 text-sm hover:bg-accent rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Subjects
              </Link>
              <Link 
                to="/study-materials" 
                className="block p-2 text-sm hover:bg-accent rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Study Materials
              </Link>
              <Link 
                to="/quizzes" 
                className="block p-2 text-sm hover:bg-accent rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Quizzes
              </Link>
              <Link 
                to="/faq" 
                className="block p-2 text-sm hover:bg-accent rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link 
                to="/support" 
                className="block p-2 text-sm hover:bg-accent rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Support
              </Link>
              <Link 
                to="/about" 
                className="block p-2 text-sm hover:bg-accent rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
