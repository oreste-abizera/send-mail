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

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => console.log(`Node js server running on port ${PORT}`));
