import "./MainHeader.scss";
import { NavLink } from "react-router-dom";
import Logo from "./Logo.png";
export default function MainHeader() {
const activeLink='text-white';
const normalLink='';


  return (
    <header id="MainHeader" className="col-12">

      <img id="LogoImg" src={Logo} />
<nav>
  <NavLink to='/' className={({isActive})=> isActive? activeLink:normalLink}><h6>Home</h6></NavLink>
  <NavLink to='/about' className={({isActive})=> isActive? activeLink:normalLink}><h6>About</h6></NavLink>
  <NavLink to='/service' className={({isActive})=> isActive? activeLink:normalLink}><h6>Service</h6></NavLink>
  <NavLink to='/contact' className={({isActive})=> isActive? activeLink:normalLink}><h6>Contact</h6></NavLink>
</nav>

    </header>
  );
}