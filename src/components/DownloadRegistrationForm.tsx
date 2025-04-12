
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

// Define form schema with validation
const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters" }),
  department: z.string().min(1, { message: "Department is required" }),
  semester: z.string().min(1, { message: "Semester is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().regex(/^[6-9]\d{9}$/, { message: "Please enter a valid 10-digit Indian phone number" })
});

type FormValues = z.infer<typeof formSchema>;

interface DownloadRegistrationFormProps {
  onSuccess: () => void;
  onCancel: () => void;
  paperDetails: {
    title: string;
    university: string;
    year: string;
    semester: string;
    subjectCode: string;
    examType: string;
  };
}

const DownloadRegistrationForm = ({ 
  onSuccess, 
  onCancel,
  paperDetails 
}: DownloadRegistrationFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      department: "",
      semester: "",
      email: "",
      phone: ""
    }
  });

  // Handle form submission
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    try {
      // Prepare data for EmailJS
      const templateParams = {
        from_name: data.fullName,
        department: data.department,
        semester: data.semester,
        email: data.email,
        phone: data.phone,
        paper_title: paperDetails.title,
        subject_code: paperDetails.subjectCode,
        exam_type: paperDetails.examType,
        university: paperDetails.university,
        year: paperDetails.year,
        paper_semester: paperDetails.semester,
        message: `Download request for: ${paperDetails.title} (${paperDetails.examType})`
      };

      // Replace with your EmailJS service ID, template ID, and public key
      const result = await emailjs.send(
        "service_17c4zhn", // Replace with your service ID
        "template_f8b1ll9", // Replace with your template ID
        templateParams,
        "F6tCEMhvFKeT0M3e_" // Replace with your public key
      );

      if (result.text === "OK") {
        toast.success("Registration successful", {
          description: "You can now download the paper."
        });
        onSuccess();
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Registration failed", {
        description: "Please try again later."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name*</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="department"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Department*</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="artificial-intelligence">B.Sc Artificial Intelligence</SelectItem>
                  <SelectItem value="chemistry">B.Sc Chemistry</SelectItem>
                  <SelectItem value="botany">B.Sc Botany</SelectItem>
                  <SelectItem value="business-admin">BBA</SelectItem>
                  <SelectItem value="geology">B.Sc Geology</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="semester"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Semester*</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select semester" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="1">Semester 1</SelectItem>
                  <SelectItem value="2">Semester 2</SelectItem>
                  <SelectItem value="3">Semester 3</SelectItem>
                  <SelectItem value="4">Semester 4</SelectItem>
                  <SelectItem value="5">Semester 5</SelectItem>
                  <SelectItem value="6">Semester 6</SelectItem>
                  <SelectItem value="7">Semester 7</SelectItem>
                  <SelectItem value="8">Semester 8</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address*</FormLabel>
              <FormControl>
                <Input type="email" placeholder="aakash.modi@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number (India)*</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="9876543210" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-2 justify-end pt-2">
          <Button type="button" variant="outline" onClick={onCancel} disabled={isSubmitting}>
            Cancel
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Register & Download"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default DownloadRegistrationForm;
