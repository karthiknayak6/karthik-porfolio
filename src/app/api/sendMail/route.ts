import { Html } from "next/document";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const msg: {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
  } = await request.json();
  console.log(msg);

  if (!msg) {
    return new Response("Invalid request", { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: "karthiknayak706@gmail.com",
    subject: msg.email,
    text: "test",
    html:
      "<h1>Mail from Portfolio Website</h1><p>From: " +
      msg.firstName +
      " " +
      msg.lastName +
      "</p><p>Email: " +
      msg.email +
      "</p><p>Message:  " +
      msg.message +
      "</p>",
  };

  try {
    console.log(process.env.EMAIL_PASS);
    await transporter.sendMail(mailOptions);
    return Response.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Failed to send email" }, { status: 500 });
  }
}
