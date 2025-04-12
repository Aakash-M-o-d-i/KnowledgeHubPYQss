
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Search, Filter, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useIsMobile } from "@/hooks/use-mobile";

interface StudyMaterialsFilterProps {
  types: string[];
  subjects: string[];
  semesters: string[];
  years: string[];
  onFilterChange: (filters: {
    searchQuery: string;
    type: string;
    subject: string;
    semester: string;
    year: string;
  }) => void;
}

const StudyMaterialsFilter = ({ 
  types, 
  subjects, 
  semesters, 
  years, 
  onFilterChange 
}: StudyMaterialsFilterProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedSubject, setSelectedSubject] = useState("All");
  const [selectedSemester, setSelectedSemester] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");
  const [isOpen, setIsOpen] = useState(false);
  
  const isMobile = useIsMobile();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    updateFilters(query, selectedType, selectedSubject, selectedSemester, selectedYear);
  };

  const handleTypeChange = (value: string) => {
    setSelectedType(value);
    updateFilters(searchQuery, value, selectedSubject, selectedSemester, selectedYear);
  };

  const handleSubjectChange = (value: string) => {
    setSelectedSubject(value);
    updateFilters(searchQuery, selectedType, value, selectedSemester, selectedYear);
  };

  const handleSemesterChange = (value: string) => {
    setSelectedSemester(value);
    updateFilters(searchQuery, selectedType, selectedSubject, value, selectedYear);
  };

  const handleYearChange = (value: string) => {
    setSelectedYear(value);
    updateFilters(searchQuery, selectedType, selectedSubject, selectedSemester, value);
  };

  const updateFilters = (
    search: string, 
    type: string, 
    subject: string, 
    semester: string, 
    year: string
  ) => {
    onFilterChange({
      searchQuery: search,
      type,
      subject,
      semester,
      year
    });
  };

  const handleReset = () => {
    setSearchQuery("");
    setSelectedType("All");
    setSelectedSubject("All");
    setSelectedSemester("All");
    setSelectedYear("All");
    updateFilters("", "All", "All", "All", "All");
  };

  // Check if any filters are active
  const hasActiveFilters = 
    searchQuery !== "" || 
    selectedType !== "All" || 
    selectedSubject !== "All" || 
    selectedSemester !== "All" || 
    selectedYear !== "All";

  // Responsive filter component for mobile
  const renderMobileFilters = () => (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm mb-8 transition-colors duration-300">
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="space-y-4">
        <div className="flex flex-col space-y-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input
              type="search"
              placeholder="Search study materials..."
              className="pl-8 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
          
          <CollapsibleTrigger asChild>
            <Button 
              variant="outline" 
              className="flex justify-between items-center w-full dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
            >
              <div className="flex items-center">
                <Filter className="h-4 w-4 mr-2" />
                <span>Filter Options {hasActiveFilters && "(Active)"}</span>
              </div>
              {isOpen ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </Button>
          </CollapsibleTrigger>
        </div>
        
        <CollapsibleContent className="space-y-3">
          <Select 
            value={selectedSubject} 
            onValueChange={handleSubjectChange}
          >
            <SelectTrigger className="w-full dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100">
              <SelectValue placeholder="Subject" />
            </SelectTrigger>
            <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
              {subjects.map((subject) => (
                <SelectItem key={subject} value={subject}>
                  {subject}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select 
            value={selectedSemester} 
            onValueChange={handleSemesterChange}
          >
            <SelectTrigger className="w-full dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100">
              <SelectValue placeholder="Semester" />
            </SelectTrigger>
            <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
              {semesters.map((semester) => (
                <SelectItem key={semester} value={semester}>
                  {semester}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select 
            value={selectedType} 
            onValueChange={handleTypeChange}
          >
            <SelectTrigger className="w-full dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
              {types.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select 
            value={selectedYear} 
            onValueChange={handleYearChange}
          >
            <SelectTrigger className="w-full dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
              {years.map((year) => (
                <SelectItem key={year} value={year}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {hasActiveFilters && (
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleReset} 
              className="w-full dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
            >
              Reset Filters
            </Button>
          )}
        </CollapsibleContent>
      </Collapsible>
    </div>
  );

  // Desktop filter layout
  const renderDesktopFilters = () => (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm mb-8 transition-colors duration-300">
      <div className="flex flex-col space-y-4">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
          <Input
            type="search"
            placeholder="Search study materials..."
            className="pl-8 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>

        <div className="grid grid-cols-4 gap-4">
          <div>
            <Select 
              value={selectedSubject} 
              onValueChange={handleSubjectChange}
            >
              <SelectTrigger className="w-full dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100">
                <SelectValue placeholder="Filter by Subject" />
              </SelectTrigger>
              <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
                {subjects.map((subject) => (
                  <SelectItem key={subject} value={subject}>
                    {subject}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Select 
              value={selectedSemester} 
              onValueChange={handleSemesterChange}
            >
              <SelectTrigger className="w-full dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100">
                <SelectValue placeholder="Filter by Semester" />
              </SelectTrigger>
              <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
                {semesters.map((semester) => (
                  <SelectItem key={semester} value={semester}>
                    {semester}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Select 
              value={selectedType} 
              onValueChange={handleTypeChange}
            >
              <SelectTrigger className="w-full dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100">
                <SelectValue placeholder="Filter by Type" />
              </SelectTrigger>
              <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
                {types.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Select 
              value={selectedYear} 
              onValueChange={handleYearChange}
            >
              <SelectTrigger className="w-full dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100">
                <SelectValue placeholder="Filter by Year" />
              </SelectTrigger>
              <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
                {years.map((year) => (
                  <SelectItem key={year} value={year}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {hasActiveFilters && (
          <div className="flex justify-end">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleReset}
              className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );

  return isMobile ? renderMobileFilters() : renderDesktopFilters();
};

export default StudyMaterialsFilter;
