import React, { useState } from 'react';
import logo from '../assets/asset_1.svg'
import logo2 from '../assets/asset 0.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="p-3 flex bg-white justify-between items-center fixed top-0 left-0 right-0 z-20 shadow-md">
      <a href="#" id="brand" className="flex gap-2 items-center flex-1">
        <img
          className="object-cover max-w-12 max-h-12"
          src={logo2}
          alt="Logo"
        />
        <span className="text-lg font-medium font-display">Bookmarkify</span>
      </a>
      <div id="nav-menu" className="hidden lg:flex gap-12">
        <a href="#" className="font-medium hover:text-primary">
          Pricing
        </a>
        <a href="#" className="font-medium hover:text-primary">
          Docs
        </a>
        <a href="#" className="font-medium hover:text-primary">
          Changelog
        </a>
        <a href="#" className="font-medium hover:text-primary">
          Blogs
        </a>
        <a href="#" className="font-medium hover:text-primary">
          Login
        </a>
      </div>
      <div className="hidden lg:flex flex-1 justify-end">
        <button className="flex gap-2 items-center border border-gray-400 px-6 py-2 rounded-lg hover:border-gray-600">
          <img src={logo} alt="" />
          <span className="font-display font-medium">Best Developers</span>
          <i className="fa-solid fa-arrow-right" />
        </button>
      </div>
      {/* Toggle button for mobile */}
      <button
        className="p-2 lg:hidden"
        onClick={handleMenuToggle}
        aria-label="Toggle Menu"
      >
        <i className="fa-solid fa-bars text-gray-600" />
      </button>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute inset-0 bg-white z-10 flex flex-col justify-center items-center">
          <a href="#" className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg">
            Pricing
          </a>
          <a href="#" className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg">
            Docs
          </a>
          <a href="#" className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg">
            Changelog
          </a>
          <a href="#" className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg">
            Blogs
          </a>
          <a href="#" className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg">
            Login
          </a>
          <button className="mt-6 w-full flex gap-2 items-center  px-6 py-4 rounded-lg hover:bg-gray-50">
            <img src="../assets/asset 1.svg" alt="" />
            <span>Electron Developers</span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
