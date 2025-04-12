
import { Badge } from "@/components/ui/badge";

interface SubjectBadgeProps {
  subject: string;
}

const SubjectBadge = ({ subject }: SubjectBadgeProps) => {
  // Get a style based on the subject
  const getSubjectStyles = (subject: string) => {
    switch(subject) {
      case "BSC-AI":
        return "bg-indigo-50 text-indigo-700 border-indigo-200";
      case "BSC-CHEM":
        return "bg-cyan-50 text-cyan-700 border-cyan-200";
      case "BSC-BOT":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "CONST":
        return "bg-orange-50 text-orange-700 border-orange-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  return (
    <Badge variant="outline" className={getSubjectStyles(subject)}>
      {subject}
    </Badge>
  );
};

export default SubjectBadge;
