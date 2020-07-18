const express = require("express");
const app = express();
const path = require("path");
const nodemailer = require("nodemailer");
const expressLayouts = require("express-ejs-layouts");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname + "/dist")));
app.use(expressLayouts);
app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render('pages/home')
});
app.get('/about', (req, res) => {
    res.render('pages/about')
})
app.get('/works', (req, res) => {
    res.render('pages/works')
})
app.get('/contact', (req, res) => {
    res.render('pages/contact')
})
app.post("/submit", (req, res) => {
    let output = `<h4>Name</h4><p>${req.body.name}</p><br><h4>Email</h4><p>${req.body.email}</p><br><h4>Message</h4><p>${req.body.message}</p>`;
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASS
        }
      });
      
      const mailOptions = {
        from: 'francesgdev@gmail.com',
        to: 'francesgdev@gmailcom',
        subject: 'Invoices due',
        html: output
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
          res.render('submitted')
        }
      });

});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server Started");
});
