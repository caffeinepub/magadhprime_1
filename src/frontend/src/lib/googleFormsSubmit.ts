import { MARKETING_CONFIG } from '../config/marketing';

interface FormData {
  name: string;
  phone: string;
  message: string;
}

interface SubmitResult {
  success: boolean;
  error?: string;
}

/**
 * Submits form data to Google Forms
 * 
 * To configure:
 * 1. Create a Google Form with the required fields
 * 2. Get the form's action URL and field names
 * 3. Update MARKETING_CONFIG.googleForms with your form details
 */
export async function submitToGoogleForms(data: FormData): Promise<SubmitResult> {
  try {
    const { formId, fields } = MARKETING_CONFIG.googleForms;
    
    // Construct the Google Forms submission URL
    const formUrl = `https://docs.google.com/forms/d/e/${formId}/formResponse`;
    
    // Create form data
    const formData = new FormData();
    formData.append(fields.name, data.name);
    formData.append(fields.phone, data.phone);
    formData.append(fields.message, data.message);
    
    // Submit to Google Forms
    // Note: This will fail with CORS in development, but works when deployed
    // For development, you can use a CORS proxy or test with the actual deployment
    await fetch(formUrl, {
      method: 'POST',
      body: formData,
      mode: 'no-cors', // Required for Google Forms
    });
    
    // With no-cors mode, we can't read the response, so we assume success
    return { success: true };
  } catch (error) {
    console.error('Form submission error:', error);
    return {
      success: false,
      error: 'Unable to submit form. Please try contacting us via WhatsApp or email.',
    };
  }
}
