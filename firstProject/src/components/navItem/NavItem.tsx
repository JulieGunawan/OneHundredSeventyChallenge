import { useState } from 'react';
import './NavItem.scss';

type NavItemProps = {
    icon: React.ReactNode;
    children?: React.ReactNode
}
const NavItem = (props:NavItemProps) => {
  const [open, setOpen] = useState(false);
  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>{props.icon}</a>
      {open && props.children}
    </li>
  )
}

export default NavItem;