import { Home } from "@/components/Home";
import { Portfolio, MobilePortfolio} from "@/components/Portfolio";
import Contact from "@/components/Contact";

export default function Page() {
	return (
		<div className="snap-y snap-mandatory overscroll-y-scroll h-[100vh] overscroll-x-none">
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
			<div className="flex flex-col h-[3000px] bg-zinc-50">
				<p className="self-center md:self-end mt-20 md:mt-10 md:mr-[4vw] lg:mr-[7vw] font-playfair tracking-wider lg:text-[90pt] md:text-[65pt] text-[50pt]">
					PORTFOLIO
				</p>
				<Portfolio />
				<MobilePortfolio />
			</div>

			{/* CONTACT */}
			<section id='contact' className="snap-start" />
			<div className="flex flex-row h-[1000px] bg-[#EEE9E2]">
				<Contact />
			</div>
		</div>
	);
}
