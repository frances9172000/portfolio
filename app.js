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
app.post("/submit", (req, res) => {
    let output = `<h4>Name</h4><p>${req.body.name}</p><br><h4>Email</h4><p>${req.body.email}</p><br><h4>Message</h4><p>${req.body.message}</p>`;
    let transporter = nodemailer.createTransport({
        host: "smtp-mail.outlook.com",
        secureConnection: false,
        port: 587,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS
        },
        tls: {
            ciphers: 'SSLv3'
        }
    });

    let mailOptions = {
        from: '"franceG Portfolio" <francesg@outlook.ph>',
        to: "francesgdev@gmail.com",
        subject: "New message from your Portfolio",
        html: output
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            return console.log(error);
        }
        res.render("submitted");
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server Started");
});
