const { create_transporter } = require("../oauth_transporter");

const send_email = async (email_options) => {
  let transporter = await create_transporter();

  transporter.sendMail(email_options, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: ", info.response);
    }
  });
};

const send_emails = async (req, res) => {
  const { email, message, name } = req.body;
  try {
    if (email && message && name) {
      const mail_options = {
        from: "krepakdima@gmail.com",
        to: "krepakdima@gmail.com",
        subject: "----Portfolio---- Message from " + email,
        text: message,
      };
      const mail_to_sender = {
        from: "krepakdima@gmail.com",
        to: email,
        subject: `Hi ${name} Your mail sent successfully to krepakdima@gmail.com`,
        text: "Soon I will replay u :)",
      };

      await send_email(mail_options);
      await send_email(mail_to_sender);
      res.send("success");
    } else {
      res.status(500).send("error");
    }
  } catch (err) {
    res.status(500).send("error");
  }
};
module.exports = {
  send_emails,
};
