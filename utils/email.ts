// all email related functions using nodemailer\
import * as nodemailer from "nodemailer";
import { Address } from "nodemailer/lib/mailer";
import { UserInfoEmailTemplate } from "./types";
import * as fs from "fs";

// credentials
const mail: Address | string | undefined = process.env.EmailAccount;
const password: string | undefined = process.env.EmailPassword;

console.log(mail, password);
// // initialize the account SMTP server
const transporter = nodemailer.createTransport({
	host: "smtp.gmail.com",
	port: 587, //  SSL: 465 Port for TLS/STARTTLS: 587
	secure: false, // true for 465, false for other ports
	auth: {
		user: mail, // generated ethereal user
		pass: password, // generated ethereal password
	},
});

async function selectTemplates(
	templateIndex: number,
	userInfo: UserInfoEmailTemplate,
): Promise<[string, string]> {
	// select email template
	// open the emailTemplate folder and select the template
	// based on the templateIndex
	// and return the template
	console.log();
	let template = fs.readFileSync(
		`${__dirname}/emailTemplates/${templateIndex}.txt`,
		{
			encoding: "utf8",
			flag: "r",
		},
	);
	// print the template
	// extract first line of the template as subject
	let templateArray = template.split("\n");

	const subject = templateArray[0].replace("sub: ", "");
	template = templateArray.slice(1).join("\n");

	// console.log(subject)
	// console.log(template);

	// replace the template with the user info
	if (templateIndex === 1) {
		// welcome email
		template = template
			.replace("{{Username}}", userInfo.Username)
			.replace("{{Email}}", userInfo.Email);
	} else if (templateIndex === 2) {
		if (userInfo.Password === undefined) {
			throw new Error("Password is undefined");
		}
		// password reset email
		template = template
			.replace("{{Username}}", userInfo.Username)
			.replace("{{Email}}", userInfo.Email)
			.replace("{{Password}}", userInfo.Password);
	} else {
		// other templates
		template = template
			.replace("{{Username}}", userInfo.Username)
			.replace("{{Email}}", userInfo.Email);
	}
	// console.log(template);

	// and return the template
	return [subject, template];
}

async function sendMailTo(
	to: Address | string,
	templateIndex: number,
	userInfo: UserInfoEmailTemplate,
): Promise<any> {
	// extract email template form with prefilled data templateIndex

	const [subject, html] = await selectTemplates(templateIndex, userInfo);
	console.log(subject);
	console.log(html);
	return new Promise((resolve, reject) => {
		// send mail with defined transport object
		transporter.sendMail(
			{
				from: `"EcellGU" ${mail}`, // sender address
				to: to, // list 	of receivers
				subject: subject, // Subject line
				text: "", // plain text body
				html: html, // html body
			},
			(err, info) => {
				if (err) {
					return reject(err);
				} else {
					console.log(
						`Message sent: ${info.messageId}, to ${to} with template-id:${templateIndex}`,
					);
					return resolve(info);
				}
			},
		);
	});
}

// example
// sendMailTo("rishabhjainfinal@gmail.com", 1, {
// 	Username: "Rishabh Jain",
// 	Email: "rishabhjainfinal@gmail.com",
// })
// 	.then(console.log)
// 	.catch((err) => {
// 		console.log("Error in sending email");
// 		console.log(err);
// 	});

export default sendMailTo;
