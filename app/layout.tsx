import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/lib/theme-provider";
import DynamicSeo from "@/lib/DynamicSeo";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Topnav, NavFooter } from "@/components/reusable";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = DynamicSeo(0);

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang="en"
			suppressHydrationWarning>
			<body className={cn("container min-h-screen bg-background max-w-screen-2xl m-auto home font-san antialiased lg:px-40", inter.className)}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange>
					<Topnav />
					<main className="flex flex-col items-center justify-between">
						{children}
						<SpeedInsights />
					</main>
					<NavFooter />
				</ThemeProvider>
			</body>
		</html>
	);
}
