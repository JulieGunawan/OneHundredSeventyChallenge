import ChevronIcon from "../icons/ChevronIcon";
import CogIcon from "../icons/CogIcon";
import "./DropDownMenu.scss"

// type DropDownMenuProps = {
//     children: React.ReactNode;
// }

type DropDownItemProps = {
    children: React.ReactNode;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}
const DropDownMenu = () =>{
    const DropdownItem = (props: DropDownItemProps) =>{
        return (
            <a href="#" className="menu-item">
                {props.leftIcon && <span className="icon-button">{props.leftIcon}</span> }
                {props.children}
                {props.rightIcon && <span className="icon-right">{props.rightIcon}</span>}
            </a>
        )
    }
    return(
        <div className="dropdown">
            <DropdownItem>My Profile</DropdownItem>
            <DropdownItem leftIcon={<CogIcon/>} rightIcon={<ChevronIcon/>}>
                Settings
            </DropdownItem>
        </div>
    )
}

export default DropDownMenu;