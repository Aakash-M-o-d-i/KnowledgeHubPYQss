
import { StudyMaterial } from "@/data/studyMaterialsData";
import StudyMaterialsGrid from "./StudyMaterialsGrid";
import { Calendar, Download } from "lucide-react";

interface DownloadsTabProps {
  studyMaterials: StudyMaterial[];
}

const DownloadsTab = ({ studyMaterials }: DownloadsTabProps) => {
  // Get popular and newest materials
  const popularMaterials = studyMaterials.slice(0, 3);
  const latestMaterials = [...studyMaterials]
    .sort((a, b) => parseInt(b.year) - parseInt(a.year))
    .slice(0, 3);
    
  return (
    <>
      <div className="bg-white rounded-lg p-6 shadow-sm mb-8">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Download className="h-5 w-5 text-brand-600" />
          Most Popular Downloads
        </h3>
        <StudyMaterialsGrid materials={popularMaterials} />
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Calendar className="h-5 w-5 text-brand-600" />
          Latest Additions
        </h3>
        <StudyMaterialsGrid materials={latestMaterials} />
      </div>
    </>
  );
};

export default DownloadsTab;
