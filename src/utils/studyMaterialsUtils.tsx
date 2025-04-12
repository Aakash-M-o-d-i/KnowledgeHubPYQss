
import React from "react";
import { StudyMaterial } from "@/data/studyMaterialsData";
import { FileText, Beaker, PencilRuler, BookText, BookOpen } from "lucide-react";

export const getSubjectIcon = (subject: string) => {
  switch(subject) {
    case "BSC-AI": return <FileText className="h-5 w-5 text-brand-600" />;
    case "BSC-CHEM": return <Beaker className="h-5 w-5 text-brand-600" />;
    case "BSC-BOT": return <PencilRuler className="h-5 w-5 text-brand-600" />;
    default: return <BookText className="h-5 w-5 text-brand-600" />;
  }
};

export const getTypeIcon = (type: string) => {
  switch(type.toLowerCase()) {
    case "notes": return <BookOpen className="h-5 w-5 text-green-600" />;
    case "ebook": return <BookText className="h-5 w-5 text-blue-600" />;
    case "slides": return <FileText className="h-5 w-5 text-purple-600" />;
    case "formula sheet": return <FileText className="h-5 w-5 text-red-600" />;
    case "cheat sheet": return <FileText className="h-5 w-5 text-amber-600" />;
    default: return <FileText className="h-5 w-5 text-gray-600" />;
  }
};

export const getFilterOptions = (materials: StudyMaterial[]) => {
  const types = ["All", ...new Set(materials.map(material => material.type))];
  const subjects = ["All", ...new Set(materials.map(material => material.subject))];
  const semesters = ["All", ...new Set(materials.map(material => material.semester).filter(Boolean))]
  const years = ["All", ...new Set(materials.map(material => material.year))];

  return { types, subjects, semesters, years };
};

export const filterMaterials = (
  materials: StudyMaterial[],
  searchQuery: string,
  selectedType: string,
  selectedSubject: string,
  selectedSemester: string,
  selectedYear: string
) => {
  return materials.filter((material) => {
    const matchesSearch = 
      material.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      material.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesType = selectedType === "All" || material.type === selectedType;
    const matchesSubject = selectedSubject === "All" || material.subject === selectedSubject;
    const matchesSemester = selectedSemester === "All" || material.semester === selectedSemester;
    const matchesYear = selectedYear === "All" || material.year === selectedYear;
    
    return matchesSearch && matchesType && matchesSubject && matchesSemester && matchesYear;
  });
};

export const groupMaterialsBySubjectAndSemester = (
  materials: StudyMaterial[],
  subjects: string[],
  semesters: string[]
) => {
  return subjects
    .filter(subject => subject !== "All")
    .map(subject => ({
      subject,
      semesterGroups: semesters
        .filter(semester => semester !== "All")
        .map(semester => ({
          semester,
          materials: materials.filter(m => m.subject === subject && m.semester === semester)
        }))
        .filter(group => group.materials.length > 0)
    }));
};

export const groupMaterialsBySemester = (
  materials: StudyMaterial[],
  semesters: string[]
) => {
  return semesters
    .filter(semester => semester !== "All")
    .map(semester => ({
      semester,
      materials: materials.filter(m => m.semester === semester)
    }));
};

export const groupMaterialsByType = (
  materials: StudyMaterial[],
  types: string[]
) => {
  return types
    .filter(type => type !== "All")
    .map(type => ({
      type,
      materials: materials.filter(m => m.type === type)
    }));
};
