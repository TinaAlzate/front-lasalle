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
exports.sendMail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
/**
 * Creamos un transporte
 */
const createTrans = () => {
    const transport = nodemailer_1.default.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "f2c98e666efa52",
            pass: "********7899"
        }
    });
    return transport;
};
const sendMail = () => __awaiter(void 0, void 0, void 0, function* () {
    const trasporter = createTrans();
    const information = yield trasporter.sendMail({
        from: '"fred Foo 👻" <valzate@gmail.com>',
        to: "jarestrepot@uqvirtual.edu.co",
        subject: "Bienvenido",
        html: "<h1>Bienvenido amig@</h1>"
    });
    console.log('Message sent: ', information.messageId);
    return;
});
exports.sendMail = sendMail;
