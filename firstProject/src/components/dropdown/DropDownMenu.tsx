import { useState } from "react";
import ChevronIcon from "../icons/ChevronIcon";
import CogIcon from "../icons/CogIcon";
import "./DropDownMenu.scss"
import {CSSTransition} from 'react-transition-group';

type DropDownItemProps = {
    children: React.ReactNode;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}
const DropDownMenu = () =>{
    const [activeMenu, setActiveMenu] = useState('main');

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
            <CSSTransition 
                in={activeMenu === 'main'} 
                unmountOnExit 
                timeout={500} 
                classNames="menu-primary"
            >
                <div className="menu">
                    <DropdownItem>My Profile</DropdownItem>
                    <DropdownItem leftIcon={<CogIcon/>} rightIcon={<ChevronIcon/>}>
                        Settings
                    </DropdownItem>
                </div>
            </CSSTransition>
        </div>
    )
}

export default DropDownMenu;