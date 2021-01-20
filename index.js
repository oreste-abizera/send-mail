const express = require("express");
const nodemailer = require("nodemailer");
const app = express();

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => console.log(`Node js server running on port ${PORT}`));
