"use client";

import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faTimes} from "@fortawesome/pro-solid-svg-icons";
import {useState} from "react";

export default function HomeLayout({children}) {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <>
            <nav className="bg-blue-600 shadow-md fixed w-full z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="text-xl font-bold text-white">Hung Truong Portfolio</div>
                        </div>
                        <div className="block md:hidden">
                            <button onClick={toggleMenu} className="text-white focus:outline-none">
                                <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg"/>
                            </button>
                        </div>
                        <div className={`md:flex items-center ${menuOpen ? 'block' : 'hidden'}`}>
                            <div className="flex flex-col md:flex-row md:ml-6">
                                <Link href="#introduction">
                                    <span className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-blue-700">Introduction</span>
                                </Link>
                                <Link href="#source-code">
                                    <span className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-blue-700">Source
                                        Code</span>
                                </Link>
                                <Link href="#projects">
                                    <span className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-blue-700">Projects</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="pt-16">
                {children}
            </div>
        </>
    )
}
