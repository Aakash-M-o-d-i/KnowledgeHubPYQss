
import { StudyMaterial } from "@/data/studyMaterialsData";
import StudyMaterialsGrid from "./StudyMaterialsGrid";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { getSubjectIcon } from "@/utils/studyMaterialsUtils";

interface SubjectGroup {
  subject: string;
  semesterGroups: {
    semester: string;
    materials: StudyMaterial[];
  }[];
}

interface SubjectSemesterTabProps {
  materialsBySubjectAndSemester: SubjectGroup[];
}

const SubjectSemesterTab = ({ 
  materialsBySubjectAndSemester 
}: SubjectSemesterTabProps) => {
  
  const getSubjectBadgeStyle = (subject: string) => {
    switch(subject) {
      case "BSC-AI": return "bg-indigo-50 text-indigo-700";
      case "BSC-CHEM": return "bg-cyan-50 text-cyan-700";
      case "BSC-BOT": return "bg-emerald-50 text-emerald-700";
      case "CONST": return "bg-orange-50 text-orange-700";
      default: return "bg-gray-50 text-gray-700";
    }
  };
  
  return (
    <div className="space-y-8">
      {materialsBySubjectAndSemester.map(({subject, semesterGroups}) => (
        <div key={subject} className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              {getSubjectIcon(subject)}
              {subject} Materials
            </h3>
            <Badge variant="outline" className={getSubjectBadgeStyle(subject)}>
              {semesterGroups.reduce((acc, curr) => acc + curr.materials.length, 0)} items
            </Badge>
          </div>
          <div className="space-y-8">
            {semesterGroups.map(({semester, materials}) => (
              <div key={`${subject}-${semester}`} className="border-t pt-4">
                <h4 className="font-medium text-lg mb-4 flex items-center gap-1">
                  <Calendar className="h-4 w-4 text-brand-600" />
                  {semester}
                </h4>
                <StudyMaterialsGrid materials={materials} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubjectSemesterTab;
