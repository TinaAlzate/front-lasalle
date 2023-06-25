import { Request, Response } from "express";
import { userFormI } from "../interfaces/userFormI";
// import  { sendMail }  from "../../config/emailer";
// import { transporter } from "../config/mailer";
import nodemailer from 'nodemailer';
// import sendMail from "../config/emailer";

export const postUserForm = async (req: Request, res: Response) =>{
    console.log(req.body);
    try {
        const { name, email, phone, company, subject, message }: userFormI = await req.body;


        // const transporter = nodemailer.createTransport({
        //     host: "smtp.gmail.com",
        //     port: 465,
        //     secure: true,
        //     auth: {
        //         user: 'valzate618@gmail.com',
        //         pass: 'holpukgrrruuevyg' // pass proporecionada por Google
        //     }
        // });
        // let messageEmail = {
        //     from: '"Fred Foo 👻" <valzate618@gmail.com>', // sender address
        //     to: "jarestrepot@qvirtual.edu.co", // list of receivers
        //     subject: "Hello ✔", // Subject line
        //     text: "Hello world?", // plain text body
        //     html: "<h2>Hola amor</h2>", // html body
        // }

        // transporter.sendMail(messageEmail)
        //     .then(() =>{
        //         return res.status(200).json({message: 'recived an email'});
        //     })
        //     .catch(()=>{
        //         return res.status(500).json({message: 'Failed to send mail'});
        //         console.log("Failed to send mail")
        //     });
        // sendMail();
        return res.status(200).json({
            msg: "Personal dates for form user",
            data: {
                name,
                email,
                phone,
                company,
                subject,
                message,
            }
        });
    throw new Error('Error form, data incomplete');
    } catch (error: any) {
        res.status(500).json({
            msg: error.message
        });
    }
}

export const getTestForm = (req: Request, res: Response) =>{
    res.status(200).json({
        msg: "get Form",
    });
}

