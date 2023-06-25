import  nodemailer  from 'nodemailer';

/**
 * Creamos un transporte
 */
const createTrans = () =>{
    const transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "f2c98e666efa52",
            pass: "********7899"
        }
    });
    return transport;
}

export const sendMail = async () => {
    const trasporter = createTrans();
    const information = await trasporter.sendMail({
        from: '"fred Foo 👻" <valzate@gmail.com>', //Email de envio
        to: "jarestrepot@uqvirtual.edu.co", // lista de correos a los que se enviara la información
        subject: "Bienvenido",
        html: "<h1>Bienvenido amig@</h1>"
    });

    console.log('Message sent: ', information.messageId);
    return
}
