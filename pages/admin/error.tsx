import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

type Props = {};

export default function Index({}: Props) {
	return (
		<>
			<h1>error</h1>
			<button
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				onClick={() => signIn()}
			>
				Try signIn again
			</button>
		</>
	);
}
