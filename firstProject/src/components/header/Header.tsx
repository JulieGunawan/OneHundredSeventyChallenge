import DropDownMenu from "../dropdown/DropDownMenu"
import BellIcon from "../icons/BellIcon"
import CaretIcon from "../icons/CaretIcon"
import MessengerIcon from "../icons/MessengerIcon"
import PlusIcon from "../icons/PlusIcon"
import NavBar from "../navBar/NavBar"
import NavItem from "../navItem/NavItem"
import './Header.scss'
import logo from '../../assets/react.svg'

const Header = () =>{
  return (
    <header className="header">
      <img src={logo} alt="logo" />
      <NavBar>
        <NavItem icon={<PlusIcon />} />
        <NavItem icon={<MessengerIcon />} />
        <NavItem icon={<BellIcon />} />
        <NavItem icon={<CaretIcon />}>
          <DropDownMenu />
        </NavItem>
      </NavBar> 
      
    </header>
  )
}

export default Header;