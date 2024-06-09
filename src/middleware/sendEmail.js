import nodemailer from 'nodemailer';

export const sendEmail = async (options) => {

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'dmf.diogo@gmail.com',
            pass: process.env.PASSWORD
        }
    });

    var mailOptions = {
        from: `dmf.diogo@gmail.com`,
        to: `${options.email}`,
        subject: "Password Reset Request",
        text: options.message   
    }

    await transporter.sendMail(mailOptions);
}