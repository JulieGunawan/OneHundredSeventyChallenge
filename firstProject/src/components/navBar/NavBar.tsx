
import './NavBar.scss';

type NavBarProps = {
    children: React.ReactNode
}
const NavBar = (props:NavBarProps) =>{
    return(
        <nav className="navbar">
            <ul className="navbar-nav">
                {props.children}
            </ul>
        </nav>
    )
}

export default NavBar;