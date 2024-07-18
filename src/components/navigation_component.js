'use client'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faTimes} from "@fortawesome/pro-solid-svg-icons";
import Link from "next/link";
import {useCallback, useEffect, useState} from "react";
import {usePathname} from "next/navigation";

export default function NavigationComponent() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const pathname = usePathname()

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const getActiveClass = useCallback((path) => {
        if (!isMounted) return '';
        return pathname === path ? 'border-b-2 border-white' : '';
    }, [isMounted, pathname]);

    if (!isMounted) return null; // Render nothing until mounted

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
                        <button
                            onClick={toggleMenu}
                            className="text-white focus:outline-none"
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={menuOpen}
                        >
                            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg"/>
                        </button>
                    </div>
                    <div className={`md:flex items-center ${menuOpen ? 'block' : 'hidden'}`}>
                        <div className="flex flex-col md:flex-row md:ml-6">
                            <Link href="/architecture" passHref>
                                <span
                                    className={`px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-blue-700 
                                    focus:outline-none focus:ring-2 focus:ring-blue-500 ${getActiveClass('/architecture')}`}
                                    aria-label="Go to Architecture page"
                                    role="link"
                                    tabIndex="0"
                                >
                                    Architecture
                                </span>
                            </Link>
                            <Link href="/knowledge" passHref>
                                <span
                                    className={`px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-blue-700
                                    focus:outline-none focus:ring-2 focus:ring-blue-500 ${getActiveClass('/knowledge')}`}
                                    aria-label="Go to Knowledge page"
                                    role="link"
                                    tabIndex="0"
                                >
                                    Knowledge
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
