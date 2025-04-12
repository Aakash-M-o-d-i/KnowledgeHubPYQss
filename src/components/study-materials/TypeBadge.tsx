
import { Badge } from "@/components/ui/badge";

interface TypeBadgeProps {
  type: string;
}

const TypeBadge = ({ type }: TypeBadgeProps) => {
  // Get a style based on the type of material
  const getTypeStyles = (type: string) => {
    switch(type.toLowerCase()) {
      case "notes":
        return "bg-green-50 text-green-700 border-green-200";
      case "ebook":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "slides":
        return "bg-purple-50 text-purple-700 border-purple-200";
      case "formula sheet":
        return "bg-red-50 text-red-700 border-red-200";
      case "cheat sheet":
        return "bg-amber-50 text-amber-700 border-amber-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  return (
    <Badge variant="outline" className={getTypeStyles(type)}>
      {type}
    </Badge>
  );
};

export default TypeBadge;
