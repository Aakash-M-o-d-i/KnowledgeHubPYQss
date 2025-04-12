
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface PreviewDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  author: string;
  type: string;
  subject: string;
  semester?: string;
  year: string;
  fileSize: string;
  onDownload: () => void;
}

const PreviewDialog = ({
  isOpen,
  onOpenChange,
  title,
  author,
  type,
  subject,
  semester,
  year,
  fileSize,
  onDownload,
}: PreviewDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>{title} - Preview</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div className="text-sm text-muted-foreground">
            <p><strong>Author:</strong> {author}</p>
            <p><strong>Type:</strong> {type}</p>
            <p><strong>Subject:</strong> {subject}</p>
            {semester && <p><strong>Semester:</strong> {semester}</p>}
            <p><strong>Year:</strong> {year}</p>
            <p><strong>Size:</strong> {fileSize}</p>
          </div>
          <div className="bg-gray-100 rounded-md p-4 h-[50vh] flex items-center justify-center">
            <div className="text-center">
              <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-4">Preview not available. You can download the file to view its contents.</p>
              <Button onClick={onDownload}>
                <FileText className="mr-2 h-4 w-4" />
                Download Now
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PreviewDialog;
