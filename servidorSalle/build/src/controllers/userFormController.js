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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTestForm = exports.postUserForm = void 0;
const mailer_1 = require("../config/mailer");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const postUserForm = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    try {
        const { name, email, phone, company, subject, message } = yield req.body;
        // Ruta de template email (HTML)..
        const filePath = path_1.default.join(__dirname, '..', 'views', 'sendEmail.html');
        const emailTemplate = fs_1.default.readFileSync(filePath, 'utf8');
        mailer_1.transporter.sendMail({
            from: 'valzate618@gmail.com',
            to: `${req.body.email}`,
            subject: `${req.body.subject} 👻👻`,
            text: 'Welcome, thank you for contacting us shortly we will contact you',
            html: `${emailTemplate}`, // html body
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
