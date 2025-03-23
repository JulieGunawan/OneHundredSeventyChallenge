import './App.scss'
import BellIcon from './components/icons/BellIcon'
import MessengerIcon from './components/icons/MessengerIcon'
import PlusIcon from './components/icons/PlusIcon'
import NavBar from './components/navBar/NavBar'
import NavItem from './components/navItem/NavItem'


function App() {


  return (
    <>
    <NavBar>
      <NavItem icon={<PlusIcon />} />
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<MessengerIcon />} />
    </NavBar>       
   
    </>
  )
}

export default App
