import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/pro-solid-svg-icons";
export default function ProjectLayout({children}) {
    return (
        <>
            <ul className="fixed top-0 left-0 w-full shadow-md z-10 p-4 bg-blue-600">
                <li className="container mx-auto">
                    <Link href="/" className="text-white">
                        <FontAwesomeIcon icon={faHome}/> <span className="font-bold">Home</span>
                    </Link>
                </li>
            </ul>
            <div className="mt-16 container mx-auto">
                {children}
            </div>
        </>
    )
}
