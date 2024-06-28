import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Головна</NavLink></li>
        <li><NavLink to="/about" >Про нас</NavLink></li>
        <li><NavLink to="/contact">Контакти</NavLink></li>
        <li><NavLink to="/login">Логін</NavLink></li>
        <li><NavLink to="/registration">Реєстрація</NavLink></li>
      </ul>
    </nav >
  )
}

export default Navbar