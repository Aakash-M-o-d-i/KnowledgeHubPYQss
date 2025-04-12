
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, ShieldCheck, Lock } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container px-4 mx-auto max-w-4xl">
          <div className="mb-8 flex items-center gap-3">
            <ShieldCheck className="h-8 w-8 text-brand-600" />
            <h1 className="text-3xl font-bold">Privacy Policy</h1>
          </div>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Last Updated: April 9, 2025
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p>
                At Knowledge Hub, we respect your privacy and are committed to protecting your personal data. 
                This Privacy Policy will inform you about how we look after your personal data when you visit our website
                and tell you about your privacy rights and how the law protects you.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <p className="mb-4">
                We collect minimal information to provide you with the best service possible:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <strong>Contact Information:</strong> When you submit a contact form, we collect your name and email address.
                </li>
                <li>
                  <strong>Usage Data:</strong> We collect anonymous usage statistics to improve our service quality.
                </li>
                <li>
                  <strong>Cookies:</strong> We use essential cookies to ensure the website functions properly.
                </li>
              </ul>
              <div className="bg-green-50 p-4 rounded-md border border-green-200 flex items-start gap-3 mb-4">
                <Shield className="h-5 w-5 text-green-600 mt-0.5" />
                <p className="text-green-800">
                  <strong>Data Minimization:</strong> We only collect data that is necessary for the functioning of our services. No unnecessary user data is stored.
                </p>
              </div>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <p className="mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>To provide and maintain our services</li>
                <li>To notify you about changes to our services</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information so that we can improve our services</li>
                <li>To monitor the usage of our services</li>
                <li>To detect, prevent and address technical issues</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Cookies Policy</h2>
              <p className="mb-4">
                Cookies are small text files that are placed on your computer by websites that you visit. 
                We use cookies to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Ensure the website functions properly</li>
                <li>Remember your preferences</li>
                <li>Analyze how you use our website to improve it</li>
              </ul>
              <p>
                You can control cookies through your browser settings. Disabling cookies may affect the functionality of the website.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
              <p className="mb-4">
                We may employ third-party companies and individuals due to the following reasons:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>To facilitate our Service</li>
                <li>To provide the Service on our behalf</li>
                <li>To perform Service-related services</li>
                <li>To assist us in analyzing how our Service is used</li>
              </ul>
              <p>
                These third parties have access to your Personal Data only to perform these tasks on our behalf 
                and are obligated not to disclose or use it for any other purpose.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
              <p className="mb-4">
                The security of your data is important to us, but remember that no method of transmission over 
                the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means 
                to protect your personal data, we cannot guarantee its absolute security.
              </p>
              <div className="bg-brand-50 p-4 rounded-md border border-brand-200 flex items-start gap-3">
                <Lock className="h-5 w-5 text-brand-600 mt-0.5" />
                <p className="text-brand-800">
                  <strong>Our Commitment:</strong> We implement appropriate security measures to protect against unauthorized access, 
                  alteration, disclosure, or destruction of your personal information.
                </p>
              </div>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Your Data Protection Rights</h2>
              <p className="mb-4">
                You have the following data protection rights:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>The right to access, update or delete the information we have on you</li>
                <li>The right of rectification - the right to have your information corrected if it is inaccurate or incomplete</li>
                <li>The right to object - the right to object to our processing of your personal data</li>
                <li>The right of restriction - the right to request that we restrict the processing of your personal information</li>
                <li>The right to data portability - the right to be provided with a copy of the information we have on you</li>
                <li>The right to withdraw consent - the right to withdraw your consent at any time</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
              <p className="mb-4">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting 
                the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.
              </p>
              <p>
                You are advised to review this Privacy Policy periodically for any changes. Changes to this 
                Privacy Policy are effective when they are posted on this page.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at work.aakash.modi@gmail.com
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
