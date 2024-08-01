import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
title: "olivia hu",
description: "Olivia Hu's personal website & portfolio",
keywords: ['olivia', 'hu', 'olivia hu'],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/logo.png" />
			</head>
			<body className='relative font-ebg'>
				<Navbar />
				<Sidebar />
				<main className="mx-auto my-10">
					{children}
				</main>
				{/* <Footer /> */}
			</body>
		</html>
	);
}
