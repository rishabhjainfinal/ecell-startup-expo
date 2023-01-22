import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextApiRequest, NextApiResponse } from "next";

const nextOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: "Username and Password",
			credentials: {
				// username: { label: "Username", type: "text", placeholder: "admin" },
				// password: { label: "Password", type: "password" },
			},
			authorize: async (credentials) => {
				const { username, password } = credentials as {
					username: string;
					password: string;
				};

				console.log(username, password);
				// Add logic here to look up the user from the credentials supplied
				// if (username !== process.env.ADMIN_USERNAME || password !== process.env.ADMIN_PASSWORD) {
				//     // Any object returned will be saved in `user` property of the JWT
				//     return new Error("Invalid username or password")
				// }

				if (
					username === process.env.ADMIN_USERNAME &&
					password === process.env.ADMIN_PASSWORD
				) {
					console.log("success");
					return {
						id: "1",
						name: "Admin",
						email: "admin@localhost",
						// generate gandomm 2 digit number
						image: `https://avatars.githubusercontent.com/u/10163${Math.floor(
							Math.random() * 100,
						)}?v=4`,
					};
				} else {
					// console.log('fail value')
					throw new Error("Invalid Username or Password");
				}
			},
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
	session: {
		strategy: "jwt",
	},
	pages: {
		signIn: "/admin/signin",
		// signOut: "/admin/signout",
	},
};

export default NextAuth(nextOptions);
