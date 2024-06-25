import   { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="text-orange-500 font-bold text-lg p-2 "
      >
        <IoMenu className='text-3xl  transition transform hover:scale-105'  />
      </button>
      <div className={`${isOpen ? 'block' : 'hidden'} absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg transition ease-in-out duration-200`}>
        <Link to={'/'} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Home</Link>
        <Link to={'/contact'}  className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Contact Us</Link>
        <Link to={'/about'} href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">About Us</Link>
      </div>
    </div>
  );
};

export default Menu;
