import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUpRightFromSquare, faBadgeCheck} from "@fortawesome/pro-solid-svg-icons";

export default function CustomerList({customers}) {
    return (
        <>
            {customers.map((customer, index) => (
                <p className="pl-5" key={"customer-" + index}>
                    <a href={customer.url} target="_blank">
                        <FontAwesomeIcon icon={faBadgeCheck}/> {customer.name} <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}/> ({customer.industry})
                    </a>
                </p>
            ))}
        </>
    )
}
