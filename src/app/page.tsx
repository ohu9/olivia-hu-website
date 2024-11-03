import { Home } from "@/components/Home";
import About from "@/components/About";
import { Experience, MobileExperience} from "@/components/Experience";
import { Portfolio, MobilePortfolio} from "@/components/Portfolio";
import { Projects, MobileProjects} from "@/components/Projects";
import Contact from "@/components/Contact";
import classNames from "classnames";

export default function Page() {
	return (
		// TO DO: figure out how to make snap scroll work
		<div className="snap-y snap-mandatory overscroll-y-scroll h-[100vh] overscroll-x-none">
			{/* HOME */}
			<section id='home' className="snap-start" />
			<div className="flex flex-row h-[1000px] bg-[#F4F4F5]">
				<Home />
			</div>

			{/* ABOUT */}
			{/* <section id='about' className="snap-start" />
			<div className="flex flex-row h-[1000px] bg-[#6B766E]">
				<About />
			</div> */}

			{/* EXPERIENCE */}
			<section id='experience' className="snap-start" />
			<div className="flex flex-col h-auto bg-zinc-50 pb-36">
				<p className="self-center md:self-end mt-20 md:mt-10 md:mr-[4vw] lg:mr-[7vw] font-playfair tracking-wider lg:text-[90pt] md:text-[65pt] text-[50pt]">
					EXPERIENCE
				</p>
				<Experience />
				<MobileExperience/>
			</div>

			{/* Projects */}
			<section id='projects' className="snap-start" />
			<div className="flex flex-col h-auto bg-[#a38e7a]">
				<Projects />
				<MobileProjects />
			</div>

			{/* CONTACT */}
			<section id='contact' className="snap-start" />
			<div className="flex flex-row h-[1000px] bg-[#EEE9E2]">
				<Contact />
			</div>
		</div>
	);
}
