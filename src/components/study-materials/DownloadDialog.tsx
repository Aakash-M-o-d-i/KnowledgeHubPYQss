
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import DownloadRegistrationForm from "@/components/DownloadRegistrationForm";

interface DownloadDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  author: string;
  year: string;
  semester?: string;
  subject: string;
  type: string;
  onSuccess: () => void;
  onCancel: () => void;
}

const DownloadDialog = ({
  isOpen,
  onOpenChange,
  title,
  author,
  year,
  semester,
  subject,
  type,
  onSuccess,
  onCancel,
}: DownloadDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Register to Download</DialogTitle>
        </DialogHeader>
        <div className="text-sm text-muted-foreground mb-4">
          Please provide your information to download <span className="font-medium">{title}</span>
        </div>
        <DownloadRegistrationForm 
          onSuccess={onSuccess}
          onCancel={onCancel}
          paperDetails={{
            title,
            university: author,
            year,
            semester: semester || "N/A",
            subjectCode: subject,
            examType: type
          }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default DownloadDialog;
