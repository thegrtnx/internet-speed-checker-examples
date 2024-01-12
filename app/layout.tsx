import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/lib/theme-provider";
import { cn } from "@/lib/utils";
import "./globals.css";
import { Topnav } from "@/components/reusable";
import DynamicSeo from "@/lib/DynamicSeo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = DynamicSeo(0);

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={cn("container min-h-screen bg-background max-w-screen-2xl m-auto home font-san antialiased", inter.className)}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange>
					<Topnav />
					<main className="flex flex-col items-center justify-between">{children}</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
