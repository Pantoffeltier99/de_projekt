import emailjs from '@emailjs/browser';

// EmailJS Konfiguration - ERSETZEN SIE DIESE WERTE
const SERVICE_ID = 'service_c9zfvri';      // Ihre Service ID
const TEMPLATE_ID = 'template_g4ozzkg';     // Ihre Template ID  
const PUBLIC_KEY = 'YIVLUAf_RWQroNzOc';        // Ihr Public Key

export function sendEmail(formData) {
  // FormData zu normalem Object konvertieren
  const templateParams = {
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message')
  };

  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    templateParams,
    PUBLIC_KEY
  );
}