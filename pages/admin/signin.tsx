import Image from "next/image";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import Router from "next/router";

type Props = {};
export default function Signin({}: Props) {
	interface IUserInfo {
		username: string;
		password: string;
	}
	const [userInfo, setUserInfo] = useState<IUserInfo>({
		username: "",
		password: "",
	});
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const res = await signIn("credentials", {
			username: userInfo.username,
			password: userInfo.password,
			redirect: false,
		});
		// if there is no error, redirect to admin page
		if (res?.error == null) {
			Router.replace("/admin");
		} else {
			Router.replace("/admin/error");
		}
	};
	return (
		<div className="flex items-center justify-center bg-gray-200 h-screen">
			<form
				className="flex flex-col gap-4 border w-2/6 h-fit border-gray-300 rounded-md p-4 shadow-md bg-gray-800 dark:bg-gray-200 dark:border-gray-600"
				onSubmit={handleSubmit}
			>
				<div className="imageCointainer w-full flex justify-center">
					<Image
						src="/gold.png"
						alt="logo"
						width={400}
						height={310}
						priority
					/>
				</div>
				<div>
					<label
						htmlFor="username"
						className="block mb-2 text-sm font-medium dark:text-gray-300 text-gray-200"
					>
						Username
					</label>
					<input
						type="text"
						id="username"
						className="bg-gray-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="admin"
						required
						value={userInfo.username}
						onChange={(e) =>
							setUserInfo({
								...userInfo,
								username: e.target.value,
							})
						}
					/>
				</div>
				<div>
					<label
						htmlFor="password"
						className="block mb-2 text-sm font-medium text-gray-200 dark:text-gray-300"
					>
						Password
					</label>
					<input
						type="password"
						id="password"
						className="bg-gray-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="********"
						required
						value={userInfo.password}
						onChange={(e) =>
							setUserInfo({
								...userInfo,
								password: e.target.value,
							})
						}
					/>
				</div>
				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					type="submit"
				>
					submit
				</button>
			</form>
		</div>
	);
}
