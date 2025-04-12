import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, Download, Users, Mail, MapPin, Phone } from "lucide-react";
import ContactFormDialog from "@/components/ContactFormDialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-brand-50 py-16">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">About Knowledge Hub</h1>
              <p className="text-xl text-gray-600 mb-8">
                Helping students excel in their exams through access to quality study resources.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container px-4 mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-gray-600 mb-4">
                  At Knowledge Hub, we believe that every student deserves access to quality
                  study materials to help them succeed in their academic journey.
                </p>
                <p className="text-gray-600 mb-4">
                  Our mission is to create a comprehensive platform where students can easily
                  find and download previous year question papers from various universities,
                  helping them prepare effectively for their exams.
                </p>
                <p className="text-gray-600">
                  We are committed to supporting educational excellence by making these
                  resources accessible, organized, and completely free of charge.
                </p>
              </div>
              <div className="bg-brand-50 p-8 rounded-lg">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center">
                        <BookOpen className="h-6 w-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Curated Resources</h3>
                      <p className="text-gray-600">
                        We carefully collect and organize question papers from top universities.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center">
                        <Download className="h-6 w-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Free Access</h3>
                      <p className="text-gray-600">
                        All resources are available to download without any subscription fees.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center">
                        <Users className="h-6 w-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Community Driven</h3>
                      <p className="text-gray-600">
                        Built by students, for students, with contributions from our community.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-brand-700 text-white">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">35+</div>
                <p className="text-brand-100">Question Papers</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">1+</div>
                <p className="text-brand-100">Universities</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">23+</div>
                <p className="text-brand-100">Subjects</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">56</div>
                <p className="text-brand-100">Students Helped</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Team</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Meet the dedicated individuals who are passionate about making education
                resources accessible to all students.
              </p>
            </div>

            {/* Centered founder info with improved styling and image */}
            <div className="flex justify-center">
              <div className="text-center max-w-sm mx-auto bg-white p-8 rounded-lg shadow-sm transition-all hover:shadow-md">
                <div className="flex justify-center mb-6">
                  <Avatar className="w-32 h-32">
                    <AvatarImage src="/profile.jpeg" alt="Aakash Modi" />
                    <AvatarFallback className="text-3xl font-bold text-brand-700 bg-brand-50">AM</AvatarFallback>
                  </Avatar>
                </div>
                <h3 className="text-xl font-semibold mb-1">Aakash Modi</h3>
                <p className="text-brand-600 mb-3">Founder & CEO</p>
                <p className="text-gray-600">
                I'm a Computer Science student with a strong passion for educational technology, innovative learning solutions, and creating tools that make learning more accessible and engaging. I enjoy blending my technical skills with creativity to develop applications that solve real-world problems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Have questions or suggestions? We'd love to hear from you! Reach out
                to our team using any of the methods below.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-12 h-12 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-600">work.aakash.modi@gmail.com</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-12 h-12 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-gray-600">+91 7811950838</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-12 h-12 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Address</h3>
                <p className="text-gray-600">KL Puram,<br />CTUAP</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <ContactFormDialog />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
