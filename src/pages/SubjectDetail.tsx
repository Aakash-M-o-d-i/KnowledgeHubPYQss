import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PaperCard from "@/components/PaperCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Calendar, Filter, Search, University, FileText } from "lucide-react";

// Extended sample data for subject details with exam types and added 2023/2025 papers
const subjectData = {
  "bsc-ai": {
    id: "bsc-ai",
    name: "B.Sc Artificial Intelligence",
    code: "BSC-AI",
    description: "Bachelor of Science in Artificial Intelligence covering machine learning, neural networks, and AI applications.",
    papers: [
      {
        id: "bsc-ai-2023-1-mid1",
        title: "Basics of computer science & Ms-Office Suite",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "BSC-AI",
        fileSize: "2.8 MB",
        downloadUrl: "/questions_papers/AI-Semester-I/Semester-I, Mid-term-1, AImajor.pdf",
        examType: "mid1",
      },
      {
        id: "bsc-ai-2023-1-mid2",
        title: "Basics of computer science & Ms-Office Suite",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "BSC-AI",
        fileSize: "3.2 MB",
        downloadUrl: "/questions_papers/AI-Semester-I/AI semester-I, Mid-term-II.pdf",
        examType: "mid2",
      },
      {
        id: "bsc-ai-2023-1-sem",
        title: "Basics of computer science & Ms-Office Suite Semester - I",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "BSC-AI",
        fileSize: "3.5 MB",
        downloadUrl: "/questions_papers/AI-Semester-I/AI End-semester_1.pdf",
        examType: "semester",
      },
      {
        id: "bsc-ai-2023-1-mid1",
        title: "Programming for problem solving using C",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "BSC-AI",
        fileSize: "2.6 MB",
        downloadUrl: "/questions_papers/AI-Semester-II/AI Semester-II Mid-1.pdf",
        examType: "mid1",
      },
      {
        id: "bsc-ai-2023-2-mid2",
        title: "Programming for problem solving using C",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "BSC-AI",
        fileSize: "2.4 MB",
        downloadUrl: "/questions_papers/AI-Minor-Semester-II/semester -II Mid-2.pdf", // i don't have this paper
        examType: "mid2",
      },
      {
        id: "bsc-ai-2023-2-sem",
        title: "Programming for problem solving using C Semester - II",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "BSC-AI",
        fileSize: "2.9 MB",
        downloadUrl: "/questions_papers/AI-Semester-II/End-semester-II.pdf",
        examType: "semester",
      },
      // Semester-III
      {
        id: "bsc-ai-2023-1-mid1",
        title: "Object oriented Programming using C++",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "BSC-AI",
        fileSize: "2.4 MB",
        downloadUrl: "/questions_papers/AI-Semester-III/",
        examType: "mid1",
      },
      {
        id: "bsc-ai-2023-1-mid2",
        title: "Object oriented Programming using C++",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "BSC-AI",
        fileSize: "2.4 MB",
        downloadUrl: "/questions_papers/AI-Semester-III/C++-mid2-semester-iii.pdf",
        examType: "mid2",
      },
      {
        id: "bsc-ai-2023-1-sem",
        title: "Object oriented Programming using C++ - Semester - III",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "BSC-AI",
        fileSize: "2.4 MB",
        downloadUrl: "/questions_papers/AI-Semester-III/C++-end-semester-iii.pdf",
        examType: "semester",
      },
      // Semester-IV
      {
        id: "bsc-ai-2023-1-mid1",
        title: "Introduction to Artificial Intelligence",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "BSC-AI",
        fileSize: "2.4 MB",
        downloadUrl: "/questions_papers/AI-Semester-IV/",
        examType: "mid1",
      },
      {
        id: "bsc-ai-2023-1-mid2",
        title: "Introduction to Artificial Intelligence",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "BSC-AI",
        fileSize: "2.1 MB",
        downloadUrl: "/questions_papers/AI-Semester-IV/AI-mid2-semester-IV.pdf",
        examType: "mid2",
      },
      {
        id: "bsc-ai-2023-1-semester",
        title: "Introduction to Artificial Intelligence Semester - IV",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "BSC-AI",
        fileSize: "2.1 MB",
        downloadUrl: "/questions_papers/AI-Semester-IV/AI-mid2-semester-IV.pdf",
        examType: "semester",
      },
    ],
  },

  // DBMS
  "dbms": {
    id: "Database Management Systems",
    name: "Database Management Systems",
    code: "DBMS",
    description: "Overview of database concepts, data modeling, SQL and NoSQL databases, transaction management, and database security for efficient data storage and retrieval.",
    papers: [
      {
        id: "dbms-2023-1-mid1",
        title: "Database Management Systems",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "DBMS",
        fileSize: "1.8 MB",
        downloadUrl: "/questions_papers/AI-Semester-III/",
        examType: "mid1",
      },
      {
        id: "dbms-2023-1-mid2",
        title: "Database Management Systems",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "DBMS",
        fileSize: "1.67 MB",
        downloadUrl: "/questions_papers/AI-Semester-III/Database-Management-Systems-mid2-semester-iii.pdf",
        examType: "mid2",
      },
      {
        id: "dbms-2023-1-semm",
        title: "Database Management Systems - Semester - III",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "DBMS",
        fileSize: "1.67 MB",
        downloadUrl: "/questions_papers/AI-Semester-III/Database-Management-Systems-end-semester-iii.pdf",
        examType: "semester",
      },
    ],
  },
  // Python
  "python": {
    id: "python",
    name: "PYHTON",
    code: "PY",
    description: "Overview of Python programming, syntax and data structures, scripting for automation, and its use in data analysis and scientific research.",
    papers: [
      {
        id: "python-2023-1-mid1",
        title: "Python Programming",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "PY",
        fileSize: "1.8 MB",
        downloadUrl: "/questions_papers/AI-Semester-IV/",
        examType: "mid1",
      },
      {
        id: "python-2023-1-mid2",
        title: "Python Programming",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "PY",
        fileSize: "1.7 MB",
        downloadUrl: "/questions_papers/AI-Semester-IV/Python-mid2-semester-IV.pdf",
        examType: "mid2",
      },
      {
        id: "python-2023-1-sem",
        title: "Python Programming Semester - IV",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "PY",
        fileSize: "2.1 MB",
        downloadUrl: "/questions_papers/AI-Semester-IV/Python-mid2-semester-IV.pdf",
        examType: "semester",
      },
    ],
  },
  "bsc-chem": {
    id: "bsc-chem",
    name: "B.Sc Chemistry",
    code: "BSC-CHEM",
    description: "Bachelor of Science in Chemistry covering organic, inorganic, physical chemistry and lab techniques.",
    papers: [
      {
        id: "bsc-chem-2023-1-mid1",
        title: "Inorganic Chemistry",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "BSC-CHEM",
        fileSize: "2.0 MB",
        downloadUrl: "/questions_papers/Chem-Semester-I/Chemistry Mid-1 semester-1.pdf",
        examType: "mid1",
      },
      {
        // Batch 24 
        id: "bsc-chem-2023-1-mid1",
        title: "Inorganic Chemistry",
        university: "CTUAP",
        year: "2024",
        semester: "Batch",
        subjectCode: "BSC-CHEM",
        fileSize: "2.0 MB",
        downloadUrl: "/questions_papers/Chem-Semester-I/Chemistry Mid-1 semester-1-Batch-24.pdf",
        examType: "mid1",
      },
      {
        id: "bsc-chem-2023-1-mid2",
        title: "Inorganic Chemistry",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "BSC-CHEM",
        fileSize: "2.2 MB",
        downloadUrl: "/questions_papers/Chem-Semester-I/Chemistry Mid-2 semester-1.pdf",
        examType: "mid2",
      },
      {
        id: "bsc-chem-2023-1-sem",
        title: "Inorganic Chemistry Semester-I",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "BSC-CHEM",
        fileSize: "1.9 MB",
        downloadUrl: "/questions_papers/Chem-Semester-I/Chemistry End-semester-1.pdf",
        examType: "semester",
      },
      {
        id: "bsc-chem-2023-1-mid1",
        title: "Organic Chemistry",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "BSC-CHEM",
        fileSize: "1.9 MB",
        downloadUrl: "/questions_papers/Chem-Semester-II/chemistry Mid-1 semester-2.pdf",
        examType: "mid1",
      },
      {
        id: "bsc-chem-2023-1-mid2",
        title: "Organic Chemistry Not Available",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "BSC-CHEM",
        fileSize: "1.7 MB",
        downloadUrl: "/questions_papers/Chem-Semester-I/Chemistry Mid-2 semester-1.pdf",
        examType: "mid2",
      },
      {
        id: "bsc-chem-2023-1-sem",
        title: "Organic Chemistry Semester-I",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "BSC-CHEM",
        fileSize: "1.9 MB",
        downloadUrl: "/questions_papers/Chem-Semester-I/chemistry Semester-2.pdf",
        examType: "semester",
      },
      {
        id: "bsc-chem-2023-1-mid1",
        title: "Physical Chemistry - semester - III",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "BSC-CHEM",
        fileSize: "2.0 MB",
        downloadUrl: "/questions_papers/Chem-Semester-II/Physical Chemistry-mid1-semester-iii.pdf",
        examType: "mid1",
      },
    ],
  },
  "bsc-botany": {
    id: "bsc-botany",
    name: "B.Sc Botany",
    code: "BSC-BOT",
    description: "Bachelor of Science in Botany covering plant biology, taxonomy, physiology, and ecology.",
    papers: [
      {
        id: "bsc-botany-2023-1-mid1",
        title: "Biodiversity",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "BSC-BOT",
        fileSize: "1.8 MB",
        downloadUrl: "/questions_papers/Botany-Semester-I/Botany, Semester-I Mid -1.pdf",
        examType: "mid1",
      },
      {
        id: "bsc-botany-2023-1-mid2",
        title: "Biodiversity",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "BSC-BOT",
        fileSize: "1.7 MB",
        downloadUrl: "/questions_papers/Botany-Semester-I/Botany, Semester-I Mid -2.pdf",
        examType: "mid2",
      },
      {
        id: "bsc-botany-2023-1-mid1",
        title: "Biodiversity Semester-I",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "BSC-BOT",
        fileSize: "1.6 MB",
        downloadUrl: "/questions_papers/Botany-Semester-I/Botany End-Semester.pdf",
        examType: "semester",
      },
      {
        id: "bsc-botany-2023-1-mid1",
        title: "Plant Morphology & Anatomy - Not available",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "BSC-BOT",
        fileSize: "1.8 MB",
        downloadUrl: "/questions_papers/Botany-Semester-I/Botany, Semester-I Mid -1.pdf",
        examType: "mid1",
      },
      {
        id: "bsc-botany-2023-1-mid2",
        title: "Plant Morphology & Anatomy",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "BSC-BOT",
        fileSize: "1.4 MB",
        downloadUrl: "/questions_papers/Botany-Semester-II/Botany, Semester-II Mid -2.pdf",
        examType: "mid2",
      },
      {
        id: "bsc-botany-2023-1-sem",
        title: "Plant Morphology & Anatomy Semester-II",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "BSC-BOT",
        fileSize: "2.1 MB",
        downloadUrl: "/questions_papers/Botany-Semester-II/Botany End-Semester.pdf",
        examType: "semester",
      },
    ],
  },
  // Geology
  "bsc-geology": {
    id: "bsc-geology",
    name: "B.Sc Geology",
    code: "BSC-GEO",
    description: "Bachelor of Science in Botany covering plant biology, taxonomy, physiology, and ecology.",
    papers: [
      {
        id: "bsc-geology-2023-1-mid1",
        title: "Physical Geology & Geodynamics",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "BSC-GEO",
        fileSize: "1.8 MB",
        downloadUrl: "/questions_papers/Geo-Semester-I/Geology Mid-I Semester-I.pdf",
        examType: "mid1",
      },
      {
        id: "bsc-geology-2023-1-mid2",
        title: "Physical Geology & Geodynamics",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "BSC-GEO",
        fileSize: "1.7 MB",
        downloadUrl: "/questions_papers/Geo-Semester-I/Geology Mid-II Semester-I.pdf",
        examType: "mid2",
      },
      {
        id: "bsc-geology-2023-1-sem",
        title: "Physical Geology & Geodynamics Semester - I",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "BSC-GEO",
        fileSize: "1.7 MB",
        downloadUrl: "/questions_papers/Geo-Semester-I/Geology Semester-I.pdf",
        examType: "semester",
      },
      {
        id: "bsc-geology-2023-1-mid1",
        title: "Crystrallography & Mineralogy - Not available",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "BSC-GEO",
        fileSize: "1.8 MB",
        downloadUrl: "/questions_papers/Geo-Semester-I/Geology Mid-I Semester-I.pdf",
        examType: "mid1",
      },
      {
        id: "bsc-geology-2023-1-mid2",
        title: "Crystrallography & Mineralogy",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "BSC-GEO",
        fileSize: "1.8 MB",
        downloadUrl: "/questions_papers/Geo-Semester-II/Geology Mid-II Semester-II.pdf",
        examType: "mid2",
      },
      {
        id: "bsc-geology-2023-1-sem",
        title: "Crystrallography & Mineralogy - Semester - II",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "BSC-GEO",
        fileSize: "1.8 MB",
        downloadUrl: "/questions_papers/Geo-Semester-II/Geology End-Semester-II.pdf",
        examType: "semester",
      },
    ],
  },

  "lm": {
    id: "lm",
    name: "Leadership and Management Skills",
    code: "LM",
    description: "Core principles of leadership, team management, decision-making, communication, and strategic planning for effective organizational growth.",
    papers: [
      {
        id: "lm-2023-1-mid1",
        title: "Leadership and Management Skills",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "LM",
        fileSize: "1.99 MB",
        downloadUrl: "/questions_papers/Leadership and Management Skills/",
        examType: "mid1",
      },
      {
        id: "lm-2023-1-mid2",
        title: "Leadership and Management Skills",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "LM",
        fileSize: "1.99 MB",
        downloadUrl: "/questions_papers/Leadership and Management Skills/",
        examType: "mid2",
      },
      {
        id: "lm-2023-1-sem",
        title: "Leadership and Management Skills",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "LM",
        fileSize: "1.99 MB",
        downloadUrl: "/questions_papers/Leadership and Management Skills/Leadership-Management-Skills-end-semester-iii.pdf",
        examType: "semester",
      },
    ],
  },
  "dpt": {
      id: "dpt",
      name: "Desktop Publishing",
      code: "DTP",
      description: "Design, layout, typography, and image editing using software for creating professional print and digital media.",
      papers: [
        {
          id: "dtp-2023-1-mid1",
          title: "Desktop Publishing",
          university: "CTUAP",
          year: "2023",
          semester: "Batch",
          subjectCode: "DTP",
          fileSize: "1.89 MB",
          downloadUrl: "/questions_papers/Desktop Publishing/Desktop-Publishing-mid1-semester-iii.pdf",
          examType: "mid1",
        },
        {
          id: "dtp-2023-1-mid2",
          title: "Desktop Publishing",
          university: "CTUAP",
          year: "2023",
          semester: "Batch",
          subjectCode: "DTP",
          fileSize: "2 MB",
          downloadUrl: "/questions_papers/Desktop Publishing/Desktop-Publishing-mid2-semester-iii.pdf",
          examType: "mid2",
        },
        {
          id: "dtp-2023-1-sem",
          title: "Desktop Publishing",
          university: "CTUAP",
          year: "2023",
          semester: "Batch",
          subjectCode: "DTP",
          fileSize: "1.3 MB",
          downloadUrl: "/questions_papers/Desktop Publishing/Desktop-Publishing-mid1-semester-iii.pdf",
          examType: "semester",
        },
      ],
    },
    // Mineral Resources
    "mr": {
      id: "mr",
      name: "Mineral Resources of India",
      code: "MR",
      description: "Types, extraction methods, economic significance, sustainable mining, and environmental impact of mineral utilization.",
      papers: [
        {
          id: "mr-2023-1-mid1",
          title: "Mineral Resources of India",
          university: "CTUAP",
          year: "2023",
          semester: "Batch",
          subjectCode: "MR",
          fileSize: "1.1 MB",
          downloadUrl: "/questions_papers/questions_papers/Mineral Resources/",
          examType: "mid1",
        },
        {
          id: "mr-2023-1-mid2",
          title: "Mineral Resources of India",
          university: "CTUAP",
          year: "2023",
          semester: "Batch",
          subjectCode: "MR",
          fileSize: "1.6 MB",
          downloadUrl: "/questions_papers/questions_papers/Mineral Resources/Mineral Resources-mid2-semester-iii.pdf",
          examType: "mid2",
        },
        {
          id: "mr-2023-1-semester",
          title: "Mineral Resources of India",
          university: "CTUAP",
          year: "2023",
          semester: "Batch",
          subjectCode: "MR",
          fileSize: "1.6 MB",
          downloadUrl: "/questions_papers/questions_papers/Mineral Resources/Mineral Resources-end-semester-iii.pdf",
          examType: "semester",
        },
      ],
    },

    // Renewable Energy
    "re": {
      id: "re",
      name: "Introduction to Renewable Energy",
      code: "RE",
      description: "Overview of renewable energy sources, technologies, benefits, and their role in sustainable development and reducing environmental impact.",
      papers: [
        {
          id: "re-2023-1-mid1",
          title: "Introduction to Renewable Energy",
          university: "CTUAP",
          year: "2023",
          semester: "Batch",
          subjectCode: "RE",
          fileSize: "1.1 MB",
          downloadUrl: "/questions_papers/questions_papers/Renewable Energy/Renewable Energy-mid1-semester-iii.pdf",
          examType: "mid1",
        },
        {
          id: "re-2023-1-mid2",
          title: "Introduction to Renewable Energy",
          university: "CTUAP",
          year: "2023",
          semester: "Batch",
          subjectCode: "RE",
          fileSize: "0.98 MB",
          downloadUrl: "/questions_papers/questions_papers/Renewable Energy/Renewable Energy-mid2-semester-iii.pdf",
          examType: "mid2",
        },
        {
          id: "re-2023-1-sem",
          title: "Introduction to Renewable Energy",
          university: "CTUAP",
          year: "2023",
          semester: "Batch",
          subjectCode: "RE",
          fileSize: "2.98 MB",
          downloadUrl: "/questions_papers/questions_papers/Renewable Energy/",
          examType: "semester",
        },
      ],
    },
    // bba
    "bba": {
      id: "bba",
      name: "BBA",
      code: "BBA",
      description: "Bachelor of Science in Botany covering plant biology, taxonomy, physiology, and ecology.",
      papers: [
        {
          id: "bba-2023-1-mid1",
          title: "Basic of Accounting - As a Minor",
          university: "CTUAP",
          year: "2023",
          semester: "Batch",
          subjectCode: "BBA",
          fileSize: "1.8 MB",
          downloadUrl: "/questions_papers/AI-Minor-Semester-II/AI-Minor-Semester-II Mid-1.pdf",
          examType: "mid1",
        },
        {
          id: "bba-2023-1-mid2",
          title: "Basic of Accounting - As a Minor",
          university: "CTUAP",
          year: "2023",
          semester: "Batch",
          subjectCode: "BBA",
          fileSize: "1.9 MB",
          downloadUrl: "/questions_papers/AI-Minor-Semester-II/semester -II Mid-2.pdf",
          examType: "mid2",
        },
        {
          id: "bba-2023-1-sem",
          title: "Basic of Accounting - As a Minor",
          university: "CTUAP",
          year: "2023",
          semester: "Batch",
          subjectCode: "BBA",
          fileSize: "2.1 MB",
          downloadUrl: "/questions_papers/AI-Minor-Semester-II/End-semester-II.pdf",
          examType: "semester",
        },
        // 
        {
          id: "bba-2023-1-mid1",
          title: "MARKETING MANAGEMENT - As a Minor",
          university: "CTUAP",
          year: "2023",
          semester: "Batch",
          subjectCode: "BBA",
          fileSize: "1.1 MB",
          downloadUrl: "/questions_papers/AI-Minor-Semester-II/Market-Management-mid1-semester-iii.pdf",
          examType: "mid1",
        },
        {
          id: "bba-2023-1-mid2",
          title: "MARKETING MANAGEMENT - As a Minor",
          university: "CTUAP",
          year: "2023",
          semester: "Batch",
          subjectCode: "BBA",
          fileSize: "1.99 MB",
          downloadUrl: "/questions_papers/AI-Minor-Semester-II/Market-Management-mid2-semester-iii.pdf",
          examType: "mid2",
        },
        {
          id: "bba-2023-1-sem",
          title: "MARKETING MANAGEMENT - As a Minor - Semester - III",
          university: "CTUAP",
          year: "2023",
          semester: "Batch",
          subjectCode: "BBA",
          fileSize: "2.1 MB",
          downloadUrl: "/questions_papers/AI-Minor-Semester-II/Market-Management-end-semester-iii.pdf",
          examType: "semester",
        },
      ],
    },
  // Common subjects
  "common-english": {
    id: "common-english",
    name: "English Communication",
    code: "ENG-COM",
    description: "Core English communication course focusing on language skills, comprehension, and effective writing for all departments.",
    papers: [
      {
        id: "common-eng-2023-1-mid1",
        title: "English Communication - I Grammar and Usage",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "ENG-COM",
        fileSize: "1.5 MB",
        downloadUrl: "/questions_papers/Common-Subjest-Semester-I/english/Semester-I, Mid-term-I.pdf",
        examType: "mid1",
      },
      {
        // Batch - 24
        id: "common-eng-2023-1-mid1",
        title: "English Communication - I Grammar and Usage",
        university: "CTUAP",
        year: "2024",
        semester: "Batch",
        subjectCode: "ENG-COM",
        fileSize: "1.3 MB",
        downloadUrl: "/questions_papers/Common-Subjest-Semester-I/english/Semester-I, Mid-term-I-Batch-24.pdf",
        examType: "mid1",
      },
      {
        id: "common-eng-2023-1-mid2",
        title: "English Communication - I Business Communication",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "ENG-COM",
        fileSize: "1.6 MB",
        downloadUrl: "/questions_papers/Common-Subjest-Semester-I/english/semester-I, Mid-term-II.pdf",
        examType: "mid2",
      },
      {
        id: "common-eng-2023-1-sem",
        title: "English Communication - I Literature Appreciation",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "ENG-COM",
        fileSize: "1.8 MB",
        downloadUrl: "/questions_papers/Common-Subjest-Semester-I/english/End-semester_.pdf",
        examType: "semester",
      },
      // semester - III
      {
        id: "common-eng-2023-1-mid1",
        title: "English Communication - II",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "ENG-COM",
        fileSize: "1.8 MB",
        downloadUrl: "/questions_papers/Common-Subjest-Semester-I/english/",
        examType: "mid1",
      },
      {
        id: "common-eng-2023-1-mid2",
        title: "English Communication - II",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "ENG-COM",
        fileSize: "1.56 MB",
        downloadUrl: "/questions_papers/Common-Subjest-Semester-I/english/English-mid2-semester-iii.pdf",
        examType: "mid2",
      },
      {
        id: "common-eng-2023-1-sem",
        title: "English Communication - II - semester - III",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "ENG-COM",
        fileSize: "1.9 MB",
        downloadUrl: "/questions_papers/Common-Subjest-Semester-I/english/English-end-semester-iii.pdf",
        examType: "semester",
      },
    ],
  },
  "common-vaqa": {
    id: "common-vaqa",
    name: "Value and Quality Aptitude",
    code: "VAQA",
    description: "Foundation course on ethical values, critical thinking and quality assessment methodologies.",
    papers: [
      {
        id: "common-vaqa-2023-1-mid1",
        title: "Ethical Decision Making",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "VAQA",
        fileSize: "1.4 MB",
        downloadUrl: "/questions_papers/Common-Subjest-Semester-I/VAQA/Semester-I, Mid-term-I.pdf",
        examType: "mid1",
      },
      {
        // Batch - 24
        id: "common-vaqa-2023-1-mid1",
        title: "Ethical Decision Making",
        university: "CTUAP",
        year: "2024",
        semester: "Batch",
        subjectCode: "VAQA",
        fileSize: "1.4 MB",
        downloadUrl: "/questions_papers/Common-Subjest-Semester-I/VAQA/Semester-I, Mid-term-I-Batch-24.pdf",
        examType: "mid1",
      },
      {
        id: "common-vaqa-2023-1-mid2",
        title: "Quality Management Systems",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "VAQA",
        fileSize: "1.6 MB",
        downloadUrl: "/questions_papers/Common-Subjest-Semester-I/VAQA/semester-I, Mid-term-II.pdf",
        examType: "mid2",
      },
      {
        id: "common-vaqa-2023-1-sem",
        title: "Professional Ethics",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "VAQA",
        fileSize: "1.7 MB",
        downloadUrl: "/questions_papers/Common-Subjest-Semester-I/VAQA/End-semester_1.pdf",
        examType: "semester",
      },
    ],
  },
  "common-constitution": {
    id: "common-constitution",
    name: "Constitution of India",
    code: "CONST",
    description: "Study of Indian Constitution, fundamental rights, directive principles and constitutional amendments.",
    papers: [
      {
        id: "common-const-2023-1-mid1",
        title: "Fundamental Rights",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "CONST",
        fileSize: "1.5 MB",
        downloadUrl: "/questions_papers/Common-Subjest-Semester-I/constitution/Semester-I Mid-I.pdf",
        examType: "mid1",
      },
      {
        // Batch - 24
        id: "common-const-2023-1-mid1",
        title: "Fundamental Rights - 24",
        university: "CTUAP",
        year: "2024",
        semester: "Batch",
        subjectCode: "CONST",
        fileSize: "1.5 MB",
        downloadUrl: "/questions_papers/Common-Subjest-Semester-I/constitution/Semester-I Mid-I-Batch-24.pdf",
        examType: "mid1",
      },
      {
        id: "common-const-2023-1-mid2",
        title: "Constitutional Amendments",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "CONST",
        fileSize: "1.6 MB",
        downloadUrl: "/questions_papers/Common-Subjest-Semester-I/constitution/Semester-I Mid-II.pdf",
        examType: "mid2",
      },
      {
        id: "common-const-2023-1-sem",
        title: "Directive Principles",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "CONST",
        fileSize: "1.8 MB",
        downloadUrl: "/questions_papers/Common-Subjest-Semester-I/constitution/End-semester_1.pdf",
        examType: "semester",
      },
    ],
  },
  // Emotional Intelligence
  "common-ei": {
    id: "common-Emotional Intelligence",
    name: "Emotional Intelligence",
    code: "EMOT",
    description: "Study of emotional awareness, empathy, social skills and emotional regulation techniques.",
    papers: [
      {
        id: "common-emo-2023-1-mid1",
        title: "Emotional Intelligence",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "EMOT",
        fileSize: "1.5 MB",
        downloadUrl: "/questions_papers/Common-Subjest-Semester-II/Emotional_Development/EI Semester-II Mid-1 Common.pdf",
        examType: "mid1",
      },
      {
        id: "common-emo-2023-1-mid2",
        title: "Emotional Intelligence",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "EMOT",
        fileSize: "1.5 MB",
        downloadUrl: "/questions_papers/Common-Subjest-Semester-II/semester -II Mid-2-7.pdf",
        examType: "mid2",
      },
      {
        id: "common-emo-2023-1-sem",
        title: "Emotional Intelligence",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "EMOT",
        fileSize: "1.5 MB",
        downloadUrl: "/questions_papers/Common-Subjest-Semester-II/End-semester-II.pdf",
        examType: "semester",
      },
    ],
  },
  
  // Global Tourism Geography semester 1
  "common-geography": {
    id: "common-Global-Tourism-Geography",
    name: "Global Tourism Geography",
    code: "GTG",
    description: "Introduction to physical geography, climate studies, and environmental conservation principles.",
    papers: [
      {
        id: "common-gtg-2023-1-mid1",
        title: "Global Tourism Geography",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "GTG",
        fileSize: "1.5 MB",
        downloadUrl: "/questions_papers/Common-Subjest-Semester-I/geography/Semester-I, Mid-term-I.pdf",
        examType: "mid1",
      },
      {
        id: "common-gtg-2023-1-mid2",
        title: "Global Tourism Geography",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "GTG",
        fileSize: "1.7 MB",
        downloadUrl: "/questions_papers/Common-Subjest-Semester-I/geography/semester-I, Mid-term-II.pdf",
        examType: "mid2",
      },
      {
        id: "common-gtg-2023-1-sem",
        title: "Global Tourism Geography",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "GTG",
        fileSize: "2 MB",
        downloadUrl: "/questions_papers/Common-Subjest-Semester-I/geography/End-semester_1.pdf",
        examType: "semester",
      },
    ],
  },

  // Environment Science semester 2

  "common-env": {
    id: "common-Environment-Science",
    name: "Environment Science",
    code: "EVS",
    description: "Fundamental course on ecosystems, biodiversity, pollution control and sustainable development.",
    papers: [
      {
        id: "common-evs-2023-1-mid1",
        title: "Environment Science",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "EVS",
        fileSize: "1.5 MB",
        downloadUrl: "/questions_papers/Common-Subjest-Semester-II/environmental_Science/Semester-II Mid-1.pdf",
        examType: "mid1",
      },
      {
        id: "common-evs-2023-1-mid2",
        title: "Environment Science",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "EVS",
        fileSize: "1.9 MB",
        downloadUrl: "/questions_papers/Common-Subjest-Semester-II/environmental_Science/semester -II Mid-2.pdf",
        examType: "mid2",
      },
      {
        id: "common-evs-2023-1-sem",
        title: "Environment Science",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "EVS",
        fileSize: "2.3 MB",
        downloadUrl: "/questions_papers/Common-Subjest-Semester-II/environmental_Science/End-semester-II.pdf",
        examType: "semester",
      },
    ],
  },

  // Hindi Communication
  "common-hindi": {
    id: "Hindi Communication",
    name: "Hindi Communication",
    code: "HIN",
    description: "Course on Hindi language proficiency, literature appreciation and effective communication.",
    papers: [
      {
        id: "common-hin-2023-1-mid1",
        title: "Hindi Communication",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "HIN",
        fileSize: "1.5 MB",
        downloadUrl: "/questions_papers/Common-Subjest-Semester-II/hindi/Mid-1 Semester-II.pdf",
        examType: "mid1",
      },
      {
        id: "common-hin-2023-1-mid2",
        title: "Hindi Communication",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "HIN",
        fileSize: "1.3 MB",
        downloadUrl: "/questions_papers/Common-Subjest-Semester-II/hindi/semester -II Mid-2.pdf",
        examType: "mid2",
      },
      {
        id: "common-hin-2023-1-semester",
        title: "Hindi Communication",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "HIN",
        fileSize: "1.8 MB",
        downloadUrl: "/questions_papers/Common-Subjest-Semester-II/hindi/End-semester-II.pdf",
        examType: "semester",
      },
      // Semester - Iv
      {
        id: "common-hin-2023-1-mid1",
        title: "Hindi Communication",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "HIN",
        fileSize: "1.5 MB",
        downloadUrl: "/questions_papers/Common-Subjest-Semester-II/hindi/Hindi-mid1-semester-IV.pdf",
        examType: "mid1",
      },
      {
        id: "common-hin-2023-1-mid2",
        title: "Hindi Communication",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "HIN",
        fileSize: "1.3 MB",
        downloadUrl: "/questions_papers/Common-Subjest-Semester-II/hindi/Hindi-mid2-semester-IV.pdf",
        examType: "mid2",
      },
      {
        id: "common-hin-2023-1-semester",
        title: "Hindi Communication - Semester - IV (Comming Soon...)",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "HIN",
        fileSize: "1.78 MB",
        downloadUrl: "/questions_papers/Common-Subjest-Semester-II/hindi/",
        examType: "semester",
      },
    ],
  },

  // Management Principles
  "common-management": {
    id: "Management Principles",
    name: "Management Principles",
    code: "MGT",
    description: "Introductory course on management concepts, organizational behavior and leadership skills.",
    papers: [
      {
        id: "common-mgt-2023-1-mid1",
        title: "Management Principles",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "MGT",
        fileSize: "1.5 MB",
        downloadUrl: "/questions_papers/Common-Subjest-Semester-I/management/Semester-I, Mid-term-I.pdf",
        examType: "mid1",
      },
      {
        id: "common-mgt-2023-1-mid2",
        title: "Management Principles",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "MGT",
        fileSize: "1.4 MB",
        downloadUrl: "/questions_papers/Common-Subjest-Semester-I/management/semester-I, Mid-term-II.pdf",
        examType: "mid2",
      },
      {
        id: "common-mgt-2023-1-sem",
        title: "Management Principles Not Available",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "MGT",
        fileSize: "1.4 MB",
        downloadUrl: "/questions_papers/Common-Subjest-Semester-I/management/",
        examType: "semester",
      },
    ],
  },

  //Personal Development
  "common-pd": {
    id: "Personal Development",
    name: "Personal Development",
    code: "PD",
    description: "Course focusing on self-improvement, soft skills, time management and career planning.",
    papers: [
      {
        id: "common-pd-2023-1-mid1",
        title: "Personal Development",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "PD",
        fileSize: "1.7 MB",
        downloadUrl: "/questions_papers/Common-Subjest-Semester-I/personal_Development/Semester-I, Mid-term-I.pdf",
        examType: "mid1",
      },
      {
        // Batch - 24
        id: "common-pd-2023-1-mid1",
        title: "Personal Development",
        university: "CTUAP",
        year: "2024",
        semester: "Batch",
        subjectCode: "PD",
        fileSize: "1.6 MB",
        downloadUrl: "/questions_papers/Common-Subjest-Semester-I/personal_Development/Semester-I, Mid-term-I-Batch-24.pdf",
        examType: "mid1",
      },
      {
        id: "common-pd-2023-1-mid2",
        title: "Personal Development",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "PD",
        fileSize: "1.7 MB",
        downloadUrl: "/questions_papers/Common-Subjest-Semester-I/personal_Development/semester-I, Mid-term-II.pdf",
        examType: "mid2",
      },
      {
        id: "common-pd-2023-1-semester",
        title: "Personal Development",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "PD",
        fileSize: "1.7 MB",
        downloadUrl: "/questions_papers/Common-Subjest-Semester-I/personal_Development/End-semester_1.pdf",
        examType: "semester",
      },
    ],
  },

  // Software Hardware & Networks
  "common-shn": {
    id: "Software Hardware & Networks",
    name: "Software Hardware & Networks",
    code: "SHN",
    description: "Introduction to computer systems, software applications, hardware components and networking basics.",
    papers: [
      {
        id: "common-shn-2023-1-mid1",
        title: "Software Hardware & Networks Not available",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "SHN",
        fileSize: "1.7 MB",
        downloadUrl: "/questions_papers/Common-Subjest-Semester-II/software_hardware_Network/",
        examType: "mid1",
      },
      {
        // Batch - 24
        id: "common-shn-2023-1-mid1",
        title: "Software Hardware & Networks Not available",
        university: "CTUAP",
        year: "2024",
        semester: "Batch",
        subjectCode: "SHN",
        fileSize: "1.7 MB",
        downloadUrl: "/questions_papers/Common-Subjest-Semester-II/software_hardware_Network/semester -II Mid-1-Batch-24.pdf",
        examType: "mid1",
      },
      {
        id: "common-shn-2023-1-mid2",
        title: "Software Hardware & Networks Not available",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "SHN",
        fileSize: "1.1 MB",
        downloadUrl: "/questions_papers/Common-Subjest-Semester-II/software_hardware_Network/semester -II Mid-2.pdf",
        examType: "mid2",
      },
      {
        id: "common-shn-2023-1-sem",
        title: "Software Hardware & Networks Not available",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "SHN",
        fileSize: "1.9 MB",
        downloadUrl: "/questions_papers/Common-Subjest-Semester-II/software_hardware_Network/End-semester-II.pdf",
        examType: "semester",
      },
    ],
  },

  // Tourism & Travel Management
  "common-ttm": {
    id: "Tourism & Travel Management",
    name: "Tourism & Travel Management",
    code: "TTM",
    description: "Overview of tourism industry, travel operations, hospitality management and sustainable tourism.",
    papers: [
      {
        id: "common-ttm-2023-1-mid1",
        title: "Tourism & Travel Management",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "TTM",
        fileSize: "1.7 MB",
        downloadUrl: "/questions_papers/Common-Subjest-Semester-II/ttm/TTM Semester-II Mid-1_1-4 Common.pdf",
        examType: "mid1",
      },
      {
        id: "common-ttm-2023-1-mid2",
        title: "Tourism & Travel Management",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "TTM",
        fileSize: "1.7 MB",
        downloadUrl: "/questions_papers/Common-Subjest-Semester-II/ttm/semester -II Mid-2.pdf",
        examType: "mid2",
      },
      {
        id: "common-ttm-2023-1-sem",
        title: "Tourism & Travel Management",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "TTM",
        fileSize: "2.1 MB",
        downloadUrl: "/questions_papers/Common-Subjest-Semester-II/ttm/End-semester-II.pdf",
        examType: "semester",
      },
    ],
  },

  // Tourism & Travel Management
  "glp": {
    id: "Good Laboratory Practice",
    name: "Good Laboratory Practice",
    code: "GLP",
    description: "Overview of Good Laboratory Practice (GLP), laboratory operations, quality assurance in lab management, and principles of sustainable and ethical scientific research.",
    papers: [
      {
        id: "glp-2023-1-mid1",
        title: "Good Laboratory Practice",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "GLP",
        fileSize: "1.7 MB",
        downloadUrl: "/questions_papers/AI-Semester-IV/AI-GLP-mid2-semester-IV.pdf",
        examType: "mid1",
      },
      {
        id: "glp-2023-1-mid2",
        title: "Good Laboratory Practice",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "GLP",
        fileSize: "1.1 MB",
        downloadUrl: "/questions_papers/AI-Semester-IV/AI-GLP-mid2-semester-IV.pdf",
        examType: "mid2",
      },
      {
        id: "glp-2023-1-semester",
        title: "Good Laboratory Practice",
        university: "CTUAP",
        year: "2023",
        semester: "Batch",
        subjectCode: "GLP",
        fileSize: "1.7 MB",
        downloadUrl: "/questions_papers/AI-Semester-IV/AI-GLP-mid2-semester-IV.pdf",
        examType: "semester",
      },
    ],
  },
  //
};

// For any subject that's not in our sample data
const defaultSubject = {
  id: "",
  name: "Subject Not Found",
  code: "",
  description: "The requested subject information could not be found.",
  papers: [],
};

const SubjectDetail = () => {
  const { id = "" } = useParams<{ id: string }>();
  const subject = subjectData[id as keyof typeof subjectData] || defaultSubject;

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedUniversity, setSelectedUniversity] = useState("All");
  const [selectedExamType, setSelectedExamType] = useState("All");

  // Get unique years, universities and exam types for filters - now including 2023 and 2025
  const years = ["All", ...new Set(subject.papers.map(paper => paper.year))];
  const universities = ["All", ...new Set(subject.papers.map(paper => paper.university))];
  const examTypes = ["All", "mid1", "mid2", "semester"];

  // Filter papers based on search, year, university, and exam type
  const filteredPapers = subject.papers.filter((paper) => {
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          paper.university.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesYear = selectedYear === "All" || paper.year === selectedYear;
    const matchesUniversity = selectedUniversity === "All" || paper.university === selectedUniversity;
    const matchesExamType = selectedExamType === "All" || paper.examType === selectedExamType;
    
    return matchesSearch && matchesYear && matchesUniversity && matchesExamType;
  });

  // Group papers by exam type
  const papersByExamType = {
    mid1: subject.papers.filter(paper => paper.examType === "mid1"),
    mid2: subject.papers.filter(paper => paper.examType === "mid2"),
    semester: subject.papers.filter(paper => paper.examType === "semester"),
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <div className="container px-4 py-8 mx-auto">
          {/* Subject Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="h-6 w-6 text-brand-600" />
              <h1 className="text-3xl font-bold">{subject.name}</h1>
            </div>
            <div className="flex items-center gap-2 text-gray-600 mb-4">
              <span className="bg-brand-50 text-brand-700 px-2 py-0.5 rounded text-sm font-medium">
                {subject.code}
              </span>
              <span>•</span>
              <span>{subject.papers.length} Papers</span>
            </div>
            <p className="text-gray-600 max-w-3xl">
              {subject.description}
            </p>
          </div>

          {/* Filter Section */}
          <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Search papers..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Year Filter */}
              <div>
                <Select 
                  value={selectedYear} 
                  onValueChange={(value) => setSelectedYear(value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Filter by Year" />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map((year) => (
                      <SelectItem key={year} value={year}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* University Filter */}
              <div>
                <Select 
                  value={selectedUniversity} 
                  onValueChange={(value) => setSelectedUniversity(value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Filter by University" />
                  </SelectTrigger>
                  <SelectContent>
                    {universities.map((university) => (
                      <SelectItem key={university} value={university}>
                        {university}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Exam Type Filter */}
              <div>
                <Select 
                  value={selectedExamType} 
                  onValueChange={(value) => setSelectedExamType(value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Filter by Exam Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {examTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type === "All" ? "All Exam Types" : 
                         type === "mid1" ? "Mid-Term 1" : 
                         type === "mid2" ? "Mid-Term 2" : "Semester"}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <Tabs defaultValue="all" className="mb-6">
            <TabsList>
              <TabsTrigger value="all" className="flex items-center gap-1">
                <Filter className="h-4 w-4" />
                <span>All Papers</span>
              </TabsTrigger>
              <TabsTrigger value="exam-type" className="flex items-center gap-1">
                <FileText className="h-4 w-4" />
                <span>By Exam Type</span>
              </TabsTrigger>
              <TabsTrigger value="year" className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>By Year</span>
              </TabsTrigger>
              <TabsTrigger value="university" className="flex items-center gap-1">
                <University className="h-4 w-4" />
                <span>By University</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="pt-4">
              {/* Results count */}
              <div className="mb-6">
                <p className="text-gray-600">
                  Showing {filteredPapers.length} of {subject.papers.length} papers
                </p>
              </div>

              {/* Papers Grid */}
              {filteredPapers.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPapers.map((paper) => (
                    <PaperCard
                      key={paper.id}
                      id={paper.id}
                      title={paper.title}
                      university={paper.university}
                      year={paper.year}
                      semester={paper.semester}
                      subjectCode={paper.subjectCode}
                      fileSize={paper.fileSize}
                      downloadUrl={paper.downloadUrl}
                      examType={paper.examType}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-semibold mb-2">No papers found</h3>
                  <p className="text-gray-600 mb-4">
                    Try adjusting your search or filters to find what you're looking for.
                  </p>
                  <Button 
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedYear("All");
                      setSelectedUniversity("All");
                      setSelectedExamType("All");
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="exam-type" className="pt-4">
              <div className="space-y-8">
                {/* Mid-Term 1 Papers */}
                {papersByExamType.mid1.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <FileText className="h-5 w-5 text-brand-600" />
                      Mid-Term 1 Papers
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {papersByExamType.mid1.map((paper) => (
                        <PaperCard
                          key={paper.id}
                          id={paper.id}
                          title={paper.title}
                          university={paper.university}
                          year={paper.year}
                          semester={paper.semester}
                          subjectCode={paper.subjectCode}
                          fileSize={paper.fileSize}
                          downloadUrl={paper.downloadUrl}
                          examType={paper.examType}
                        />
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Mid-Term 2 Papers */}
                {papersByExamType.mid2.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <FileText className="h-5 w-5 text-brand-600" />
                      Mid-Term 2 Papers
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {papersByExamType.mid2.map((paper) => (
                        <PaperCard
                          key={paper.id}
                          id={paper.id}
                          title={paper.title}
                          university={paper.university}
                          year={paper.year}
                          semester={paper.semester}
                          subjectCode={paper.subjectCode}
                          fileSize={paper.fileSize}
                          downloadUrl={paper.downloadUrl}
                          examType={paper.examType}
                        />
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Semester Papers */}
                {papersByExamType.semester.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <FileText className="h-5 w-5 text-brand-600" />
                      Semester Papers
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {papersByExamType.semester.map((paper) => (
                        <PaperCard
                          key={paper.id}
                          id={paper.id}
                          title={paper.title}
                          university={paper.university}
                          year={paper.year}
                          semester={paper.semester}
                          subjectCode={paper.subjectCode}
                          fileSize={paper.fileSize}
                          downloadUrl={paper.downloadUrl}
                          examType={paper.examType}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="year" className="pt-4">
              <div className="space-y-8">
                {years.filter(year => year !== "All").map((year) => {
                  const yearPapers = subject.papers.filter(paper => paper.year === year);
                  return (
                    <div key={year}>
                      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-brand-600" />
                        {year}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {yearPapers.map((paper) => (
                          <PaperCard
                            key={paper.id}
                            id={paper.id}
                            title={paper.title}
                            university={paper.university}
                            year={paper.year}
                            semester={paper.semester}
                            subjectCode={paper.subjectCode}
                            fileSize={paper.fileSize}
                            downloadUrl={paper.downloadUrl}
                            examType={paper.examType}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="university" className="pt-4">
              <div className="space-y-8">
                {universities.filter(uni => uni !== "All").map((uni) => {
                  const uniPapers = subject.papers.filter(paper => paper.university === uni);
                  return (
                    <div key={uni}>
                      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <University className="h-5 w-5 text-brand-600" />
                        {uni}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {uniPapers.map((paper) => (
                          <PaperCard
                            key={paper.id}
                            id={paper.id}
                            title={paper.title}
                            university={paper.university}
                            year={paper.year}
                            semester={paper.semester}
                            subjectCode={paper.subjectCode}
                            fileSize={paper.fileSize}
                            downloadUrl={paper.downloadUrl}
                            examType={paper.examType}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SubjectDetail;