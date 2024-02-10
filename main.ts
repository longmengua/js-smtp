import express, { Request, Response } from 'express';
import nodemailer, { Transporter } from 'nodemailer';

const app: express.Application = express();

// Create a SMTP transporter using Gmail's SMTP server
const transporter: Transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'longmengua@gmail.com',
    pass: 'yiyo xjlu ljen shqz',
  },
});

// Define a route to send an email
app.get('/send-email', (req: Request, res: Response) => {
  // Define email options
  const mailOptions: nodemailer.SendMailOptions = {
    from: 'longmengua@gmail.com',
    to: 'hramosece@gmail.com',
    subject: 'Hello Honey!',
    text: 'Hello Honey!',
  };

  // Send email
  transporter.sendMail(mailOptions, (error: Error | null, info: nodemailer.SentMessageInfo) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.send('Email sent successfully');
    }
  });
});

// Start the server
const PORT: number = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
