'use client'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faTimes} from "@fortawesome/pro-solid-svg-icons";
import Link from "next/link";
import {useState} from "react";

export default function NavigationComponent() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="bg-blue-600 shadow-md fixed w-full z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link className="text-xl font-bold text-white" href="/">
                            Hung Truong Portfolio
                        </Link>
                    </div>
                    <div className="block md:hidden">
                        <button onClick={toggleMenu} className="text-white focus:outline-none">
                            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg"/>
                        </button>
                    </div>
                    <div className={`md:flex items-center ${menuOpen ? 'block' : 'hidden'}`}>
                        <div className="flex flex-col md:flex-row md:ml-6">
                            <Link href="/knowledge">
                                <span
                                    className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-blue-700">Knowledge</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
