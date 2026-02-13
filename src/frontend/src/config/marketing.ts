/**
 * Marketing configuration for MagadhPrime
 * Update these values to change contact information and links across the site
 */

// WhatsApp Configuration
// To update: Replace the phone number (without + or spaces) and customize the message
const WHATSAPP_PHONE = '919122667155'; // Replace with actual WhatsApp number
const WHATSAPP_MESSAGE = 'Hello! I would like to order MagadhPrime wheat flour.';

export const MARKETING_CONFIG = {
  whatsapp: {
    phone: WHATSAPP_PHONE,
    link: `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
  },
  email: 'magadhprimeatta@gmail.com',
  social: {
    facebook: 'https://facebook.com/magadhflour',
    instagram: 'https://instagram.com/magadhprimeatta',
  },
  address: 'At plot 302, behind hotel imperial, Baiju bigha, musatpura, Bodhgaya, Bihar',
  
  // Google Forms Configuration
  // To set up Google Forms integration:
  // 1. Create a Google Form with fields: Name, Phone, Message
  // 2. Get the form's pre-filled link by clicking "Get pre-filled link" in the form menu
  // 3. Fill in dummy data and copy the generated URL
  // 4. Extract the form ID and field IDs from the URL
  // 5. Update the values below
  googleForms: {
    // Example: https://docs.google.com/forms/d/e/FORM_ID/formResponse
    formId: '1FAIpQLSexampleFormId', // Replace with your actual form ID
    // Field IDs from the pre-filled URL (entry.XXXXXXXX)
    fields: {
      name: 'entry.123456789',    // Replace with actual field ID for Name
      phone: 'entry.987654321',   // Replace with actual field ID for Phone
      message: 'entry.456789123', // Replace with actual field ID for Message
    },
  },
};
