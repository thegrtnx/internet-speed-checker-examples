import { ArrowDownToLine, ArrowUpToLine, Wifi, LocateFixed, Tablet } from "lucide-react";

export default function Home() {
	return (
		<div className="flex items-center justify-center h-[70vh]">
			<div className="grid lg:flex lg:justify-between gap-10">
				<p className="inline-flex items-center">
					<ArrowDownToLine className="mr-1 w-3 h-auto" /> Download
				</p>
				<p className="inline-flex items-center">
					<ArrowUpToLine className="mr-1 w-3 h-auto" />
					Upload
				</p>
				<p className="inline-flex items-center">
					<Wifi className="mr-1 w-3 h-auto" />
					ISP
				</p>

				<p className="inline-flex items-center">
					<LocateFixed className="mr-1 w-3 h-auto" />
					IP
				</p>
				<p className="inline-flex items-center">
					<Tablet className="mr-1 w-3 h-auto" />
					Device
				</p>
			</div>
		</div>
	);
}
