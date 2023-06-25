"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTestForm = exports.postUserForm = void 0;
// import sendMail from "../config/emailer";
const postUserForm = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    try {
        const { name, email, phone, company, subject, message } = yield req.body;
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
    }
    catch (error) {
        res.status(500).json({
            msg: error.message
        });
    }
});
exports.postUserForm = postUserForm;
const getTestForm = (req, res) => {
    res.status(200).json({
        msg: "get Form",
    });
};
exports.getTestForm = getTestForm;
