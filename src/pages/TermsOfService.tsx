
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, BookOpen, AlertTriangle } from "lucide-react";

const TermsOfService = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container px-4 mx-auto max-w-4xl">
          <div className="mb-8 flex items-center gap-3">
            <FileText className="h-8 w-8 text-brand-600" />
            <h1 className="text-3xl font-bold">Terms of Service</h1>
          </div>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Last Updated: April 9, 2025
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p>
                Welcome to Knowledge Hub. These Terms of Service govern your use of our website, including any content, 
                functionality, and services offered on or through the website.
              </p>
              <p className="mt-4">
                By using our website, you accept and agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our website.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Use of the Service</h2>
              <p className="mb-4">
                Knowledge Hub provides access to educational resources, including question papers, study materials, and quizzes. 
                By using our service, you agree to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Use the service for lawful purposes only</li>
                <li>Not use the service in any way that could damage, disable, or impair the service</li>
                <li>Not attempt to gain unauthorized access to any part of the service</li>
                <li>Not use our service for commercial purposes without our explicit consent</li>
                <li>Respect intellectual property rights of the content provided</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">User Content</h2>
              <p className="mb-4">
                Our service may allow you to post, link, store, share and otherwise make available certain information, 
                text, or material. You are responsible for the content you post and its legality.
              </p>
              <p className="mb-4">
                By posting content, you grant Knowledge Hub a non-exclusive, royalty-free license to use, modify, 
                reproduce, and distribute such content on our service.
              </p>
              <div className="bg-amber-50 p-4 rounded-md border border-amber-200 flex items-start gap-3 mb-4">
                <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5" />
                <p className="text-amber-800">
                  <strong>Important:</strong> Do not post or share content that infringes on intellectual property rights, 
                  contains malware, or violates any applicable laws.
                </p>
              </div>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
              <p className="mb-4">
                The service and its original content, features, and functionality are and will remain the exclusive 
                property of Knowledge Hub and its licensors. The service is protected by copyright, trademark, and 
                other intellectual property laws.
              </p>
              <p>
                You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, 
                republish, download, store, or transmit any of the material on our website, except as it is created and 
                owned by you, or where we have given you express written permission.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Educational Resources</h2>
              <p className="mb-4">
                Knowledge Hub provides question papers and educational resources for reference and study purposes only.
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>The question papers and study materials are provided "as is" without any guarantees regarding their accuracy or completeness</li>
                <li>We do not claim ownership of the intellectual property of the educational institutions that created the original question papers</li>
                <li>The resources are shared under fair use policy for educational purposes</li>
                <li>Users may download and use these resources for personal study purposes only</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Disclaimer of Warranties</h2>
              <p className="mb-4">
                Our service is provided "as is" and "as available" without any warranties of any kind, either express or implied, 
                including but not limited to the implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
              </p>
              <p>
                We do not guarantee that the service will be uninterrupted, timely, secure, or error-free, or that defects will be corrected.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
              <p>
                In no event shall Knowledge Hub, nor its directors, employees, partners, agents, suppliers, or affiliates, 
                be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, 
                loss of profits, data, use, goodwill, or other intangible losses, resulting from:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 mt-4">
                <li>Your access to or use of or inability to access or use the service</li>
                <li>Any conduct or content of any third party on the service</li>
                <li>Any content obtained from the service</li>
                <li>Unauthorized access, use or alteration of your transmissions or content</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
              <p className="mb-4">
                We reserve the right to modify these terms of service at any time. We will provide notice by updating 
                the "Last Updated" date at the top of these Terms and by maintaining a current version of the Terms at this location.
              </p>
              <p>
                Your continued use of the platform after any such changes constitutes your acceptance of the new Terms of Service.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at work.aakash.modi@gmail.com
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
