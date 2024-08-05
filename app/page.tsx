import { Home } from "@/components/Home";
import Portfolio from "@/components/Portfolio";

export default function Page() {
	return (
		<div className="snap-y snap-mandatory overscroll-y-scroll h-[100vh]">
			{/* HOME */}
			<section id='home' className="snap-start" />
			<div className="flex flex-row h-[1000px] bg-[#F4F4F5]">
				<Home />
			</div>

			{/* ABOUT */}
			<section id='about' className="snap-start" />
			<div className="flex flex-row h-[1000px] bg-[#6B766E]">
				
			</div>

			{/* PORTOFLIO */}
			<section id='portfolio' className="snap-start" />
			<div className="flex flex-row h-[1000px] bg-zinc-50">
				<p className="mt-20 md:mt-10 block mx-auto md:absolute md:-right-[5vw] xl:-right-[3vw] font-playfair tracking-wider lg:text-[100pt] md:text-[70pt] text-[50pt]">
					PORTFOLIO
				</p>
				<Portfolio />
			</div>

			{/* CONTACT */}
			<section id='contact' className="snap-start" />
			<div className="flex flex-row h-[1000px] bg-[#EEE9E2]">
				
			</div>
		</div>
	);
}
