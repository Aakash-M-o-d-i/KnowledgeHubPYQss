
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MessageCircle, Instagram, Facebook, Linkedin, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";

const Support = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container px-4 mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Support & Contact</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Need help or have questions? I'm here to assist you. Reach out through any of the channels below.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-50 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-brand-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Email</h3>
                      <p className="text-gray-600">work.aakash.modi@gmail.com</p>
                      <p className="text-sm text-gray-500 mt-1">We usually respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-50 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-brand-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Phone</h3>
                      <p className="text-gray-600">+91 7811950838</p>
                      <p className="text-sm text-gray-500 mt-1">Monday to Friday, 9am to 5pm IST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-50 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-brand-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Location</h3>
                      <p className="text-gray-600">KL Puram, CTUAP</p>
                    </div>  
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-50 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-brand-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 8:00 AM - 2:00 PM</p>
                      <p className="text-gray-600">Saturday: 10:00 AM - 12:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h2 className="text-2xl font-semibold mb-6">Connect With Us</h2>
                <p className="mb-4 text-gray-600">
                  Follow us on social media for updates, educational content, and more.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://www.instagram.com/a_akash.modi/?utm_source=qr&igsh=ZndsbzB3amUwcmh1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
                  >
                    <Instagram className="h-5 w-5 text-pink-600" />
                    <span>Instagram</span>
                  </a>
                  
                  <a 
                    href="https://www.facebook.com/aakash.modi.37454/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
                  >
                    <Facebook className="h-5 w-5 text-blue-600" />
                    <span>Facebook</span>
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/aakash-modi-560494344/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
                  >
                    <Linkedin className="h-5 w-5 text-blue-700" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
              <p className="mb-6 text-gray-600">
                Have a question or suggestion? Fill out the form below and we'll get back to you as soon as possible.
              </p>
              <ContactForm />
            </div>
          </div>
          
          <div className="mt-16 max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6 text-center">How We Can Help</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
                <div className="mx-auto bg-brand-50 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                  <MessageCircle className="h-7 w-7 text-brand-600" />
                </div>
                <h3 className="text-lg font-medium mb-2">General Inquiries</h3>
                <p className="text-gray-600">
                  Questions about our platform, available resources, or how to use our features.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
                <div className="mx-auto bg-brand-50 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                  <Mail className="h-7 w-7 text-brand-600" />
                </div>
                <h3 className="text-lg font-medium mb-2">Suggestions</h3>
                <p className="text-gray-600">
                  Have ideas for new features or additional question papers to include? Let us know!
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
                <div className="mx-auto bg-brand-50 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                  <Phone className="h-7 w-7 text-brand-600" />
                </div>
                <h3 className="text-lg font-medium mb-2">Technical Support</h3>
                <p className="text-gray-600">
                  Having trouble accessing resources or experiencing technical issues? We're here to help.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Support;
