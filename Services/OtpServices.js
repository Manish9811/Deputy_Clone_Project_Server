import nodemailer from "nodemailer";
import dotenv from 'dotenv'


dotenv.config()

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,               // TLS port
  secure: false,  
  auth: {
    user: process.env.Email,
    pass: process.env.Password,
  },
});

console.log(process.env.Email, process.env.Password)

// async..await is not allowed in global scope, must use a wrapper
export async function SendMail(To,Subject,Text,Otp) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: process.env.Email, // sender address
    to: To, // list of receivers
    subject: Subject, // Subject line
    text: Text, // plain text body
    html: `Your otp is ${Otp}`, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}