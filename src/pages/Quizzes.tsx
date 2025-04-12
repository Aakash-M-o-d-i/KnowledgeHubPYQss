
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Brain, SlidersHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Quiz data with semester information
const allQuizzes = [
  {
    id: "ai-fundamentals",
    title: "AI Fundamentals",
    subjectCode: "BSC-AI",
    description: "Test your knowledge of artificial intelligence basics, machine learning concepts and neural networks.",
    questionsCount: 10,
    difficulty: "Medium",
    category: "Science",
    semester: "Semester I"
  },
  {
    id: "organic-chemistry",
    title: "Organic Chemistry Basics",
    subjectCode: "BSC-CHEM",
    description: "Challenge yourself with questions on organic compounds, reactions, and mechanisms.",
    questionsCount: 10,
    difficulty: "Hard",
    category: "Science",
    semester: "Semester II"
  },
  {
    id: "plant-biology",
    title: "Plant Biology Quiz",
    subjectCode: "BSC-BOT",
    description: "Test your knowledge of plant anatomy, physiology, and taxonomy concepts.",
    questionsCount: 10,
    difficulty: "Medium",
    category: "Science",
    semester: "Semester I"
  },
  {
    id: "business-management",
    title: "Business Management Principles",
    subjectCode: "BBA",
    description: "Quiz on fundamental business management concepts, organizational behavior, and leadership.",
    questionsCount: 10,
    difficulty: "Easy",
    category: "Commerce",
    semester: "Semester II"
  },
  {
    id: "english-grammar",
    title: "English Communication & Comprehension",
    subjectCode: "ENG-COM",
    description: "Test your knowledge on communication, poetry, prose, intrapersonal skills and comprehension.",
    questionsCount: 10,
    difficulty: "Easy",
    category: "Common",
    semester: "Semester I"
  },
  {
    id: "geology",
    title: "Geology",
    subjectCode: "BSC-GEO",
    description: "Quiz on geological processes, earth structures, landforms, and the principles of physical geology.",
    questionsCount: 10,
    difficulty: "Easy",
    category: "Science",
    semester: "Semester II"
  },
  {
    id: "cpp-programming",
    title: "C++ Programming",
    subjectCode: "BSC-CPP",
    description: "Test your knowledge of C++ programming concepts, syntax, and problem-solving skills.",
    questionsCount: 15,
    difficulty: "Medium",
    category: "Science",
    semester: "Semester III"
  },
  {
    id: "database-systems",
    title: "Database Management Systems",
    subjectCode: "BSC-CS",
    description: "Quiz on database design, SQL queries, normalization, and transaction management.",
    questionsCount: 10,
    difficulty: "Hard",
    category: "Science",
    semester: "Semester III"
  },
  {
    id: "python-programming",
    title: "Python Programming",
    subjectCode: "BSC-PYTHON",
    description: "Test your knowledge of Python programming, data structures, and algorithms.",
    questionsCount: 10,
    difficulty: "Medium",
    category: "Science",
    semester: "Semester IV"
  }
];

const categories = ["All", "Science", "Commerce", "Common"];
const difficulties = ["All", "Easy", "Medium", "Hard"];
const semesters = ["All Semesters", "Semester I", "Semester II", "Semester III", "Semester IV"];

const Quizzes = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [selectedSemester, setSelectedSemester] = useState("All Semesters");

  // Filter quizzes based on search, category, difficulty, and semester
  const filteredQuizzes = allQuizzes.filter((quiz) => {
    const matchesSearch = quiz.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          quiz.subjectCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          quiz.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === "All" || quiz.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === "All" || quiz.difficulty === selectedDifficulty;
    const matchesSemester = selectedSemester === "All Semesters" || quiz.semester === selectedSemester;
    
    return matchesSearch && matchesCategory && matchesDifficulty && matchesSemester;
  });

  // Group quizzes by semester
  const semesterGroups = semesters.filter(sem => sem !== "All Semesters").map(semester => {
    return {
      semester,
      quizzes: allQuizzes.filter(quiz => quiz.semester === semester)
    };
  });

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSelectedDifficulty("All");
    setSelectedSemester("All Semesters");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <div className="container px-4 py-8 mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Interactive Quizzes</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Test your knowledge with our interactive quizzes on various subjects and topics.
            </p>
          </div>

          {/* Filters */}
          <div className="bg-background border border-input rounded-lg shadow-sm mb-8 p-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search quizzes..."
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

              {/* Difficulty Filter */}
              <div>
                <Select 
                  value={selectedDifficulty} 
                  onValueChange={(value) => setSelectedDifficulty(value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Difficulty" />
                  </SelectTrigger>
                  <SelectContent>
                    {difficulties.map((difficulty) => (
                      <SelectItem key={difficulty} value={difficulty}>
                        {difficulty}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Semester Filter */}
              <div>
                <Select 
                  value={selectedSemester} 
                  onValueChange={(value) => setSelectedSemester(value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Semester" />
                  </SelectTrigger>
                  <SelectContent>
                    {semesters.map((semester) => (
                      <SelectItem key={semester} value={semester}>
                        {semester}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Results count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-muted-foreground">
              Showing {filteredQuizzes.length} of {allQuizzes.length} quizzes
            </p>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={resetFilters}>
                Reset Filters
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <SlidersHorizontal className="h-4 w-4" />
                Advanced Filters
              </Button>
            </div>
          </div>

          {/* Two view options: Filtered view and Semester view */}
          <Tabs defaultValue="filtered" className="mb-6">
            <TabsList>
              <TabsTrigger value="filtered">Filtered View</TabsTrigger>
              <TabsTrigger value="semester">Semester View</TabsTrigger>
            </TabsList>

            {/* Filtered View */}
            <TabsContent value="filtered">
              {filteredQuizzes.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredQuizzes.map((quiz) => (
                    <QuizCard key={quiz.id} quiz={quiz} />
                  ))}
                </div>
              ) : (
                <NoQuizzesFound onReset={resetFilters} />
              )}
            </TabsContent>

            {/* Semester View */}
            <TabsContent value="semester">
              {semesterGroups.map((group) => (
                <div key={group.semester} className="mb-10">
                  <h2 className="text-xl font-bold mb-4 border-b pb-2">{group.semester}</h2>
                  {group.quizzes.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {group.quizzes.map((quiz) => (
                        <QuizCard key={quiz.id} quiz={quiz} />
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground py-4">No quizzes available for this semester.</p>
                  )}
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

const QuizCard = ({ quiz }: { quiz: typeof allQuizzes[0] }) => {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-brand-600" />
            <span>{quiz.title}</span>
          </div>
          <Badge 
            variant="secondary"
            className={`${
              quiz.difficulty === "Easy" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100" : 
              quiz.difficulty === "Medium" ? "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100" :
              "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"
            }`}
          >
            {quiz.difficulty}
          </Badge>
        </CardTitle>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>{quiz.subjectCode}</span>
          <span>•</span>
          <span>{quiz.questionsCount} Questions</span>
          <span>•</span>
          <span>{quiz.semester}</span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">{quiz.description}</p>
      </CardContent>
      <CardFooter>
        <Link to={`/quizzes/${quiz.id}`} className="w-full">
          <Button className="w-full">Start Quiz</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

const NoQuizzesFound = ({ onReset }: { onReset: () => void }) => {
  return (
    <div className="text-center py-12">
      <h3 className="text-xl font-semibold mb-2">No quizzes found</h3>
      <p className="text-muted-foreground mb-4">
        Try adjusting your search or filters to find what you're looking for.
      </p>
      <Button onClick={onReset}>
        Reset Filters
      </Button>
    </div>
  );
};

export default Quizzes;
