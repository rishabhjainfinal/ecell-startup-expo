import NextAuth, { NextAuthOptions, Awaitable } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

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

				// console.log(username, password);
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
						_id: "MongooseId",
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
		// Seconds - How long until an idle session expires and is no longer valid.
		maxAge: 30 * 24 * 60 * 60, // 30 days
		generateSessionToken() {
			return Math.random().toString(36).substring(2, 10);
		},
	},
	pages: {
		signIn: "/admin/signin",
		error: "/admin/error",
		// newUser: "/admin/newuser",
	},
	callbacks: {
		async signIn({ user, account }) {
			// console.log("sign in", user, account);
			// send email that user user has logged in
			return true;
		},
		// async jwt({ token, account }) {
		// 	console.log("jwt shit", token, account);
		// 	if (account) {
		// 		token.accessToken = account.access_token;
		// 		// token.id = profile?.id;
		// 	}
		// 	return token;
		// },
		// async session({ session, token }) {
		// 	// Send properties to the client, like an access_token and user id from a provider.
		// 	if (session){
		// 		session.accessToken = token.accessToken;
		// 		session.user?.id = token.id;
		// 		console.log("session :",session,token);
		// 	}

		// 	return session;
		// },
	},
};

export default NextAuth(nextOptions);
