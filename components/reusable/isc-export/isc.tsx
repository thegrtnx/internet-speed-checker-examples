"use client";

import React, { useEffect } from "react";
import { ArrowDownToLine, ArrowUpToLine, Wifi, LocateFixed, Tablet } from "lucide-react";
import { useInternetSpeed } from "@/components/library";

const Isc = () => {
	const [startMeasurements, internetSpeed] = useInternetSpeed();

	useEffect(() => {
		// Trigger measurements on component load
		startMeasurements();
	}, [startMeasurements]);

	return (
		<div className="grid lg:flex lg:justify-between gap-10">
			<p className="inline-flex items-center">
				<ArrowDownToLine className="mr-1 w-3 h-auto" />
				{internetSpeed.downloadSpeed} {internetSpeed.downloadUnit}
			</p>
			<p className="inline-flex items-center">
				<ArrowUpToLine className="mr-1 w-3 h-auto" />
				{internetSpeed.uploadSpeed} {internetSpeed.uploadUnit}
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
	);
};

export default Isc;
