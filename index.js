const express = require("express");
const nodemailer = require("nodemailer");
const app = express();

var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "454027c4702609",
    pass: "0cc2bd91c87607",
  },
});

var mailOptions = {
  from: '"Coderspace Team" <info@coderspace.com>',
  to: "user@example.com",
  subject: "Nice Nodemailer test",
  text: "Hey there, it’s our first message sent with Nodemailer ;) ",
  html: "<b>Hey there! </b><br> This is our first message sent with Nodemailer",
};

app.post("/sendEmail", async (req, res) => {
  if (req.params.to) {
    mailOptions = { ...mailOptions, to: req.params.to };
  }
  const info = await transport.sendMail(mailOptions);
  console.log(info.messageId);
  console.log(info);
  res.json(info);
});

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => console.log(`Node js server running on port ${PORT}`));
