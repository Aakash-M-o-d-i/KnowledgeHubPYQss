
import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, FileText, Calendar, School } from "lucide-react";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import DownloadRegistrationForm from "./DownloadRegistrationForm";

interface PaperCardProps {
  id: string;
  title: string;
  university: string;
  year: string;
  semester: string;
  subjectCode: string;
  fileSize: string;
  downloadUrl: string;
  examType: string; // mid1, mid2, semester
}

const PaperCard = ({
  id,
  title,
  university,
  year,
  semester,
  subjectCode,
  fileSize,
  downloadUrl,
  examType,
}: PaperCardProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDownloadRequest = () => {
    setIsDialogOpen(true);
  };

  const handleDownload = () => {
    // Show toast notification
    toast.success("Download started", {
      description: `${title} - ${year} will be downloaded shortly.`,
    });

    try {
      // Attempt to open the file in a new tab
      // Using setTimeout to give the toast time to appear before opening
      setTimeout(() => {
        // For public folder files, we need to ensure the path is correct
        const url = downloadUrl.startsWith('/') ? downloadUrl : `/${downloadUrl}`;
        window.open(url, "_blank");
      }, 500);
    } catch (error) {
      // Handle errors
      console.error("Download error:", error);
      toast.error("Download failed", {
        description: "There was an error downloading the file. Please try again.",
      });
    }
  };

  // Function to get a friendly exam type name
  const getExamTypeName = (type: string) => {
    switch(type) {
      case "mid1": return "Mid-Term 1";
      case "mid2": return "Mid-Term 2";
      case "semester": return "Semester";
      default: return type;
    }
  };

  // Add badge for current year papers
  const getYearBadge = () => {
    if (year === "2024") {
      return <Badge className="ml-2 bg-green-100 text-green-800 hover:bg-green-200">Current</Badge>;
    } else if (year === "2025") {
      return <Badge className="ml-2 bg-blue-100 text-blue-800 hover:bg-blue-200">Latest</Badge>;
    }
    return null;
  };

  return (
    <>
      <Card className="overflow-hidden hover:shadow-md transition-all">
        <CardContent className="p-6">
          <div className="space-y-3">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-brand-600" />
                <h3 className="font-medium text-base">{title}</h3>
              </div>
              <div className="flex gap-2">
                <Badge
                  variant="outline"
                  className="bg-brand-50 text-brand-700 border-brand-200"
                >
                  {subjectCode}
                </Badge>
                <Badge 
                  variant="secondary"
                  className="capitalize"
                >
                  {getExamTypeName(examType)}
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="flex items-center gap-1 text-gray-600">
                <School className="h-3.5 w-3.5" />
                <span>{university}</span>
              </div>
              <div className="flex items-center gap-1 text-gray-600">
                <Calendar className="h-3.5 w-3.5" />
                <span>{year} {getYearBadge()} {semester}</span>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex items-center justify-between">
          <div className="text-xs text-gray-500">{fileSize}</div>
          <Button size="sm" onClick={handleDownloadRequest}>
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
        </CardFooter>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Register to Download</DialogTitle>
          </DialogHeader>
          <div className="text-sm text-muted-foreground mb-4">
            Please provide your information to download <span className="font-medium">{title}</span>
          </div>
          <DownloadRegistrationForm 
            onSuccess={handleDownload}
            onCancel={() => setIsDialogOpen(false)}
            paperDetails={{
              title,
              university,
              year,
              semester,
              subjectCode,
              examType
            }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PaperCard;
