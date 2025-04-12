
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Quiz, { QuizQuestion } from "@/components/Quiz";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Sample quiz data with questions
const quizzesData: {
  [key: string]: {
    id: string;
    title: string;
    subjectCode: string;
    category: string;
    description: string;
    questions: QuizQuestion[];
  };
} = {
  "ai-fundamentals": {
    id: "ai-fundamentals",
    title: "AI Fundamentals",
    subjectCode: "BSC-AI",
    category: "Science",
    description: "Test your knowledge of artificial intelligence basics, machine learning concepts and neural networks.",
    questions: [
      {
        id: "cs-q1",
        question: "What is the difference between RAM and ROM?",
        options: [
          "RAM is volatile, ROM is non-volatile",
          "ROM is faster than RAM",
          "RAM stores firmware, ROM stores software",
          "None of the above"
        ],
        correctAnswer: 0
      },
      {
        id: "cs-q2",
        question: "What is a File Server?",
        options: [
          "A server that manages and stores files",
          "A server that executes application software",
          "A server that connects printers",
          "A server that handles network traffic"
        ],
        correctAnswer: 0
      },
      {
        id: "cs-q3",
        question: "What is the full form of LCD?",
        options: [
          "Liquid Control Display",
          "Light Crystal Display",
          "Liquid Crystal Display",
          "Light Color Display"
        ],
        correctAnswer: 2
      },
      {
        id: "cs-q4",
        question: "What does CLI stand for?",
        options: [
          "Central Line Interface",
          "Command Line Interface",
          "Control Line Interface",
          "Common Line Interface"
        ],
        correctAnswer: 1
      },
      {
        id: "cs-q5",
        question: "What is the purpose of translators in computing?",
        options: [
          "Convert low-level code to high-level code",
          "Convert high-level code to low-level code",
          "Translate spoken language to code",
          "Translate code into human-readable language"
        ],
        correctAnswer: 1
      },
      {
        id: "cs-q6",
        question: "Which of the following is an Input Device?",
        options: [
          "Monitor",
          "Keyboard",
          "Printer",
          "Hard Drive"
        ],
        correctAnswer: 1
      },
      {
        id: "cs-q7",
        question: "Which of the following is an Output Device?",
        options: [
          "Mouse",
          "Keyboard",
          "Monitor",
          "Scanner"
        ],
        correctAnswer: 2
      },
      {
        id: "cs-q8",
        question: "Which of the following is a type of printer?",
        options: [
          "Dot Matrix",
          "Laser",
          "Inkjet",
          "All of the above"
        ],
        correctAnswer: 3
      },
      {
        id: "cs-q9",
        question: "Multiprogramming allows:",
        options: [
          "Multiple tasks to run simultaneously by sharing CPU time",
          "Only one program to run at a time",
          "Execution of a single task faster",
          "None of the above"
        ],
        correctAnswer: 0
      },
      {
        id: "cs-q10",
        question: "Multitasking is:",
        options: [
          "Running multiple applications simultaneously",
          "Running a single application multiple times",
          "Dividing a task into multiple smaller tasks",
          "Running multiple programs on multiple computers"
        ],
        correctAnswer: 0
      },
    ]
  },
    
  "organic-chemistry": {
    id: "organic-chemistry",
    title: "Organic Chemistry Basics",
    subjectCode: "BSC-CHEM",
    category: "Science",
    description: "Challenge yourself with questions on organic compounds, reactions, and mechanisms.",
    questions: [
      {
        id: "chem-q1",
        question: "What is the primary cause of the spectral lines in the hydrogen atomic spectrum?",
        options: [
          "Transitions between energy levels",
          "Thermal vibration of atoms",
          "Nuclear reactions",
          "Interaction with magnetic fields"
        ],
        correctAnswer: 0
      },
      {
        id: "chem-q2",
        question: "The square of the wave function represents the:",
        options: [
          "Energy of the particle",
          "Momentum of the particle",
          "Probability density",
          "Wavelength of the particle"
        ],
        correctAnswer: 2
      },
      {
        id: "chem-q3",
        question: "On which quantum numbers does the radial wave function rely?",
        options: [
          "Principal quantum number",
          "Azimuthal quantum number",
          "Magnetic quantum number",
          "Spin quantum number"
        ],
        correctAnswer: 0
      },
      {
        id: "chem-q4",
        question: "Slater's rules are used for calculating:",
        options: [
          "Electronegativity",
          "Effective nuclear charge",
          "Bond energy",
          "Ionization energy"
        ],
        correctAnswer: 1
      },
      {
        id: "chem-q5",
        question: "What is the hybridization of carbon in CO₂?",
        options: [
          "sp",
          "sp²",
          "sp³",
          "dsp²"
        ],
        correctAnswer: 0
      },
      {
        id: "chem-q6",
        question: "What is the difference in bonding between Na and NaCl?",
        options: [
          "Ionic bonding in NaCl and covalent bonding in Na",
          "Metallic bonding in Na and ionic bonding in NaCl",
          "Covalent bonding in both",
          "Metallic bonding in NaCl and ionic bonding in Na"
        ],
        correctAnswer: 1
      },
      {
        id: "chem-q7",
        question: "Which of the following is an example of lattice energy?",
        options: [
          "Energy released during bond formation",
          "Energy required to convert a gas into a solid",
          "Energy required to break ionic bonds in a crystal lattice",
          "Energy absorbed by an electron during excitation"
        ],
        correctAnswer: 2
      },
      {
        id: "chem-q8",
        question: "The structure of PCl₅ is:",
        options: [
          "Tetrahedral",
          "Trigonal bipyramidal",
          "Square planar",
          "Octahedral"
        ],
        correctAnswer: 1
      },
      {
        id: "chem-q9",
        question: "What is shielding or screening effect?",
        options: [
          "Reduction in nuclear charge experienced by outer electrons",
          "Increase in nuclear charge experienced by inner electrons",
          "Interaction between nucleus and valence electrons",
          "None of the above"
        ],
        correctAnswer: 0
      },
      {
        id: "chem-q10",
        question: "What is the correct relationship between de Broglie wavelength and momentum?",
        options: [
          "λ = h / p",
          "λ = p / h",
          "λ = h * p",
          "λ = h² / p²"
        ],
        correctAnswer: 0
      }
    ]
  },  
  "plant-biology": {
    id: "plant-biology",
    title: "Plant Biology Quiz",
    subjectCode: "BSC-BOT",
    category: "Science",
    description: "Test your knowledge of plant anatomy, physiology, and taxonomy concepts.",
    questions: [
      {
        id: "bot-q1",
        question: "Phycology is the study of:",
        options: ["Algae", "Fungi", "Bryophyte"],
        correctAnswer: 0
      },
      {
        id: "bot-q2",
        question: "Fusion between gametes of unequal sizes is called:",
        options: ["Anisogamy", "Oogamy", "Isogamy", "Dichogamy"],
        correctAnswer: 1
      },
      {
        id: "bot-q3",
        question: "The plant in which root, stem and leaf is not differentiated is called:",
        options: ["Thallus", "Marchantia", "Bryophyte", "Liverwort"],
        correctAnswer: 0
      },
      {
        id: "bot-q4",
        question: "Reserve food material in Rhodophyceae is:",
        options: ["Glycogen", "Starch", "Mannitol", "Floridian starch"],
        correctAnswer: 3
      },
      {
        id: "bot-q5",
        question: "What is the main function of a bacterial capsule?",
        options: ["Protection", "Movement", "Reproduction", "Energy production"],
        correctAnswer: 0
      },
      {
        id: "bot-q6",
        question: "What color are Gram-negative bacteria?",
        options: ["Red", "Purple", "Pink", "Colorless"],
        correctAnswer: 2
      },
      {
        id: "bot-q7",
        question: "During what phase is bacterial growth the fastest?",
        options: ["Lag phase", "Log phase", "Stationary phase", "Death phase"],
        correctAnswer: 1
      },
      {
        id: "bot-q8",
        question: "What is a virion?",
        options: ["A virus particle", "A bacterial cell", "A human cell", "A plant cell"],
        correctAnswer: 0
      },
      {
        id: "bot-q9",
        question: "Are antibiotics used to treat viral infections?",
        options: ["Yes", "No"],
        correctAnswer: 1
      },
      {
        id: "bot-q10",
        question: "What is gemma?",
        options: [
          "A type of asexual reproduction in bryophytes",
          "A type of sexual reproduction in fungi",
          "A type of photosynthetic organism",
          "A type of bacterial cell"
        ],
        correctAnswer: 0
      }
    ]
  },    
  "business-management": {
    id: "business-management",
    title: "Business Management Principles",
    subjectCode: "BBA",
    category: "Commerce",
    description: "Quiz on fundamental business management concepts, organizational behavior, and leadership.",
    questions: [
      {
        id: "bba-q1",
        question: "From the given balance sheet, what is the increase in total assets from 31-Dec-18 to 31-Dec-19?",
        options: ["1,40,000", "2,40,000", "1,00,000", "50,000"],
        correctAnswer: 0
      },
      {
        id: "bba-q2",
        question: "What is the Quick ratio from the given information?",
        options: ["1.0", "1.5", "0.75", "2.0"],
        correctAnswer: 2
      },
      {
        id: "bba-q3",
        question: "Which of the following is considered a non-current asset from the provided data?",
        options: ["Accounts receivable", "Land", "Cash in hand and at bank", "Accounts Payable"],
        correctAnswer: 1
      },
      {
        id: "bba-q4",
        question: "Calculate the Stock Turnover ratio using the provided data.",
        options: ["4 times", "3 times", "5 times", "2 times"],
        correctAnswer: 0
      },
      {
        id: "bba-q5",
        question: "What is the change in Cash in hand and at bank from 31-Dec-18 to 31-Dec-19?",
        options: ["Increased by 80,000", "Decreased by 70,000", "No change", "Increased by 20,000"],
        correctAnswer: 0
      },
      {
        id: "bba-q6",
        question: "Which of the following transactions is a debit entry in the ledger?",
        options: ["Sold goods to Krishna on credit", "Paid into bank", "Drew Cash from Bank for Credit", "Paid Shyam cash"],
        correctAnswer: 1
      },
      {
        id: "bba-q7",
        question: "From the provided information, what is the amount of General Reserve as of 31-Mar-22?",
        options: ["3,44,000", "4,14,000", "1,20,000", "5,10,000"],
        correctAnswer: 1
      },
      {
        id: "bba-q8",
        question: "In the Cost Sheet preparation, what is the total factory overhead cost?",
        options: ["1,00,000", "1,80,000", "60,000", "2,00,000"],
        correctAnswer: 1
      },
      {
        id: "bba-q9",
        question: "Which of the following is included in the Administrative Overheads?",
        options: ["Wages paid to workers", "Indirect labor", "Salaries", "Depreciation of factory equipment"],
        correctAnswer: 2
      },
      {
        id: "bba-q10",
        question: "In the transactions of Mahesh for April, what was the initial capital started with?",
        options: ["20,000", "14,000", "10,000", "30,000"],
        correctAnswer: 0
      }
    ]
  },
  "Geology": {
    id: "geology",
    title: "Geology",
    subjectCode: "BSC-GEO",
    category: "BSC",
    description: "",
    questions: [
      {
        id: "geo-q1",
        question: "What is the age of the earth?",
        options: ["4.5 billion years", "6 billion years", "8 billion years", "10 billion years"],
        correctAnswer: 0
      },
      {
        id: "geo-q2",
        question: "Where is the asteroid belt present?",
        options: ["Between Mars and Jupiter", "Between Venus and Mars", "Between Earth and Venus", "Between Jupiter and Saturn"],
        correctAnswer: 0
      },
      {
        id: "geo-q3",
        question: "What is the shape of the earth?",
        options: ["Sphere", "Ellipsoid", "Geoid", "Flat"],
        correctAnswer: 2
      },
      {
        id: "geo-q4",
        question: "What is the composition of the Earth's Core?",
        options: ["Iron and Nickel", "Silicon and Oxygen", "Carbon and Hydrogen", "Water and Ice"],
        correctAnswer: 0
      },
      {
        id: "geo-q5",
        question: "Define Geomorphology",
        options: ["The study of the earth's surface features", "The study of the earth's interior", "The study of the earth's atmosphere", "The study of the earth's oceans"],
        correctAnswer: 0
      },
      {
        id: "geo-q6",
        question: "Define the \"Focus\" of the earthquake",
        options: ["The point on the earth's surface directly above the earthquake source", "The point within the earth where the earthquake originates", "The area on the earth's surface where the earthquake is felt most strongly", "The path that the earthquake waves travel through the earth"],
        correctAnswer: 1
      },
      {
        id: "geo-q7",
        question: "Coral reefs are the landforms formed by",
        options: ["Corals", "Plants", "Rocks", "Sand"],
        correctAnswer: 0
      },
      {
        id: "geo-q8",
        question: "The statement 'Present is the key to the past' is given by",
        options: ["James Hutton", "Charles Darwin", "Albert Einstein", "Isaac Newton"],
        correctAnswer: 0
      },
      {
        id: "geo-q9",
        question: "Himalayan mountains formed due to the",
        options: ["continental plates", "oceanic plates", "tectonic plates", "lithospheric plates"],
        correctAnswer: 0
      },
      {
        id: "geo-q10",
        question: "What is the shape and size of volcanic bombs",
        options: ["Round and small", "Flat and large", "Irregular and large", "Streamlined and small"],
        correctAnswer: 2
      }
    ]
  },  
   "english-grammar": {
    id: "english-grammar",
    title: "English Communication & Comprehension",
    subjectCode: "ENG-COM",
    category: "Language",
    description: "Test your knowledge on communication, poetry, prose, intrapersonal skills and comprehension.",
    questions: [
      {
        id: "eng-q1",
        question: "Which line is repeated throughout the poem ‘The Brook’?",
        options: [
          "Slip, I slide, I gloom, I glance",
          "For men may come and men may go / But I go on for ever",
          "Half a league, half a league, half a league onward",
          "None of the above"
        ],
        correctAnswer: 1
      },
      {
        id: "eng-q2",
        question: "Which poetic line is from 'The Charge of the Light Brigade'?",
        options: [
          "Half a league, half a league, half a league onward",
          "But I go on forever",
          "Slip, I slide, I gloom, I glance",
          "None of the above"
        ],
        correctAnswer: 0
      },
      {
        id: "eng-q3",
        question: "One can cultivate intrapersonal communication skills through:",
        options: [
          "Mindfulness, meditation and seeking feedback",
          "Positive affirmation and enhancing self-compassion",
          "Adaptive thinking and emotional expression",
          "All of the above"
        ],
        correctAnswer: 3
      },
      {
        id: "eng-q4",
        question: "What do Jim and Della’s actions in 'The Gift of the Magi' symbolize?",
        options: [
          "Lack of financial planning",
          "Desire to impress each other",
          "Strength of their love and sacrifice",
          "Anger and frustration"
        ],
        correctAnswer: 2
      },
      {
        id: "eng-q5",
        question: "Which of the following revolutionized transportation as mentioned in the paper?",
        options: [
          "Airplanes and Metro",
          "Tesla and Hyperloop",
          "Steam Engines and Buses",
          "Bullet Trains and Electric Scooters"
        ],
        correctAnswer: 1
      },
      {
        id: "eng-q6",
        question: "What was the holiday task the boys had to do for the History class?",
        options: [
          "Read about peace treaties",
          "Present on modern technology",
          "Write about historical wars",
          "It is not clearly mentioned"
        ],
        correctAnswer: 3
      },
      {
        id: "eng-q7",
        question: "What is communication?",
        options: [
          "Interaction with oneself and others",
          "Exchange of ideas and information",
          "Sending and receiving messages",
          "All of the above"
        ],
        correctAnswer: 3
      },
      {
        id: "eng-q8",
        question: "What is Intrapersonal Communication?",
        options: [
          "Communication between two people",
          "Communication within oneself",
          "Group communication",
          "Mass communication"
        ],
        correctAnswer: 1
      },
      {
        id: "eng-q9",
        question: "How does the poet describe the brook's journey in comparison to human life?",
        options: [
          "Shorter and more painful",
          "Similar in phases and continuous",
          "Slower and more peaceful",
          "Rapid and confusing"
        ],
        correctAnswer: 1
      },
      {
        id: "eng-q10",
        question: "What does the central idea in 'Gift of the Magi' highlight?",
        options: [
          "Lack of wealth in love",
          "True love is shown through sacrifice",
          "Gifting is pointless without money",
          "Material gifts matter more"
        ],
        correctAnswer: 1
      }
    ]
  },  
   "cpp-programming": {
    id: "cpp-programming",
    title: "C++ Programming",
    subjectCode: "BSC-CS",
    category: "Computer Science",
    description: "Test your knowledge of C++ basics including syntax, classes, memory management, and OOP concepts.",
    questions: [
      {
        id: "cpp-q1",
        question: "Which of the following is the correct syntax of a C++ comment?",
        options: ["/* Comment */", "// Comment", "# Comment", "<!-- Comment -->"],
        correctAnswer: 1
      },
      {
        id: "cpp-q2",
        question: "Which of the following is used to define a class in C++?",
        options: ["class MyClass {}", "def MyClass {}", "function MyClass() {}", "struct MyClass()"],
        correctAnswer: 0
      },
      {
        id: "cpp-q3",
        question: "What is the default access specifier for class members in C++?",
        options: ["public", "protected", "private", "none of these"],
        correctAnswer: 2
      },
      {
        id: "cpp-q4",
        question: "Which of the following is not a C++ data type?",
        options: ["int", "float", "real", "bool"],
        correctAnswer: 2
      },
      {
        id: "cpp-q5",
        question: "What does 'new' keyword do in C++?",
        options: ["Deletes a pointer", "Allocates memory", "References a variable", "Creates a namespace"],
        correctAnswer: 1
      },
      {
        id: "cpp-q6",
        question: "Which of these concepts is not supported by C++?",
        options: ["Polymorphism", "Encapsulation", "Garbage Collection", "Inheritance"],
        correctAnswer: 2
      },
      {
        id: "cpp-q7",
        question: "What is the size of an int in a 64-bit GCC compiler?",
        options: ["2 bytes", "4 bytes", "8 bytes", "Depends on the OS"],
        correctAnswer: 1
      },
      {
        id: "cpp-q8",
        question: "Which header file is required for using 'cout' and 'cin'?",
        options: ["<iostream>", "<stream.h>", "<stdio.h>", "<stdlib.h>"],
        correctAnswer: 0
      },
      {
        id: "cpp-q9",
        question: "What is a correct way to declare a pointer in C++?",
        options: ["int ptr;", "int *ptr;", "pointer ptr;", "int &ptr;"],
        correctAnswer: 1
      },
      {
        id: "cpp-q10",
        question: "Which operator is used to resolve the scope in C++?",
        options: [".", "::", "->", "#"],
        correctAnswer: 1
      },
    ]
  },
  "database-systems": {
    id: "database-systems",
    title: "Database Management Systems",
    subjectCode: "BSC-CS",
    category: "Computer Science",
    description: "Test your understanding of database models, normalization, SQL, and transactions in Database Management Systems.",
    questions: [
      {
        id: "dbms-q1",
        question: "Which of the following is not a type of database model?",
        options: ["Hierarchical", "Network", "Relational", "Flowchart"],
        correctAnswer: 3
      },
      {
        id: "dbms-q2",
        question: "Which SQL command is used to remove a table from a database?",
        options: ["DELETE", "DROP", "REMOVE", "TRUNCATE"],
        correctAnswer: 1
      },
      {
        id: "dbms-q3",
        question: "What does the term 'Normalization' in DBMS refer to?",
        options: [
          "Organizing data to reduce redundancy",
          "Creating indexes",
          "Backing up data",
          "Improving query performance"
        ],
        correctAnswer: 0
      },
      {
        id: "dbms-q4",
        question: "Which of the following is a valid SQL aggregate function?",
        options: ["WHERE", "COUNT", "GROUP", "SELECT"],
        correctAnswer: 1
      },
      {
        id: "dbms-q5",
        question: "What is a primary key?",
        options: [
          "A key that uniquely identifies a column",
          "A key used to encrypt database",
          "A key that can be null",
          "A key that uniquely identifies each row"
        ],
        correctAnswer: 3
      },
      {
        id: "dbms-q6",
        question: "Which keyword is used in SQL to prevent duplicate rows in query results?",
        options: ["UNIQUE", "DISTINCT", "NO_DUP", "ONLY"],
        correctAnswer: 1
      },
      {
        id: "dbms-q7",
        question: "Which of the following is NOT a valid SQL data type?",
        options: ["VARCHAR", "NUMERIC", "DATE", "WORD"],
        correctAnswer: 3
      },
      {
        id: "dbms-q8",
        question: "Which command is used to remove all rows from a table without logging individual row deletions?",
        options: ["DROP", "DELETE", "REMOVE", "TRUNCATE"],
        correctAnswer: 3
      },
      {
        id: "dbms-q9",
        question: "Which level of data abstraction describes how the data is stored?",
        options: ["View level", "Logical level", "Physical level", "External level"],
        correctAnswer: 2
      },
      {
        id: "dbms-q10",
        question: "What does ACID stand for in DBMS?",
        options: [
          "Atomicity, Consistency, Isolation, Durability",
          "Access, Control, Integrity, Durability",
          "Accuracy, Consistency, Isolation, Data",
          "Atomicity, Concurrency, Isolation, Durability"
        ],
        correctAnswer: 0
      }
    ]
  }, 
  "python-programming": {
    id: "Python Programming",
    title: "Python Programming",
    subjectCode: "BSC-CS-PY",
    category: "Computer Science",
    description: "Test your knowledge of Python programming basics, syntax, data types, functions, and control flow.",
    questions: [
      {
        id: "py-q1",
        question: "Which of the following is used to define a function in Python?",
        options: ["function", "def", "define", "func"],
        correctAnswer: 1
      },
      {
        id: "py-q2",
        question: "What will be the output of: print(type([]))?",
        options: ["<class 'list'>", "<type 'list'>", "list", "None"],
        correctAnswer: 0
      },
      {
        id: "py-q3",
        question: "Which of the following is the correct way to create a dictionary?",
        options: [
          "dict = { 'name' = 'Alice', 'age' = 25 }",
          "dict = ( 'name': 'Alice', 'age': 25 )",
          "dict = { 'name': 'Alice', 'age': 25 }",
          "dict = [ 'name': 'Alice', 'age': 25 ]"
        ],
        correctAnswer: 2
      },
      {
        id: "py-q4",
        question: "Which of the following is not a keyword in Python?",
        options: ["pass", "eval", "assert", "nonlocal"],
        correctAnswer: 1
      },
      {
        id: "py-q5",
        question: "What does the len() function do in Python?",
        options: [
          "Returns the number of arguments",
          "Returns the length of an object",
          "Returns the last element",
          "Returns memory size"
        ],
        correctAnswer: 1
      },
      {
        id: "py-q6",
        question: "How are comments written in Python?",
        options: ["// This is a comment", "/* This is a comment */", "# This is a comment", "-- This is a comment"],
        correctAnswer: 2
      },
      {
        id: "py-q7",
        question: "What is the output of: 2 ** 3?",
        options: ["6", "8", "9", "5"],
        correctAnswer: 1
      },
      {
        id: "py-q8",
        question: "Which of the following data types is immutable?",
        options: ["list", "set", "dictionary", "tuple"],
        correctAnswer: 3
      },
      {
        id: "py-q9",
        question: "What is the output of: bool('False')?",
        options: ["True", "False", "None", "Error"],
        correctAnswer: 0
      },
      {
        id: "py-q10",
        question: "Which keyword is used for exception handling in Python?",
        options: ["catch", "except", "handle", "error"],
        correctAnswer: 1
      }
    ]
  },   
};

// Default quiz for when id doesn't match
const defaultQuiz = {
  id: "not-found",
  title: "Quiz Not Found",
  subjectCode: "N/A",
  category: "N/A",
  description: "The requested quiz could not be found.",
  questions: []
};

const QuizDetail = () => {
  const { id = "" } = useParams<{ id: string }>();
  const quiz = quizzesData[id] || defaultQuiz;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow container px-4 py-8 mx-auto">
        <div className="mb-6">
          <Link to="/quizzes">
            <Button variant="ghost" className="flex items-center gap-1 mb-4">
              <ArrowLeft className="h-4 w-4" />
              Back to Quizzes
            </Button>
          </Link>
          
          <h1 className="text-2xl font-bold mb-2">{quiz.title}</h1>
          <p className="text-gray-600 mb-6">{quiz.description}</p>
        </div>

        {quiz.id === "not-found" ? (
          <div className="text-center py-12">
            <h2 className="text-xl font-semibold mb-2">Quiz Not Found</h2>
            <p className="text-gray-600 mb-4">
              The quiz you are looking for does not exist or has been removed.
            </p>
            <Link to="/quizzes">
              <Button>Browse All Quizzes</Button>
            </Link>
          </div>
        ) : (
          <Quiz 
            id={quiz.id}
            title={quiz.title}
            subjectCode={quiz.subjectCode}
            category={quiz.category}
            questions={quiz.questions}
          />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default QuizDetail;
