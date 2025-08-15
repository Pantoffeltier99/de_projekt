import axios from 'axios';

export function sendEmail(formData) {
  return axios.post('http://localhost:3000/send-mail', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
}
