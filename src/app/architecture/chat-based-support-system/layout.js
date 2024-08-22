import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFile} from "@fortawesome/pro-solid-svg-icons";

export default function ArchitecturalProjectLayout({children}) {
    return (
        <>
            <div className="my-8">
                {children}
            </div>
        </>
    )
}
