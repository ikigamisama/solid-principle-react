import ThemeProvider from "@/lib/ThemeProvider";
import "./globals.css";
import type { Metadata } from "next";

import Header from "@/components/Header";
import { inter } from "@/lib/fonts";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
	title: "SOLID Principle in ReactJS By Ikigami",
	description:
		"SOLID is an acronym for five design principles that aim to make software development more maintainable, scalable, and easier to understand. ",
	themeColor: "black",
	openGraph: {
		title: "SOLID Principle in ReactJS By Ikigami",
		description:
			"SOLID is an acronym for five design principles that aim to make software development more maintainable, scalable, and easier to understand. ",
		url: "https://solid-principle-react.vercel.app",
		images: ["https://solid-principle-react.vercel.app/img/main-banner.png"],
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<head />
			<body className={inter.className}>
				<ThemeProvider attribute='class' defaultTheme='system' enableSystem>
					<Header />
					<main className='mx-auto mt-16 max-w-screen-xl py-12 lg:py-8 relative z-20'>
						<div className='relative z-20 w-full mx-auto'>
							<Navbar />
						</div>
						<section className='relative xl:absolute z-20 left-0 xl:left-[18rem] w-full xl:w-[61rem]'>
							<div className='px-8 xl:px-0'>{children}</div>
						</section>
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
