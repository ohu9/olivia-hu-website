import { Hello, Goat } from "@/components/Animations";

export default function Home() {
	return (
		<div>
			{/* HOME */}
			<div className="flex flex-row h-[100vh] bg-red-100">
				<Hello />
				<Goat />
			</div>

			{/* ABOUT */}
			<div className="flex flex-row h-[100vh] bg-[#6B766E]">
				<Hello />
				<Goat />
			</div>
		</div>
	);
}
