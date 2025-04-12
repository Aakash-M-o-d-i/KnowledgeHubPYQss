
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const logoPath = "/logo-uploads/c0c247c7-8340-4e0c-9690-799ad85d5329.png";

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              {/* Add logo using img*/}
              <img src={logoPath} alt="Knowledge Hub Logo" className="w-6 h-6 text-brand-400" />
              <span className="text-xl font-bold tracking-tight">Knowledge Hub</span>
            </div>
            <p className="text-gray-400 text-sm">
              Your one-stop destination for university previous year question papers.
              Easy access to a comprehensive collection of PYQs to help you excel in your exams.
            </p>
            <div className="flex space-x-4">
            <a href="https://github.com/Aakash-M-o-d-i" className="h-5 w-5 text-yellow-600 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              
              <a href="https://x.com/AakashModi1750_" className="h-5 w-5 text-teal-600 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/aakash-modi-560494344/" className="h-5 w-5 text-blue-700 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              
              <a href="mailto:work.aakash.modi@gmail.com" className="h-5 w-5 text-orange-600 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>

              <a href="https://www.facebook.com/aakash.modi.37454/" className="h-5 w-5 text-blue-700 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/a_akash.modi/?utm_source=qr&igsh=ZndsbzB3amUwcmh1" className="h-5 w-5 text-pink-600 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/subjects" className="text-gray-400 hover:text-white transition-colors">Subjects</Link>
              </li>
              <li>
                <Link to="/study-materials" className="text-gray-400 hover:text-white transition-colors">Study Materials</Link>
              </li>
              <li>
                <Link to="/quizzes" className="text-gray-400 hover:text-white transition-colors">Quizzes</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/study-materials" className="text-gray-400 hover:text-white transition-colors">Study Materials</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-400 hover:text-white transition-colors">Support</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: work.aakash.modi@gmail.com</li>
              <li>Phone: +91 7811950838</li>
              <li>Address: KL Puram, CTUAP</li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-gray-800" />

        <div className="text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Knowledge Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
