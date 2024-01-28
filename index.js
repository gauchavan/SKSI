// how to run node server - npm run dev - both react and node server get turned on
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
const app = express()
var router = express.Router();

var cors = require('cors');
// for local testing - uncomment the below line
// const creds = require('./config/config.js');

const creds = { "USER" : process.env.emailUser, "PASS" : process.env.emailPwd};

// the below line didn't work locally
// const publicPath = path.join(__dirname, '..', 'sksiclient/public');


app.use(express.static(path.join(__dirname, './sksiclient/build')));

var transport = {
    host: 'smtp.gmail.com', // Don’t forget to replace with the SMTP host of your provider
    port: 465,
    secure: true,
    auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var number = req.body.number
  var message = req.body.message
  var content = `name: ${name} \n email: ${email} \n number: ${number} \n  message: ${message} `

  var mail = {
    from: req.body.email,
    to: creds.USER,  // Change to email address that you want to receive messages on
    subject: 'New Message from Contact Form',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })
})

// the below line didn't work locally
// app.get('*', (req, res) => {
//   res.sendFile(path.join(publicPath, 'index.html'));
// });

app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, './sksiclient/build/index.html'));
});

const port = process.env.PORT || 3002;
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});