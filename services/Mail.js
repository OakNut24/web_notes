const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // use TLS
    auth: {
        user: process.env.GMAIL_ACCOUNT_ADDRESS,
        pass: process.env.GMAIL_ACCOUNT_PASSWORD,
    },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false,
        ciphers: 'SSLv3',
    },
});




var registrationMail = {
    from: process.env.GMAIL_ACCOUNT_ADDRESS,
    subject: "Notes Web App Registeration Successful",
    text: "Plaintext version of the message",
    html: "<div><h1>Thanks for signing up to my notes web app</h1><p>This mail is the confirmation of your signing up being successful</p></div>"
};


async function checkSmtpConnection() {
    return await transporter.verify(function (error, success) {
        if (error) {
            return error;
        } else {
            return true;
        }
    });
}

async function sendMailWithSMTP(address,message) { //Generic function for sending emails
    transporter.sendMail({
        from: message.from,
        to: address,
        subject: message.subject,
        // text: registrationMail.text,
        html: message.html,
    }, (err, info) => {
        if (err) {
            console.log("Error sending registeration mail details:");
            console.log(err);
        } else {
            console.log("Successfuly sent registeration mail details:");
            console.log(info.envelope);
            console.log(info.messageId);
        }
    })
}




async function sendRegisterMail(address) {
    const result = await checkSmtpConnection()
        .then((result) => {
            sendMailWithSMTP(address,registrationMail);
        })
        .catch((err) => {
            console.log(err);

        })
}

exports.sendRegisterMail = sendRegisterMail;