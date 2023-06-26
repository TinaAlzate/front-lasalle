import { Request, Response } from "express";
import { userFormI } from "../interfaces/userFormI";
import { transporter } from "../config/mailer";
import fs from 'fs';
import path from 'path';

export const postUserForm = async (req: Request, res: Response) =>{
    console.log(req.body);
    try {
        const { name, email, phone, company, subject, message }: userFormI = await req.body;

        // Ruta de template email (HTML)..
        const filePath = path.join(__dirname,'..', 'views', 'sendEmail.html');
        const emailTemplate = fs.readFileSync(filePath, 'utf8');

        transporter.sendMail({
            from: 'valzate618@gmail.com',
            to: `${req.body.email}`,
            subject: `${req.body.subject} 👻👻` ,
            text: 'Welcome, thank you for contacting us shortly we will contact you',
            html: `${ emailTemplate }`, // html body
        }).then(() => {
            console.log('send emails');
        }).catch(err => {
            console.log('Error in send emails');
            throw new Error('Error form, data incomplete');
        });

        return res.status(200).json({
            msg: "Personal dates for user",
            data: {
                name,
                email,
                phone,
                company,
                subject,
                message,
            }
        });
    // throw new Error('Error form, data incomplete');
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

