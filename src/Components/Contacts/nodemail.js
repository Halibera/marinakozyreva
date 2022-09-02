//подготовлено под отправку с пропсами




const sendMail = (name, phone) => {
    let nodemailer = require('nodemailer');

    let transporter = nodemailer.createTransport({
        // service: 'gmail',
        // auth: {
        //     user: 'dskmt1@gmail.com',
        //     pass: 'Earthquake1!'
        // }
        host: "mail.u132504.test-handyhost.ru",
        port: 465,
        secure: true,
        auth: {
            user: "adminka@u132504.test-handyhost.ru",
            pass: "adminka11"
        },
        tls: {
            rejectUnauthorized: false
        }

    });

    let mailOptions = {
        from: 'adminka@u132504.test-handyhost.ru',
        to: 'dskmt1@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!' + { name } + { phone }
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    })
}
console.log('1111111111111111111111111111');
export default sendMail;