const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser')
const express = require('express');

let app = express();
app.use(cors());
app.use(bodyParser.json());
app.post('/mail', (req, res) => {
	sendEmail(req.body);
});

app.listen(40258);

async function sendEmail(mail) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'mail.acclarare.net',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'acclarar', 
      pass: 'HUNT3r05t19!'
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail(mail);
}