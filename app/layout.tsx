import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import {EB_Garamond, Cormorant, Playfair_Display, Inter} from 'next/font/google'
import classNames from "classnames";

export const metadata: Metadata = {
	title: "olivia hu",
	description: "Olivia Hu's personal website & portfolio",
	keywords: ['olivia', 'hu', 'olivia hu'],
};

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-inter',
})
   
const eb_garamond = EB_Garamond({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-ebg',
})

const cormorant = Cormorant({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-cormorant',
})

const playfair = Playfair_Display({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-playfair',
})


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={classNames("scroll-smooth", `${inter.variable} ${eb_garamond.variable} ${cormorant.variable} ${playfair.variable}`)}>
			<head>
				<link rel="icon" href="/logo.png" />
			</head>
			<body className='relative font-cormorant'>
				<Navbar />
				{/* <Sidebar /> */}
				<main className="">
					{children}
				</main>
				{/* <Footer /> */}
			</body>
		</html>
	);
}
