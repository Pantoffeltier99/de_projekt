import express from 'express';
import cors from 'cors';
import multer from 'multer';
import nodemailer from 'nodemailer';

const app = express();
const upload = multer();
app.use(cors());

app.post('/send-mail', upload.single('file'), async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // 🟢 Test-Account bei Ethereal erstellen
    const testAccount = await nodemailer.createTestAccount();

    // 🟢 Transporter mit Test-Account verbinden
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass
      }
    });

    // 🟢 Mail absenden
    const info = await transporter.sendMail({
      from: `"Kontaktformular" <${email}>`,
      to: 'ziel@example.com', // egal, kommt nicht echt an
      subject,
      text: `Von: ${name} (${email})\n\n${message}`
    });

    // 🟢 Vorschau-Link erzeugen
    const previewUrl = nodemailer.getTestMessageUrl(info);
    console.log('📨 Vorschau-Link:', previewUrl);

    // Link auch an Frontend zurückgeben
    res.status(200).json({
      message: 'E-Mail erfolgreich gesendet!',
      previewUrl
    });
  } catch (err) {
    console.error('Fehler beim Senden:', err);
    res.status(500).json({ message: 'Fehler beim Senden' });
  }
});

app.listen(3000, () => console.log('Backend läuft auf http://localhost:3000'));
