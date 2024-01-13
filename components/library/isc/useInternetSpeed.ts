import { useState } from "react";

interface InternetSpeed {
	downloadSpeed: string;
	uploadSpeed: string;
	downloadUnit: string;
	uploadUnit: string;
}

const useInternetSpeed = (): [() => void, InternetSpeed] => {
	const [downloadSpeed, setDownloadSpeed] = useState<number | null>(null);
	const [uploadSpeed, setUploadSpeed] = useState<number | null>(null);

	const convertSpeed = (speed: number | null): { value: number; unit: string } => {
		if (speed === null || speed === 0) {
			return { value: 0, unit: "bps" };
		}

		if (speed > 1e9) {
			return { value: speed / 1e9, unit: "Gbps" };
		} else if (speed > 1e6) {
			return { value: speed / 1e6, unit: "Mbps" };
		} else if (speed > 1e3) {
			return { value: speed / 1e3, unit: "Kbps" };
		} else {
			return { value: speed, unit: "bps" };
		}
	};

	const measureDownloadSpeed = async () => {
		const downloadDataSizeMB = 5; // Adjust this value as needed
		const downloadData = new Array(downloadDataSizeMB * 1024 * 1024).fill("a").join("");

		const startTime = performance.now();

		try {
			const blob = new Blob([downloadData], { type: "application/octet-stream" });
			const url = URL.createObjectURL(blob);

			const response = await fetch(url);
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			const reader = response.body?.getReader();
			if (!reader) {
				throw new Error("ReadableStream not supported.");
			}

			let totalBytes = 0;

			while (true) {
				const { done, value } = await reader.read();

				if (done) {
					break;
				}

				totalBytes += value?.length || 0;
			}

			const endTime = performance.now();
			const durationInSeconds = (endTime - startTime) / 1000;
			const speedBytesPerSecond = totalBytes / durationInSeconds;

			setDownloadSpeed(speedBytesPerSecond);
		} catch (error) {
			setDownloadSpeed(0); // Set to 0 if there's an error (no connection)
			if (error instanceof Error) {
				console.error("Error measuring download speed:", error.message);
			} else {
				console.error("Unknown error type:", error);
			}
		}
	};

	const measureUploadSpeed = async () => {
		const uploadData = new Array(1024 * 1024).fill("a").join("");
		const url = "https://httpbin.org/post";

		const startTime = new Date().getTime();

		try {
			const response = await fetch(url, {
				method: "POST",
				body: uploadData,
			});

			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			const endTime = new Date().getTime();
			const durationInSeconds = (endTime - startTime) / 1000;

			const speedBytesPerSecond = uploadData.length / durationInSeconds;

			setUploadSpeed(speedBytesPerSecond);
		} catch (error) {
			setUploadSpeed(0); // Set to 0 if there's an error (no connection)
			if (error instanceof Error) {
				//console.error("Error measuring upload speed:", error.message);
			} else {
				//console.error("Unknown error type:", error);
			}
		}
	};

	const startMeasurements = () => {
		setInterval(() => {
			measureDownloadSpeed();
			measureUploadSpeed();
		}, 1000);
	};

	const formattedDownloadSpeed = convertSpeed(downloadSpeed);
	const formattedUploadSpeed = convertSpeed(uploadSpeed);

	const internetSpeed: InternetSpeed = {
		downloadSpeed: formattedDownloadSpeed.value.toFixed(2),
		uploadSpeed: formattedUploadSpeed.value.toFixed(2),
		downloadUnit: formattedDownloadSpeed.unit,
		uploadUnit: formattedUploadSpeed.unit,
	};

	return [startMeasurements, internetSpeed];
};

export default useInternetSpeed;
