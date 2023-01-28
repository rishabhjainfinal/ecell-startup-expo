import { Address } from "nodemailer/lib/mailer";
import { Interface } from "readline";

// test
export type User = {
	Username: string;
	Email: string;
};

// email

// types for user info in the emails

// wecome email
// password reset email
export type UserInfoEmailTemplate = {
	Username: string;
	Email: string;
	Password?: string | undefined; // new password
};
