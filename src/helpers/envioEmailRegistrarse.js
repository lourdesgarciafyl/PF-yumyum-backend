import emailjs from '@emailjs/nodejs';
const envioEmail = () => {
    emailjs.init({
        publicKey: process.env.YOUR_PUBLIC_KEY,
        privateKey: process.env.YOUR_PRIVATE_KEY,
      });
    let templateParams = {
        from_name: 'Yumyum',
        user_name: 'Usuario de test',
        destinatario: 'yumyum.dev.notification@gmail.com',
        message: 'Gracias por usar nuestros servicios. Deseamos que tengas una buena experiencia con nosotros.'
    };
     
    emailjs.send(process.env.YOUR_SERVICE_ID, process.env.YOUR_TEMPLATE_ID, templateParams)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
           console.log('FAILED...', error);
        });
    
  };
  
  export default envioEmail;