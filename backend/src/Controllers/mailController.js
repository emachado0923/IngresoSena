
const nodemailer = require('nodemailer');
const path = require('path')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'encuentrosuroeste@gmail.com',
      pass: 'suroeste12345'
    }
});


const html=(p)=>{}


const SendMail=(persona) => {    
    if( /(.+)@(.+){2,}\.(.+){2,}/.test(persona.correo)){
        
        const mailOptions={
            from: 'encuentrosuroeste@gmail.com',
            to:persona.correo,
            subject: 'Encuentro de dirigentes del suroeste antioqueño.',
            html:html(persona),
            attachments: [{
                filename: 'logo.jpg',
                path: path.resolve('./server/images/logo.jpg'),
                cid: 'unique@kreata.ee'
            }]
        }
        transporter.sendMail(mailOptions);
    }
}

module.exports = {
    SendMail
}