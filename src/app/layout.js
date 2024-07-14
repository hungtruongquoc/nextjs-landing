import {Inter} from "next/font/google";
import "./globals.css";
// Following lines are needed to prevent the big icon size by default
import '@fortawesome/fontawesome-svg-core/styles.css';
import {config} from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false; /* eslint-disable import/first */

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "Hung Truong Portfolio",
    description: "Generated by create next app",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={inter.className}>
            {children}
        </body>
        </html>
    );
}
