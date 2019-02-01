const nodemailer = require('nodemailer');

module.exports = (formulario) => {
   var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
      user: 'david.luna.fernandez@gmail.com', // Cambialo por tu email
      pass: 'd992d992daki' // Cambialo por tu password
      }
   });
   const mailOptions = {
      from: formulario.name + ' 👻 <${formulario.email}>',
      to: 'david.luna.fernandez@gmail.com', // Cambia esta parte por el destinatario
      subject: formulario.subject,
      html: 'mail from' + formulario.mail
   };

   transporter.sendMail(mailOptions, function (err, info) {
   if (err)
   console.log(err)
   else
   console.log(info);
   });
}