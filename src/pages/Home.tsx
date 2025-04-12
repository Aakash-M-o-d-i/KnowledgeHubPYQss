
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Search, BookOpenCheck, BookText, University, Calendar, Download, GraduationCap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubjectCard from "@/components/SubjectCard";
import StatisticsSection from "@/components/StatisticsSection";

// Import the subjects data from the Subjects page
const featuredSubjects = [
  {
    id: "bsc-ai",
    name: "B.Sc Artificial Intelligence",
    code: "BSC-AI",
    papersCount: 12,
    description: "Study of intelligent agents and computational models that can perform tasks that typically require human intelligence.",
    batches: ["2023-2026", "2024-2027"]
  },
  {
    id: "bsc-chem",
    name: "B.Sc Chemistry",
    code: "BSC-CHEM",
    papersCount: 12,
    description: "The scientific study of the properties and behavior of matter, covering organic, inorganic, physical and analytical chemistry.",
    batches: ["2023-2026", "2024-2027"]
  },
  {
    id: "bsc-botany",
    name: "B.Sc Botany",
    code: "BSC-BOT",
    papersCount: 12,
    description: "The scientific study of plants, including their physiology, structure, genetics, ecology, and classification.",
    batches: ["2023-2026", "2024-2027"]
  },
  {
    id: "bba",
    name: "BBA (Bachelor of Business Administration)",
    code: "BBA",
    papersCount: 20,
    description: "Study of business administration principles including management, marketing, finance, and organizational behavior.",
    batches: ["2023-2026", "2024-2027"]
  },
  {
    id: "bsc-geology",
    name: "B.Sc Geology",
    code: "BSC-GEO",
    papersCount: 12,
    description: "The study of the Earth, the materials of which it is made, the structure of those materials, and the processes acting upon them.",
    batches: ["2023-2026", "2024-2027"]
  },
];

const universities = [
  "CTUAP (Central Tribal University of Andhra Pradesh)",
];

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSubjects, setFilteredSubjects] = useState(featuredSubjects);
  const navigate = useNavigate();

  // Update filtered subjects when search query changes
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredSubjects(featuredSubjects);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = featuredSubjects.filter(subject => 
        subject.name.toLowerCase().includes(query) || 
        subject.code.toLowerCase().includes(query) || 
        subject.description.toLowerCase().includes(query)
      );
      setFilteredSubjects(filtered);
    }
  }, [searchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/subjects?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <section className="hero-pattern py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900">
              Access University Question Papers (PYQs) with Ease
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Download previous year question papers for better exam preparation.
              Organized by subjects, universities, years, and batches.
            </p>
            
            <form onSubmit={handleSearch} className="relative max-w-xl mx-auto mb-8">
              <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-500" />
              <Input
                type="search"
                placeholder="Search by subject, code, or university..."
                className="pl-10 py-6 text-base rounded-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button 
                type="submit" 
                className="absolute right-1.5 top-1.5 rounded-full"
              >
                Search
              </Button>
            </form>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/subjects">
                <Button size="lg" className="gap-2">
                  <BookOpen className="h-5 w-5" />
                  Browse Subjects
                </Button>
              </Link>
              {/* <Link to="/universities">
                <Button size="lg" variant="outline" className="gap-2">
                  <University className="h-5 w-5" />
                  Browse Universities
                </Button>
              </Link> */}
            </div>
          </div>
        </div>
      </section>

      {/* Replace static stats section with dynamic StatisticsSection */}
      <StatisticsSection />

      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2">Featured Subjects</h2>
              <p className="text-gray-600">Explore our popular categories of question papers</p>
            </div>
            <Link to="/subjects">
              <Button variant="link" className="text-brand-600 p-0 hover:text-brand-800">
                View All Subjects
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSubjects.length > 0 ? (
              filteredSubjects.map((subject) => (
                <SubjectCard
                  key={subject.id}
                  id={subject.id}
                  name={subject.name}
                  code={subject.code}
                  papersCount={subject.papersCount}
                  description={subject.description}
                />
              ))
            ) : (
              <div className="col-span-3 text-center py-12">
                <h3 className="text-xl font-semibold mb-2">No subjects match your search</h3>
                <p className="text-gray-600 mb-4">
                  Try a different search term or browse all subjects.
                </p>
                <Button onClick={() => setSearchQuery("")}>
                  Clear Search
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
            Browse By Categories
          </h2>

          <Tabs defaultValue="subjects" className="max-w-3xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="subjects" className="flex items-center gap-2">
                <BookOpenCheck className="h-4 w-4" />
                <span>Subjects</span>
              </TabsTrigger>
              <TabsTrigger value="batches" className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                <span>Batches</span>
              </TabsTrigger>
              <TabsTrigger value="universities" className="flex items-center gap-2">
                <University className="h-4 w-4" />
                <span>Universities</span>
              </TabsTrigger>
              <TabsTrigger value="examTypes" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Exam Types</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="subjects" className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {featuredSubjects.map((subject, i) => (
                  <Link key={i} to={`/subjects/${subject.id}`}>
                    <Card className="hover:shadow-md transition-all">
                      <CardContent className="p-4 flex items-center gap-3">
                        <BookText className="h-5 w-5 text-brand-600" />
                        <span className="font-medium">{subject.name}</span>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
              <div className="text-center">
                <Link to="/subjects">
                  <Button variant="outline" className="mt-4">View All Subjects</Button>
                </Link>
              </div>
            </TabsContent>

            <TabsContent value="batches" className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {["2023-2027 Batch", "2024-2028 Batch"].map((batch, i) => (
                  <Link key={i} to={`/subjects?batch=${batch}`}>
                    <Card className="hover:shadow-md transition-all">
                      <CardContent className="p-4 flex items-center gap-3">
                        <GraduationCap className="h-5 w-5 text-brand-600" />
                        <span className="font-medium">{batch}</span>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
              <div className="text-center">
                <Link to="/batches">
                  <Button variant="outline" className="mt-4">View All Batches</Button>
                </Link>
              </div>
            </TabsContent>

            <TabsContent value="universities" className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {universities.map((university, i) => (
                  <Link key={i} to={`/subjects?university=${encodeURIComponent(university)}`}>
                    <Card className="hover:shadow-md transition-all">
                      <CardContent className="p-4 flex items-center gap-3">
                        <University className="h-5 w-5 text-brand-600" />
                        <span className="font-medium">{university}</span>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
              <div className="text-center">
                <Link to="/universities">
                  <Button variant="outline" className="mt-4">View All Universities</Button>
                </Link>
              </div>
            </TabsContent>

            <TabsContent value="examTypes" className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { name: "Mid-Term 1", type: "mid1" },
                  { name: "Mid-Term 2", type: "mid2" },
                  { name: "Semester", type: "semester" }
                ].map((examType, i) => (
                  <Link key={i} to={`/subjects?examType=${examType.type}`}>
                    <Card className="hover:shadow-md transition-all">
                      <CardContent className="p-4 flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-brand-600" />
                        <span className="font-medium">{examType.name}</span>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
              <div className="text-center">
                <Link to="/exam-types">
                  <Button variant="outline" className="mt-4">View All Exam Types</Button>
                </Link>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-16 bg-brand-50">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center mx-auto">
                <Search className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Search</h3>
              <p className="text-gray-600">Find question papers by subject, university, batch, or exam year.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center mx-auto">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Browse</h3>
              <p className="text-gray-600">Explore our organized collection of previous year questions by batch.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center mx-auto">
                <Download className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Download</h3>
              <p className="text-gray-600">Get instant access to PDF files for your exam preparation.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
