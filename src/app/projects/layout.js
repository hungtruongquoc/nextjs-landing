import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/pro-solid-svg-icons";
export default function ProjectLayout({children}) {
    return (
        <>
            <ul>
                <li>
                    <Link href="/" className="text-blue-950">
                        <FontAwesomeIcon icon={faHome}/> Home
                    </Link>
                </li>
            </ul>
            {children}
        </>
)
}
