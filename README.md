# Knowledge Hub PYQs
**Version 2.0** - Your Ultimate Study Companion

Knowledge Hub is a comprehensive platform designed to help university students access previous year question papers, study materials, and interactive quizzes to prepare for their exams effectively.

![Knowledge Hub Preview]()

---

## 🌟 Features

### 📚 **Previous Year Question Papers (PYQs)**
- Access an extensive collection of university exam papers
- Organized by subject, semester, and year
- Easy download and viewing options
- Regular updates with latest papers

### 📖 **Study Materials**
- Comprehensive notes and textbooks
- Reference materials curated by experts
- Organized by semester and subject
- Multiple formats supported (PDF, documents)

### 🧠 **Interactive Quizzes**
- Semester-wise quizzes for each subject
- Multiple difficulty levels
- Instant feedback and scoring
- Track your progress over time

### 🎨 **Modern User Experience**
- **Dark/Light Mode**: Toggle between themes for comfortable viewing
- **Mobile Responsive**: Fully optimized for all devices
- **Advanced Search**: Find specific subjects, papers, or materials instantly
- **Clean Interface**: Intuitive and user-friendly design

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or later)
- npm or yarn package manager

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Aakash-M-o-d-i/KnowledgeHubPYQss.git
   cd knowledge-hub
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000`

---

## 📖 Usage Guide

### 🔍 **Browsing Subjects**
- Navigate to the **Subjects** page
- Browse subjects organized by department
- Click on any subject to view available question papers
- Filter by year, semester, or exam type

### 📚 **Accessing Study Materials**
- Visit the **Study Materials** section
- Find notes organized by semester and subject
- Download materials in various formats
- Bookmark frequently used resources

### 🎯 **Taking Quizzes**
- Go to the **Quizzes** section
- Select your semester and subject
- Choose difficulty level (Beginner, Intermediate, Advanced)
- Track your progress and scores

### 🌙 **Theme Customization**
- Use the theme toggle in the navigation bar
- Switch between light and dark modes
- Settings are automatically saved

---

## 📁 Project Structure

```
knowledge-hub/
├── public/                    # Static assets
│   ├── questions_papers/      # PDF files of question papers
│   ├── study_materials/       # Study material PDFs
│   └── lovable-uploads/       # Image assets and screenshots
├── src/
│   ├── components/            # Reusable UI components
│   │   ├── common/           # Common components (Header, Footer)
│   │   ├── quiz/             # Quiz-related components
│   │   └── subject/          # Subject-specific components
│   ├── context/              # React context providers
│   │   ├── ThemeContext.tsx  # Theme management
│   │   └── UserContext.tsx   # User state management
│   ├── hooks/                # Custom React hooks
│   ├── pages/                # Page components
│   │   ├── Home.tsx         # Landing page
│   │   ├── Subjects.tsx     # Subjects listing
│   │   ├── Quiz.tsx         # Quiz interface
│   │   └── StudyMaterials.tsx # Study materials page
│   ├── utils/                # Utility functions
│   │   ├── api.ts           # API functions
│   │   └── helpers.ts       # Helper functions
│   ├── App.tsx               # Main application component
│   └── main.tsx             # Application entry point
├── package.json              # Dependencies and scripts
└── README.md                # Project documentation
```

---

## 🛠️ Technologies Used

- **Frontend**: React.js with TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Routing**: React Router
- **Build Tool**: Vite
- **Icons**: Lucide React

---

## 📱 Screenshots

| Feature | Preview |
|---------|---------|
| **Main Dashboard** | ![Dashboard](public/lovable-uploads/c0c247c7-8340-4e0c-9690-799ad85d5329.png) |
| **Dark Mode** | *Add your dark mode screenshot link here* |
| **Mobile View** | *Add your mobile screenshot link here* |

---

## 🤝 Contributing

We welcome contributions to improve Knowledge Hub! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📞 Contact Information

**Developer**: Aakash Modi

- 📧 **Email**: work.aakash.modi@gmail.com
- 📱 **Phone**: +91 7811950838
- 📍 **Address**: KL Puram, CTUAP

---

## 📄 License

**All rights reserved.** This project is proprietary and confidential.

© 2024 Knowledge Hub. All rights reserved.

---

## 🙏 Acknowledgments

- University faculty for providing question papers
- Student community for feedback and suggestions
- Open source libraries that made this project possible

---

## 🔄 Version History

- **v2.0** - Enhanced UI, added quizzes, improved search functionality
- **v1.0** - Initial release with basic PYQ access and study materials

---

*Made with ❤️ for students, by students*
