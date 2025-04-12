
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container px-4 py-8 mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-2">Welcome to Knowledge Hub</h1>
            <p className="text-gray-600">
              Your central resource for exam papers, quizzes, and study materials
            </p>
          </div>
          
          <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Get Started</h2>
            <p className="text-center max-w-2xl mb-6">
              Browse our collection of subjects, access past exam papers, and test your knowledge with our interactive quizzes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
              <a href="/subjects" className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-medium mb-2">Explore Subjects</h3>
                <p className="text-gray-600">Browse all available subjects and departments</p>
              </a>
              <a href="/quizzes" className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-medium mb-2">Take Quizzes</h3>
                <p className="text-gray-600">Test your knowledge with interactive quizzes</p>
              </a>
              <a href="/about" className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-medium mb-2">About Us</h3>
                <p className="text-gray-600">Learn more about Knowledge Hub</p>
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
