import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle} from "@fortawesome/pro-solid-svg-icons";

export default function TechStackList({items, title}) {
    return (
        <ul>
            {title && (<span className="font-medium capitalize">
                <FontAwesomeIcon icon={faCircle} style={{fontSize: ".5rem"}} fixedWidth/>  {title}
            </span>)}
            {items.map((item, index) => (
                <li key={"techstack-" + index}>{item}</li>
            ))}
        </ul>
    )
}
