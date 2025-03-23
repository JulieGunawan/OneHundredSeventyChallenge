import './NavItem.scss';

type NavItemProps = {
    icon: React.ReactNode
}
const NavItem = (props:NavItemProps) => {
    return (
        <li className="nav-item">
            <a href="#" className="icon-button">{props.icon}</a>
        </li>
    )
}

export default NavItem;