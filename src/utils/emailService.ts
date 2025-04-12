
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your service ID
export const initEmailJS = (publicKey: string) => {
  emailjs.init(publicKey);
};

// Send an email using EmailJS
export const sendEmail = async (
  serviceId: string, 
  templateId: string, 
  templateParams: Record<string, unknown>
) => {
  try {
    const response = await emailjs.send(serviceId, templateId, templateParams);
    return { success: true, response };
  } catch (error) {
    console.error("Email sending failed:", error);
    return { success: false, error };
  }
};
