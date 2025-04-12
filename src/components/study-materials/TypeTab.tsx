
import React from "react";
import { StudyMaterial } from "@/data/studyMaterialsData";
import StudyMaterialsGrid from "./StudyMaterialsGrid";
import { Badge } from "@/components/ui/badge";
import { getTypeIcon } from "@/utils/studyMaterialsUtils";

interface TypeGroup {
  type: string;
  materials: StudyMaterial[];
}

interface TypeTabProps {
  materialsByType: TypeGroup[];
}

const TypeTab = ({ materialsByType }: TypeTabProps) => {
  
  const getTypeBadgeStyle = (type: string) => {
    switch(type.toLowerCase()) {
      case "notes": return "bg-green-50 text-green-700";
      case "ebook": return "bg-blue-50 text-blue-700";
      case "slides": return "bg-purple-50 text-purple-700";
      default: return "bg-gray-50 text-gray-700";
    }
  };
  
  return (
    <div className="space-y-8">
      {materialsByType.map(({type, materials}) => (
        <div key={type} className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              {getTypeIcon(type)}
              {type} Materials
            </h3>
            <Badge variant="outline" className={getTypeBadgeStyle(type)}>
              {materials.length} items
            </Badge>
          </div>
          <StudyMaterialsGrid materials={materials} />
        </div>
      ))}
    </div>
  );
};

export default TypeTab;
