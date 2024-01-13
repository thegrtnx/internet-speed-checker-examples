import { ModeToggle } from "@/lib/mode-toggler";
import { ArrowUpDown } from "lucide-react";

const Topnav = () => {
	return (
		<section className="flex justify-between items-center">
			<p className="text-left text-zinc-400 font-light text-xs inline-flex items-center">
				<ArrowUpDown className="mr-1 w-3 h-auto" /> Internet Speed Checker
			</p>
			<ModeToggle />
		</section>
	);
};

export default Topnav;
