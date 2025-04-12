
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Subjects from "./pages/Subjects";
import SubjectDetail from "./pages/SubjectDetail";
import StudyMaterials from "./pages/StudyMaterials";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Quizzes from "./pages/Quizzes";
import QuizDetail from "./pages/QuizDetail";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Support from "./pages/Support";
import FAQ from "./pages/FAQ";
import { ThemeProvider } from "./context/ThemeContext";

// Create a client
const queryClient = new QueryClient();

const App = () => {
  return (
    <React.StrictMode>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/subjects" element={<Subjects />} />
                <Route path="/subjects/:id" element={<SubjectDetail />} />
                <Route path="/study-materials" element={<StudyMaterials />} />
                <Route path="/quizzes" element={<Quizzes />} />
                <Route path="/quizzes/:id" element={<QuizDetail />} />
                <Route path="/about" element={<About />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/support" element={<Support />} />
                <Route path="/faq" element={<FAQ />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;
