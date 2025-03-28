import { useRef, useState } from "react";
import ChevronIcon from "../icons/ChevronIcon";
import CogIcon from "../icons/CogIcon";
import "./DropDownMenu.scss"
import {CSSTransition} from 'react-transition-group';
import ArrowIcon from "../icons/ArrowIcon";

type DropDownItemProps = {
    children: React.ReactNode;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    goToMenu?: string
}
const DropDownMenu = () =>{
  const [activeMenu, setActiveMenu] = useState('main');
  const nodeRefPrimary = useRef(null);
  const nodeRefSecondary = useRef(null);

  const DropdownItem = (props: DropDownItemProps) =>{
    return (
      <a href="#" className="menu-item" onClick={()=>props.goToMenu && setActiveMenu(props.goToMenu)}>
        {props.leftIcon && <span className="icon-button">{props.leftIcon}</span> }
        {props.children}
        {props.rightIcon && <span className="icon-right">{props.rightIcon}</span>}
      </a>
    )
  }
    
  return(
    <div className="dropdown"  >
      <CSSTransition 
        in={activeMenu === 'main'} 
        nodeRef={nodeRefPrimary}
        unmountOnExit 
        timeout={500} 
        classNames="menu-primary"
      >
        <div className="menu" ref={nodeRefPrimary}>
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem 
            leftIcon={<CogIcon/>} 
            rightIcon={<ChevronIcon/>}
            goToMenu="settings"
          >
                        Settings
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'} 
        nodeRef={nodeRefSecondary}
        unmountOnExit 
        timeout={500} 
        classNames="menu-secondary"
      >
        <div className="menu" ref={nodeRefSecondary}>
          <DropdownItem leftIcon={<ArrowIcon />} goToMenu="main">Settings</DropdownItem>
          <DropdownItem>
                        Settings
          </DropdownItem>
          <DropdownItem>
                        Settings
          </DropdownItem>
          <DropdownItem>
                        Settings
          </DropdownItem>
          <DropdownItem>
                        Settings
          </DropdownItem>
          <DropdownItem>
                        Settings
          </DropdownItem>
          <DropdownItem>
                        Settings
          </DropdownItem>
          <DropdownItem>
                        Settings
          </DropdownItem>
          <DropdownItem>
                        Settings
          </DropdownItem>
        </div>
      </CSSTransition>
    </div>
  )
}

export default DropDownMenu;