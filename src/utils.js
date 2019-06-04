import { adjectives, nouns } from "./words";
import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";
// import Mailgun from "mailgun-js";
import jwt from "jsonwebtoken";

export const generateSecret = () => {
  const randomNumber = Math.floor(Math.random() * nouns.length);
  return `${adjectives[randomNumber]} ${nouns[randomNumber]}`;
};

const sendMail = email => {
  const options = {
    auth: {
      api_user: process.env.SENDGRID_USERNAME,
      api_key: process.env.SENDGRID_PASSWORD
    }
  };

  const client = nodemailer.createTransport(sgTransport(options));
  return client.sendMail(email);

  // const mailGunClient = new Mailgun({
  //   apiKey: process.env.MAILGUN_API_KEY || "",
  //   domain: process.env.MAILGUN_DOMAIN || ""
  // });
  // return mailGunClient.messages().send(email);
};

export const sendSecretEmail = (username, address, secret) => {
  const email = {
    from: "baek@prismagram.com",
    to: address,
    subject: "🔒 Login Secret for Prismagram 🔒",
    html: `Hi ${username}, <br/><br/> Your Login secret is <strong>${secret}</strong><br/>Copy paste on the app/website to Login`
  };
  return sendMail(email);
};

export const generateToken = id =>
  jwt.sign({ id }, process.env.JWT_SECRETORKEY);
