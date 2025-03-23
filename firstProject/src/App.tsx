import './App.scss'
import DropDownMenu from './components/dropdown/DropDownMenu'
import BellIcon from './components/icons/BellIcon'
import CaretIcon from './components/icons/CaretIcon'
import MessengerIcon from './components/icons/MessengerIcon'
import PlusIcon from './components/icons/PlusIcon'
import NavBar from './components/navBar/NavBar'
import NavItem from './components/navItem/NavItem'

function App() {


  return (
    <>
    <NavBar>
      <NavItem icon={<PlusIcon />} />
      <NavItem icon={<MessengerIcon />} />
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<CaretIcon />}>
        <DropDownMenu />
      </NavItem>
    </NavBar>       
   
    </>
  )
}

export default App
