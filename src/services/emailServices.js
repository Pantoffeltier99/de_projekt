import axios from 'axios';

export const sendEmail = async (elsemailData) => {
    try{
        const endpoint = 'http://localhost:3001/send';
        const response = await axios.post(endpoint, emailData);
        return response; 
    }
    catch {
        console.error('Error sending email:', error);
        throw error;
    }

}