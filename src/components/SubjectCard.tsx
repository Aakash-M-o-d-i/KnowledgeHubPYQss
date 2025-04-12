
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText } from "lucide-react";

interface SubjectCardProps {
  id: string;
  name: string;
  code: string;
  papersCount: number;
  description: string;
}

const SubjectCard = ({ id, name, code, papersCount, description }: SubjectCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-brand-600" />
              <h3 className="font-semibold text-lg">{name}</h3>
            </div>
            <Badge variant="outline" className="bg-brand-50 text-brand-700">
              {code}
            </Badge>
          </div>
          <Badge className="bg-brand-100 text-brand-800 hover:bg-brand-200">
            <FileText className="mr-1 h-3 w-3" />
            {papersCount} Papers
          </Badge>
        </div>
        <p className="mt-3 text-sm text-gray-600 line-clamp-2">{description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-end">
        <Link to={`/subjects/${id}`}>
          <Button variant="outline" className="text-brand-700 hover:text-brand-800 hover:bg-brand-50">
            View Papers
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default SubjectCard;
