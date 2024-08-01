import { Hello, Home } from "@/components/Animations";

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
			<div className="flex flex-row h-[1000px] bg-zinc-100">
				
			</div>

			{/* CONTACT */}
			<section id='contact' className="snap-start" />
			<div className="flex flex-row h-[1000px] bg-[#EEE9E2]">
				
			</div>
		</div>
	);
}
