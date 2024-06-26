import { Link } from "react-router-dom";
import logo from "../image/qurilo hr.png";
import Menu from "./Menu";
const Header = () => {
  return (
    <div className="headerContainer flex items-center justify-between  2xl:px-72 xl:px-52 lg:px-36 md:px-32 px-10 py-4  bg-orange-50">
      <div className="logo">
        <Link to={"/"}>
          <img className="max-w-20 md:max-w-24  " src={logo} alt="" />
        </Link>
      </div>
      <div className="navLinks hidden md:block font-bold text-xl">
        <Link to={"/"} className="lg:px-6 px-3">
          Home
        </Link>
        <Link to={"/contact"} className="lg:px-6 px-3">
          Contact
        </Link>
        <Link to={"/about"} className="lg:px-6 px-3">
          About Us
        </Link>
        <Link to={"/template"} className="lg:px-6 px-3">
        Template
        </Link>
      </div>
      <div className="btn hidden md:block">
        <button className="border-0 text-base font-semibold block  hover:bg-sky-700 bg-orange-500 text-white py-2.5 px-7 rounded-3xl">
          Login
        </button>
      </div>
      <div className="block md:hidden">
      <Menu />

      </div>
    
      
    </div>
  );
};

export default Header;
