import axios from 'axios';

export const sendEmail = async (emailData) => {
    try {
        const endpoint = 'https://localhost:5174/send'; // Replace with your email service endpoint
        const response = await axios.post(endpoint, emailData)
        return response;   
    } catch {
        console.error('Error sending email:', error);
        throw error; // Re-throw the error for further handling if needed
    }
}