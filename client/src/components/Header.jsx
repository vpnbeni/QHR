import { Link } from "react-router-dom";
import logo from "../image/logo_QHR.png";
const Header = () => {
  return (
    <div className="headerContainer">
      <div className="logo">
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navLinks">
        <Link to={"/contact"}>Home</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/contact"}>About Us</Link>
      </div>
      <div className="btn">
        <button> Login</button>
      </div>
    </div>
  );
};

export default Header;
