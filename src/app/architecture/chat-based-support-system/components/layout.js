import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFile} from "@fortawesome/pro-solid-svg-icons";

export default function ComponentLayout({children}) {
    return (
        <>
            <div className="my-8">
                <Link href="/architecture/chat-based-support-system">
                    <FontAwesomeIcon icon={faFile}/> Design Overview
                </Link>
            </div>
            <h1 className="font-bold text-4xl my-8" id="components">Components</h1>
            {children}
        </>
    )
}
