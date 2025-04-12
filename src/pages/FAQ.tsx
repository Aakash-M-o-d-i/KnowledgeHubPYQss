
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HelpCircle, Search, Download, BookOpen, FileQuestion, HeartHandshake, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I download question papers?",
      answer: "To download question papers, navigate to the Subjects page, select your subject, and choose the paper you want to download. Click on the download button next to the paper. Files are in PDF format and will be downloaded directly to your device."
    },
    {
      question: "Do I need to sign up to use this service?",
      answer: "No, you don't need to sign up or create an account to access and download question papers. Our platform is designed to provide open access to educational resources without any registration barriers."
    },
    {
      question: "Is this service free?",
      answer: "Yes, Knowledge Hub is completely free to use. We believe in making educational resources accessible to everyone without any cost. You can browse and download all available question papers at no charge."
    },
    {
      question: "Can I suggest a question paper to be added?",
      answer: "Absolutely! We welcome suggestions for new question papers. Please use our Contact form or email us at work.aakash.modi@gmail.com with details of the paper you'd like to see added, including the subject, university, year, and any other relevant information."
    },
    {
      question: "How often are new papers added to the platform?",
      answer: "We update our collection regularly, especially after examination periods. New papers are typically added within 2-4 weeks after they become available from universities."
    },
    {
      question: "Are the question papers official?",
      answer: "Yes, all question papers on our platform are official papers from various universities and educational institutions. We ensure the authenticity of all materials before adding them to our collection."
    },
    {
      question: "Can I use these papers for commercial purposes?",
      answer: "No, the papers are provided for educational and personal use only. Commercial use, reproduction for profit, or redistribution on other platforms without permission is not allowed."
    },
    {
      question: "What if I find an error in a question paper?",
      answer: "If you find any errors or issues with a question paper, please let us know through our Contact form. Provide specific details about the error so we can verify and correct it promptly."
    },
    {
      question: "Are there answer keys available for the question papers?",
      answer: "Currently, we provide question papers only. Answer keys are not available for most papers, but we're working on adding this feature in the future where possible."
    },
    {
      question: "Can I request papers from a specific university?",
      answer: "Yes, we accept requests for specific universities or courses. Contact us with your request, and we'll try our best to add those papers to our collection as they become available."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container px-4 mx-auto">
          <div className="mb-10 text-center">
            <div className="inline-block p-3 bg-brand-50 rounded-full mb-4">
              <HelpCircle className="h-10 w-10 text-brand-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Frequently Asked Questions</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to the most common questions about Knowledge Hub and our services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto mb-16">
            <Accordion type="single" collapsible className="border rounded-lg overflow-hidden">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                    <div className="text-left text-lg font-medium">{faq.question}</div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
              <div className="mx-auto bg-brand-50 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                <Search className="h-7 w-7 text-brand-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Finding Papers</h3>
              <p className="text-gray-600">
                Use our search function or browse by subject, university, or exam type to find the papers you need.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
              <div className="mx-auto bg-brand-50 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                <Download className="h-7 w-7 text-brand-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Downloading</h3>
              <p className="text-gray-600">
                All papers are available in PDF format and can be downloaded with a single click.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
              <div className="mx-auto bg-brand-50 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                <HeartHandshake className="h-7 w-7 text-brand-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Support</h3>
              <p className="text-gray-600">
                Need more help? Visit our Support page or contact us directly with your questions.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-semibold mb-4">Still have questions?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              If you couldn't find the answer to your question, feel free to reach out to us directly.
              We're here to help!
            </p>
            <div className="flex justify-center gap-4">
              <a href="/support">
                <Button size="lg" className="gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Contact Support
                </Button>
              </a>
              <a href="mailto:work.aakash.modi@gmail.com">
                <Button variant="outline" size="lg" className="gap-2">
                  <Mail className="h-5 w-5" />
                  Email Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQ;
