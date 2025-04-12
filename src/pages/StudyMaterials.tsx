
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Filter, School, FileText, Calendar, Download } from "lucide-react";

// Import data
import { studyMaterials } from "@/data/studyMaterialsData";

// Import utilities
import { 
  getFilterOptions, 
  filterMaterials,
  groupMaterialsBySubjectAndSemester,
  groupMaterialsBySemester,
  groupMaterialsByType
} from "@/utils/studyMaterialsUtils";

// Import components
import StudyMaterialsFilter from "@/components/study-materials/StudyMaterialsFilter";
import AllMaterialsTab from "@/components/study-materials/AllMaterialsTab";
import SubjectSemesterTab from "@/components/study-materials/SubjectSemesterTab";
import SemesterTab from "@/components/study-materials/SemesterTab";
import TypeTab from "@/components/study-materials/TypeTab";
import DownloadsTab from "@/components/study-materials/DownloadsTab";
import { useIsMobile } from "@/hooks/use-mobile";

const StudyMaterials = () => {
  // Extract filter options
  const { types, subjects, semesters, years } = getFilterOptions(studyMaterials);
  const isMobile = useIsMobile();
  
  // Filter state
  const [filters, setFilters] = useState({
    searchQuery: "",
    type: "All",
    subject: "All",
    semester: "All",
    year: "All"
  });

  // Apply filters
  const filteredMaterials = filterMaterials(
    studyMaterials,
    filters.searchQuery,
    filters.type,
    filters.subject,
    filters.semester,
    filters.year
  );

  // Group materials
  const materialsBySubjectAndSemester = groupMaterialsBySubjectAndSemester(
    studyMaterials, subjects, semesters
  );
  
  const materialsBySemester = groupMaterialsBySemester(
    studyMaterials, semesters
  );
  
  const materialsByType = groupMaterialsByType(
    studyMaterials, types
  );

  // Reset filters handler
  const resetFilters = () => {
    setFilters({
      searchQuery: "",
      type: "All",
      subject: "All",
      semester: "All",
      year: "All"
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <div className="container px-4 py-6 md:py-8 mx-auto">
          <div className="mb-6 md:mb-8">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="h-5 w-5 md:h-6 md:w-6 text-brand-600" />
              <h1 className="text-2xl md:text-3xl font-bold">Study Materials</h1>
            </div>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-3xl">
              Access a wide range of study materials including notes, eBooks, slide presentations, 
              formula sheets, and quick reference guides to help with your academic studies.
            </p>
          </div>

          <StudyMaterialsFilter
            types={types}
            subjects={subjects}
            semesters={semesters}
            years={years}
            onFilterChange={setFilters}
          />

          <Tabs defaultValue="all" className="mb-6">
            <TabsList className={`${isMobile ? "flex flex-wrap w-full overflow-x-auto" : ""}`}>
              <TabsTrigger value="all" className="flex items-center gap-1">
                <Filter className="h-4 w-4" />
                <span className="truncate">All Materials</span>
              </TabsTrigger>
              <TabsTrigger value="by-subject-semester" className="flex items-center gap-1">
                <School className="h-4 w-4" />
                <span className="truncate">By Subject & Semester</span>
              </TabsTrigger>
              <TabsTrigger value="by-semester" className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span className="truncate">By Semester</span>
              </TabsTrigger>
              <TabsTrigger value="by-type" className="flex items-center gap-1">
                <FileText className="h-4 w-4" />
                <span className="truncate">By Type</span>
              </TabsTrigger>
              <TabsTrigger value="downloads" className="flex items-center gap-1">
                <Download className="h-4 w-4" />
                <span className="truncate">Popular Downloads</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="pt-4">
              <AllMaterialsTab 
                filteredMaterials={filteredMaterials} 
                totalCount={studyMaterials.length}
                resetFilters={resetFilters}
              />
            </TabsContent>
            
            <TabsContent value="by-subject-semester" className="pt-4">
              <SubjectSemesterTab 
                materialsBySubjectAndSemester={materialsBySubjectAndSemester} 
              />
            </TabsContent>

            <TabsContent value="by-semester" className="pt-4">
              <SemesterTab 
                materialsBySemester={materialsBySemester} 
              />
            </TabsContent>

            <TabsContent value="by-type" className="pt-4">
              <TypeTab 
                materialsByType={materialsByType} 
              />
            </TabsContent>

            <TabsContent value="downloads" className="pt-4">
              <DownloadsTab 
                studyMaterials={studyMaterials} 
              />
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StudyMaterials;
