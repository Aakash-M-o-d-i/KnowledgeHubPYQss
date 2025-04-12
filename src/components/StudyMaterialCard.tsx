
import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, BookOpen, Calendar, School, Eye } from "lucide-react";
import { toast } from "sonner";
import TypeBadge from "./study-materials/TypeBadge";
import SubjectBadge from "./study-materials/SubjectBadge";
import PreviewDialog from "./study-materials/PreviewDialog";
import DownloadDialog from "./study-materials/DownloadDialog";

interface StudyMaterialCardProps {
  id: string;
  title: string;
  author: string;
  type: string;
  subject: string;
  semester?: string;
  year: string;
  fileSize: string;
  downloadUrl: string;
  description: string;
}

const StudyMaterialCard = ({
  id,
  title,
  author,
  type,
  subject,
  semester,
  year,
  fileSize,
  downloadUrl,
  description,
}: StudyMaterialCardProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isPreviewDialogOpen, setIsPreviewDialogOpen] = useState(false);

  const handleDownloadRequest = () => {
    setIsDialogOpen(true);
  };

  const handlePreview = () => {
    setIsPreviewDialogOpen(true);
  };

  const handleDownload = () => {
    // Show toast notification
    toast.success("Download started", {
      description: `${title} - ${type} will be downloaded shortly.`,
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

  return (
    <>
      <Card className="overflow-hidden hover:shadow-md transition-all">
        <CardContent className="p-6">
          <div className="space-y-3">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-brand-600" />
                <h3 className="font-medium text-base">{title}</h3>
              </div>
              <div className="flex flex-wrap gap-2 mt-1">
                <TypeBadge type={type} />
                <SubjectBadge subject={subject} />
              </div>
            </div>

            <p className="text-sm text-gray-600 line-clamp-2">{description}</p>

            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="flex items-center gap-1 text-gray-600">
                <School className="h-3.5 w-3.5" />
                <span>By: {author}</span>
              </div>
              {semester && (
                <div className="flex items-center gap-1 text-gray-600">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{semester}</span>
                </div>
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex items-center justify-between">
          <div className="text-xs text-gray-500">{fileSize}</div>
          <div className="flex gap-2">
            <Button size="sm" variant="outline" onClick={handlePreview}>
              <Eye className="mr-2 h-4 w-4" />
              Preview
            </Button>
            <Button size="sm" onClick={handleDownloadRequest}>
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
          </div>
        </CardFooter>
      </Card>

      {/* Registration Dialog */}
      <DownloadDialog 
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        title={title}
        author={author}
        year={year}
        semester={semester}
        subject={subject}
        type={type}
        onSuccess={handleDownload}
        onCancel={() => setIsDialogOpen(false)}
      />

      {/* Preview Dialog */}
      <PreviewDialog
        isOpen={isPreviewDialogOpen}
        onOpenChange={setIsPreviewDialogOpen}
        title={title}
        author={author}
        type={type}
        subject={subject}
        semester={semester}
        year={year}
        fileSize={fileSize}
        onDownload={handleDownloadRequest}
      />
    </>
  );
};

export default StudyMaterialCard;
