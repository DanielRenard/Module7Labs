import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MyThemeContext } from "../context/ThemeContext";
import '../styles/navBar.css'

export default function NavBar(){
  const {theme} = useContext(MyThemeContext)

  return (
    <nav className="navbar">
      <ul>
        {/* <li><NavLink to="/">Landing Page</NavLink></li> */}
        <li><NavLink to="/HomePage">HomePage</NavLink></li>
        <li><NavLink to="/BitCoinRates">Bitcoin Rates</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
      </ul>
    </nav>
  )
}