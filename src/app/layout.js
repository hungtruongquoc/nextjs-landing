import {Inter} from "next/font/google";
import "./globals.css";
// Following lines are needed to prevent the big icon size by default
import '@fortawesome/fontawesome-svg-core/styles.css';
import {config} from '@fortawesome/fontawesome-svg-core';
import GoogleAnalytics from "../components/google_analytics";
import dynamic from "next/dynamic";

// Dynamically import the client component
const NavigationComponent = dynamic(() => import('../components/navigation_component'), {ssr: false});

config.autoAddCss = false; /* eslint-disable import/first */

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "Hung Truong Portfolio",
    description: "Hung Truong's portfolio showcasing projects, skills, and experience as a Senior Software Engineer.",
    keywords: ["Hung Truong", "portfolio", "software engineer", "senior software engineer", "nextjs", "tailwindcss", "nodejs",
        "reactjs", "javascript", "php", "python", "html", "css", "mysql", "postgresql", "aws", "solution", "architecture"],
    robots: ["index", "follow"],
    canonical: "https://www.htruong83.com/home"
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <GoogleAnalytics/>
        <body className={inter.className}>
        <NavigationComponent/>
        <div className="pt-16">
            <div className="container mx-auto">
                {children}
            </div>
        </div>
        </body>
        </html>
);
}
