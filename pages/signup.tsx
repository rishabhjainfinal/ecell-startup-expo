import Head from "next/head";
import Image from "next/image";

export default function Signup() {
	return (
		<>
			<Head>
				<title>Sign Up | Ecell - Launchpad</title>
				<meta
					name="description"
					content="Generated by Sign Up | Ecell - Launchpad"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="h-[900px] overflow-hidden">
				<section className="text-gray-800 body-font">
					<div className="container mx-auto">
						<div className="w-full flex flex-wrap">
							<Image
								alt="Background-img"
								className="w-[45%] object-cover object-center"
								src="/registration-bg.png"
								width={400}
								height={400}
							></Image>
							<Image
								alt="Background-img"
								className="absolute left-[201px]"
								src="/launchpad-vertical.png"
								width={500}
								height={500}
							></Image>
							<div className="w-1/2 pt-20 flex flex-col items-center mx-auto">
								<div className="flex flex-col gap-12 w-9/12">
									<div className="sign-up-title text-center font-PTSans text-2xl">
										Sign up to Launchpad StartUp Expo
									</div>
									<div className="flex gap-6 font-PTSans text-white mx-auto">
										<button className="px-6 py-3 rounded bg-[#F44242] flex gap-2 items-center w-[280px] justify-center">
											<Image
												src={"/google-icon.png"}
												width={20}
												height={20}
												alt={"Google-Icon"}
											/>
											<span className="mb-1">
												Signup with Google
											</span>
										</button>
										<button className="px-6 py-3 rounded bg-[#3B5998] flex gap-2 items-center  w-[280px] justify-center">
											<Image
												src={"/facebook-icon.png"}
												width={20}
												height={20}
												alt={"Google-Icon"}
											/>
											<span className="mb-1">
												Signup with Facebook
											</span>
										</button>
									</div>
								</div>
								<div className="relative">
									<p className="font-PTSans mt-8 line-div text-[#686868]">
										Or
									</p>
								</div>
								<div className="w-9/12 border-b-2 border-b-[#686868] pb-12">
									<form
										action="#"
										method="POST"
										className="font-PTSans"
									>
										<div className="w-full ">
											<div className="py-5 ">
												<div className="grid grid-cols-6 gap-6">
													<div className="col-span-6 sm:col-span-3">
														<label
															htmlFor="first-name"
															className="block text-sm font-medium text-gray-700"
														>
															First name
															<sup>*</sup>
														</label>
														<input
															type="text"
															name="first-name"
															id="first-name"
															autoComplete="given-name"
															className="mt-1 block w-full rounded-md border-[1px] font-md px-2 py-1 border-[#7E8488] shadow-sm focus:border-gray-700 focus:ring-gray-700 sm:text-sm outline-none"
														/>
													</div>

													<div className="col-span-6 sm:col-span-3">
														<label
															htmlFor="last-name"
															className="block text-sm font-medium text-gray-700"
														>
															Last name
															<sup>*</sup>
														</label>
														<input
															type="text"
															name="first-name"
															id="first-name"
															autoComplete="given-name"
															className="mt-1 block w-full rounded-md border-[1px] font-md px-2 py-1 border-[#7E8488] shadow-sm focus:border-gray-700 focus:ring-gray-700 sm:text-sm outline-none"
														/>
													</div>

													<div className="col-span-6 sm:col-span-3">
														<label
															htmlFor="email-address"
															className="block text-sm font-medium text-gray-700"
														>
															Email address
															<sup>*</sup>
														</label>
														<input
															type="email"
															name="email-address"
															id="email-address"
															autoComplete="email"
															className="mt-1 block w-full rounded-md border-[1px] font-md px-2 py-1 border-[#7E8488] shadow-sm focus:border-gray-700 focus:ring-gray-700 sm:text-sm outline-none"
															placeholder="john.doe@example.com"
														/>
													</div>

													<div className="col-span-6 sm:col-span-3">
														<label
															htmlFor="country"
															className="block text-sm font-medium text-gray-700"
														>
															Phone
															<sup>*</sup>
														</label>
														<div className="mt-1 flex rounded-md shadow-sm">
															<span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
																+91
															</span>
															<input
																type="text"
																name="company-website"
																id="company-website"
																className="block w-full border-[1px] font-md px-2 py-1 border-[#7E8488] shadow-sm focus:border-gray-700 focus:ring-gray-700 sm:text-sm outline-none rounded-none rounded-r-md"
															/>
														</div>
													</div>

													<div className="col-span-6 sm:col-span-3">
														<label
															htmlFor="street-address"
															className="block text-sm font-medium text-gray-700"
														>
															Gender
															<sup>*</sup>
														</label>
														<select
															id="country"
															name="country"
															autoComplete="country-name"
															className="mt-1 block w-full rounded-md border border-[#7E8488] bg-white py-2 px-3 shadow-sm focus:border-gray-700 focus:outline-none focus:ring-gray-700 sm:text-sm"
														>
															<option>
																Male
															</option>
															<option>
																Female
															</option>
															<option>
																Other
															</option>
														</select>
													</div>

													<div className="col-span-6 sm:col-span-3">
														<label
															htmlFor="street-address"
															className="block text-sm font-medium text-gray-700"
														>
															Position
															<sup>*</sup>
														</label>
														<select
															id="country"
															name="country"
															autoComplete="country-name"
															className="mt-1 block w-full rounded-md border border-[#7E8488] bg-white py-2 px-3 shadow-sm focus:border-gray-700 focus:outline-none focus:ring-gray-800 sm:text-sm"
														>
															<option>
																Position 1
															</option>
															<option>
																Position 2
															</option>
															<option>
																Position 3
															</option>
														</select>
													</div>

													<div className="col-span-6 sm:col-span-3">
														<label
															htmlFor="first-name"
															className="block text-sm font-medium text-gray-700"
														>
															Password
															<sup>*</sup>
														</label>
														<input
															type="password"
															name="first-name"
															id="first-name"
															autoComplete="given-name"
															className="mt-1 block w-full rounded-md border-[1px] font-md px-2 py-1 border-[#7E8488] shadow-sm focus:border-gray-700 focus:ring-gray-700 sm:text-sm outline-none"
															placeholder="8+ characters"
														/>
													</div>

													<div className="col-span-6 sm:col-span-3">
														<label
															htmlFor="last-name"
															className="block text-sm font-medium text-gray-700"
														>
															Confirm Password
															<sup>*</sup>
														</label>
														<input
															type="password"
															name="first-name"
															id="first-name"
															autoComplete="given-name"
															className="mt-1 block w-full rounded-md border-[1px] font-md px-2 py-1 border-[#7E8488] shadow-sm focus:border-gray-700 focus:ring-gray-700 sm:text-sm outline-none"
															placeholder="Password@123"
														/>
													</div>
												</div>
											</div>
											<div className="flex items-start mb-6">
												<div className="flex items-center h-5">
													<input
														id="remember"
														type="checkbox"
														value=""
														className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-[#400E60] dark:ring-offset-gray-800"
														required
													/>
												</div>
												<label
													htmlFor="remember"
													className="ml-2 text-sm font-medium text-[#686868]"
												>
													Creating an account means
													you&apos;re okay with our ,
													<a
														href="#"
														className="text-[#400E60] hover:underline "
													>
														Terms of Service{" "}
													</a>
													<a
														href="#"
														className="text-[#400E60] hover:underline "
													>
														Privacy Policy,{" "}
													</a>
													and our default{" "}
													<a
														href="#"
														className="text-[#400E60] hover:underline "
													>
														Notification Settings.
													</a>
												</label>
											</div>
											<div className="bg-gray-50 py-3 flex justify-between ">
												<button
													type="submit"
													className="inline-flex justify-center rounded-md border border-transparent bg-[#400E60] py-2 px-4 text-sm text-white shadow-sm hover:bg-[#501078] focus:outline-none focus:ring-2 focus:ring-[#501078] focus:ring-offset-2 "
												>
													Create Account
												</button>
												<span>
													Already a member?{" "}
													<a
														href="#"
														className="text-[#400E60] hover:underline "
													>
														Sign In
													</a>
												</span>
											</div>
										</div>
									</form>
								</div>
								<div className="flex justify-between items-center mt-4 w-9/12">
									<span className="">
										English (United States)
									</span>
									<div className="w-5/12 flex justify-between items-center">
										<a
											href="#"
											className="text-[#400E60] hover:underline "
										>
											Help
										</a>
										<a
											href="#"
											className="text-[#400E60] hover:underline "
										>
											Privacy
										</a>
										<a
											href="#"
											className="text-[#400E60] hover:underline "
										>
											Terms
										</a>
									</div>
								</div>
								<div className="flex justify-end w-9/12 mt-8 items-center gap-5">
									Organised by
									<Image
										width={30}
										height={30}
										alt={"E-cell"}
										src={"/logo.png"}
									></Image>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}