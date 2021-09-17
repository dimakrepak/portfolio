const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
require("dotenv").config();

const create_transporter = async () => {
  const oauth2Client = new OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN,
  });

  const accessToken = await new Promise((resolve, reject) => {
    oauth2Client.getAccessToken((err, token) => {
      if (err) {
        reject();
      }
      resolve(token);
    });
  });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL,
      accessToken,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
    },
  });

  return transporter;
};
const send_email = async (email_options) => {
  let transporter = await create_transporter();

  transporter.sendMail(email_options, (error, info) => {
    if (error) {
      console.log(error);
      res.send("error");
    } else {
      console.log("Email sent: ", info.response);
      res.send("success");
    }
  });
};

router.post("/email", async (req, res) => {
  const mail_options = {
    from: "krepakdima@gmail.com",
    to: "krepakdima@gmail.com",
    subject: "----Portfolio---- Message from " + req.body.email,
    text: req.body.message,
  };
  const mail_to_sender = {
    from: "krepakdima@gmail.com",
    to: req.body.email,
    subject: "Your mail sent successfully to krepakdima@gmail.com",
    text: "Soon I will replay u :)",
  };
  try {
    await send_email(mail_options);
    await send_email(mail_to_sender);
  } catch (e) {
    console.log(e);
  }
});
module.exports = router;
