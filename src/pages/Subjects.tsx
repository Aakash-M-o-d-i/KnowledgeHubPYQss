
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubjectCard from "@/components/SubjectCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Search, SlidersHorizontal } from "lucide-react";

// Updated subjects data including common subjects
const allSubjects = [
  {
    id: "bsc-ai",
    name: "B.Sc Artificial Intelligence",
    code: "BSC-AI",
    papersCount: 12,
    description: "Bachelor of Science in Artificial Intelligence covering machine learning, neural networks, and AI applications.",
    category: "Science"
  },
  {
    id: "bsc-chem",
    name: "B.Sc Chemistry",
    code: "BSC-CHEM",
    papersCount: 6,
    description: "Bachelor of Science in Chemistry covering organic, inorganic, physical chemistry and lab techniques.",
    category: "Science"
  },
  {
    id: "bsc-botany",
    name: "B.Sc Botany",
    code: "BSC-BOT",
    papersCount: 7,
    description: "Bachelor of Science in Botany covering plant biology, taxonomy, physiology, and ecology.",
    category: "Science"
  },
  {
    id: "bba",
    name: "BBA (Bachelor of Business Administration)",
    code: "BBA",
    papersCount: 3,
    description: "Bachelor of Business Administration covering management principles, marketing, finance, and organizational behavior.",
    category: "Commerce"
  },
  {
    id: "bsc-geology",
    name: "B.Sc Geology",
    code: "BSC-GEO",
    papersCount: 6,
    description: "Bachelor of Science in Geology covering earth sciences, mineralogy, petrology, and structural geology.",
    category: "Science"
  },
  // Common Subjects
  {
    id: "common-english",
    name: "English Communication",
    code: "ENG-COM",
    papersCount: 6,
    description: "Core English communication course focusing on language skills, comprehension, and effective writing for all departments.",
    category: "Common"
  },
  {
    id: "common-vaqa",
    name: "Value and Quality Aptitude",
    code: "VAQA",
    papersCount: 3,
    description: "Foundation course on ethical values, critical thinking and quality assessment methodologies.",
    category: "Common"
  },
  {
    id: "common-constitution",
    name: "Constitution of India",
    code: "CONST",
    papersCount: 4,
    description: "Study of Indian Constitution, fundamental rights, directive principles and constitutional amendments.",
    category: "Common"
  },
  {
    id: "common-geography",
    name: "Global Tourism Geography",
    code: "ENV-GEO",
    papersCount: 3,
    description: "Introduction to physical geography, climate studies, and environmental conservation principles.",
    category: "Common"
  },
  {
    id: "common-management",
    name: "Management Principles",
    code: "MGT",
    papersCount: 3,
    description: "Introductory course on management concepts, organizational behavior and leadership skills.",
    category: "Common"
  },
  {
    id: "common-pd",
    name: "Personal Development",
    code: "PD",
    papersCount: 3,
    description: "Course focusing on self-improvement, soft skills, time management and career planning.",
    category: "Common"
  },
  {
    id: "common-ei",
    name: "Emotional Intelligence",
    code: "EI",
    papersCount: 6,
    description: "Study of emotional awareness, empathy, social skills and emotional regulation techniques.",
    category: "Common"
  },
  {
    id: "common-env",
    name: "Environmental Science",
    code: "ENV-SCI",
    papersCount: 3,
    description: "Fundamental course on ecosystems, biodiversity, pollution control and sustainable development.",
    category: "Common"
  },
  {
    id: "common-hindi",
    name: "Hindi Communication",
    code: "HINDI",
    papersCount: 4,
    description: "Course on Hindi language proficiency, literature appreciation and effective communication.",
    category: "Common"
  },
  {
    id: "common-shn",
    name: "Software Hardware & Networks",
    code: "SHN",
    papersCount: 3,
    description: "Introduction to computer systems, software applications, hardware components and networking basics.",
    category: "Common"
  },
  {
    id: "common-ttm",
    name: "Tourism & Travel Management",
    code: "TTM",
    papersCount: 3,
    description: "Overview of tourism industry, travel operations, hospitality management and sustainable tourism.",
    category: "Common"
  },
  {
    id: "glp",
    name: "Good Laboratory Practice",
    code: "GLP",
    papersCount: 3,
    description: "Overview of Good Laboratory Practice (GLP), laboratory operations, quality assurance in lab management, and principles of sustainable and ethical scientific research.",
    category: "Science"
  },
  {
    id: "python",
    name: "Python - Semester - IV",
    code: "PY",
    papersCount: 3,
    description: "Overview of Python programming, syntax and data structures, scripting for automation, and its use in data analysis and scientific research.",
    category: "Science"
  },
  {
    id: "dbms",
    name: "Database Management Systems - Semester - III",
    code: "DBMS",
    papersCount: 3,
    description: "Overview of database concepts, data modeling, SQL and NoSQL databases, transaction management, and database security for efficient data storage and retrieval.",
    category: "Science"
  },
  {
    id: "dpt",
    name: "Desktop Publishing (DTP)",
    code: "DTP",
    papersCount: 3,
    description: "Design, layout, typography, and image editing using software for creating professional print and digital media.",
    category: "Science"
  },
  {
    id: "mr",
    name: "Mineral Resources",
    code: "MR",
    papersCount: 3,
    description: "Types, extraction methods, economic significance, sustainable mining, and environmental impact of mineral utilization.",
    category: "Science"
  },
  {
    id: "re",
    name: "Introduction to Renewable Energy",
    code: "RE",
    papersCount: 3,
    description: "Overview of renewable energy sources, technologies, benefits, and their role in sustainable development and reducing environmental impact.",
    category: "Science"
  },
  {
    id: "lm",
    name: "Leadership and Management Skills",
    code: "LM",
    papersCount: 3,
    description: "Core principles of leadership, team management, decision-making, communication, and strategic planning for effective organizational growth.",
    category: "Science"
  },
];

const categories = ["All", "Science", "Common", "Commerce"];

const Subjects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("name");
  const location = useLocation();

  useEffect(() => {
    // Check for search query in URL
    const params = new URLSearchParams(location.search);
    const searchParam = params.get("search");
    if (searchParam) {
      setSearchQuery(searchParam);
    }
  }, [location]);

  // Filter subjects based on search query and category
  const filteredSubjects = allSubjects.filter((subject) => {
    const matchesSearch = subject.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         subject.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         subject.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === "All" || subject.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Sort subjects based on sort option
  const sortedSubjects = [...filteredSubjects].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "papers") {
      return b.papersCount - a.papersCount;
    }
    return 0;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <div className="container px-4 py-8 mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Subjects</h1>
            <p className="text-gray-600">
              Browse all subjects or filter by category to find the question papers you need.
            </p>
          </div>

          {/* Filters */}
          <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Search subjects or departments..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Category Filter */}
              <div>
                <Select 
                  value={selectedCategory} 
                  onValueChange={(value) => setSelectedCategory(value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Sort */}
              <div>
                <Select 
                  value={sortBy} 
                  onValueChange={(value) => setSortBy(value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Sort By" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">Sort by Name</SelectItem>
                    <SelectItem value="papers">Sort by Papers Count</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Results count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-gray-600">
              Showing {sortedSubjects.length} of {allSubjects.length} subjects
            </p>
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <SlidersHorizontal className="h-4 w-4" />
              Advanced Filters
            </Button>
          </div>

          {/* Subjects Grid */}
          {sortedSubjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedSubjects.map((subject) => (
                <SubjectCard
                  key={subject.id}
                  id={subject.id}
                  name={subject.name}
                  code={subject.code}
                  papersCount={subject.papersCount}
                  description={subject.description}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No subjects found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search or filters to find what you're looking for.
              </p>
              <Button 
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Subjects;
