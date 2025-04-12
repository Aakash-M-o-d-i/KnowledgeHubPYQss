
import { StudyMaterial } from "@/data/studyMaterialsData";
import StudyMaterialsGrid from "./StudyMaterialsGrid";

interface AllMaterialsTabProps {
  filteredMaterials: StudyMaterial[];
  totalCount: number;
  resetFilters: () => void;
}

const AllMaterialsTab = ({ 
  filteredMaterials, 
  totalCount,
  resetFilters
}: AllMaterialsTabProps) => {
  return (
    <StudyMaterialsGrid 
      materials={filteredMaterials}
      totalCount={totalCount}
      resetFilters={resetFilters}
    />
  );
};

export default AllMaterialsTab;
