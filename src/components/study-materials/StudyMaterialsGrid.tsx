
import { StudyMaterial } from "@/data/studyMaterialsData";
import StudyMaterialCard from "@/components/StudyMaterialCard";
import { Button } from "@/components/ui/button";

interface StudyMaterialsGridProps {
  materials: StudyMaterial[];
  totalCount?: number;
  resetFilters?: () => void;
}

const StudyMaterialsGrid = ({ 
  materials, 
  totalCount,
  resetFilters 
}: StudyMaterialsGridProps) => {
  
  if (materials.length === 0) {
    return (
      <div className="text-center py-8 md:py-12">
        <h3 className="text-lg md:text-xl font-semibold mb-2">No study materials found</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm md:text-base">
          Try adjusting your search or filters to find what you're looking for.
        </p>
        {resetFilters && (
          <Button onClick={resetFilters}>
            Reset Filters
          </Button>
        )}
      </div>
    );
  }

  return (
    <div>
      {totalCount !== undefined && (
        <div className="mb-4 md:mb-6">
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
            Showing {materials.length} of {totalCount} study materials
          </p>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {materials.map((material) => (
          <StudyMaterialCard
            key={material.id}
            id={material.id}
            title={material.title}
            author="" // Use empty string since author doesn't exist in the StudyMaterial type
            type={material.type}
            subject={material.subject}
            semester={material.semester}
            year={material.year}
            fileSize={material.fileSize}
            downloadUrl={material.downloadUrl}
            description={material.description}
          />
        ))}
      </div>
    </div>
  );
};

export default StudyMaterialsGrid;
