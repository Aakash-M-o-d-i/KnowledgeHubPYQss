
import { StudyMaterial } from "@/data/studyMaterialsData";
import StudyMaterialsGrid from "./StudyMaterialsGrid";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

interface SemesterGroup {
  semester: string;
  materials: StudyMaterial[];
}

interface SemesterTabProps {
  materialsBySemester: SemesterGroup[];
}

const SemesterTab = ({ materialsBySemester }: SemesterTabProps) => {
  return (
    <div className="space-y-8">
      {materialsBySemester.map(({semester, materials}) => (
        <div key={semester} className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Calendar className="h-5 w-5 text-brand-600" />
              {semester} Materials
            </h3>
            <Badge variant="outline" className="bg-blue-50 text-blue-700">
              {materials.length} items
            </Badge>
          </div>
          <StudyMaterialsGrid materials={materials} />
        </div>
      ))}
    </div>
  );
};

export default SemesterTab;
