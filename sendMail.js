const nodemailer = require('nodemailer');
require('dotenv').config();

//configurando o nodemailer com nossas credenciais
const transporter = nodemailer.createTransport({
  service: 'gmail', 
  host: 'smtp.gmail.com',
  port: 465, // pode ser a 587 mas essa não é segura, teria que colocar secure: false
  secure: true,
  auth: {
    user: process.env.USER,
    pass: process.env.APP_PASSWORD,
  },
});

//config para onde estamos enviando, o que estamos enviando e daonde estamos configurando
const mailOptions = {
  from: {
    name: 'Teste Fernanda',
    address: process.env.USER
  }, 
  to: ["fernandadias709@gmail.com"],
  subject: 'Send email from GMAIL SMTP', //assunto do email
  text: 'Send email from GMAIL SMTP', //corpo do email texto
  html: '<b>Hello world!<b>' //corpo do email html
};

// função para envio de email
const sendMail = async (transporter, mailOptions) => {
  try {
    await transporter.sendMail(mailOptions);
    console.log('Email has been sent.');
  } catch (error) {
    console.log(error);
  }
};

sendMail(transporter, mailOptions);