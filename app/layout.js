import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "./(components)/NavBar";

// import font-awesome rendering fixes
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

// turn off autoAddCss
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Next.js Ticketing App",
	description: "by @wjbetech",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="flex flex-col h-screen max-h-screen">
					<NavBar />
					<div className="flex-grow overflow-y-auto bg-page text-text px-20 w-full margin-auto justify-center">
						{children}
					</div>
				</div>
			</body>
		</html>
	);
}
