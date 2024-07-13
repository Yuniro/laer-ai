import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GradientButton from './gradientbutton';
import { Hamburger, LaerAILogo } from './icons';
import NavLinks from './navlinks';
import Sidebar from './sidebar';

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // TO HANDLE SCROLL WHEN SIDEBAR IS OPEN 
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add('fixed-screen');
    } else {
      document.body.classList.remove('fixed-screen');
    }
  }, [isSidebarOpen]);
  
  return (
    <>
      <nav className="custom-navbar">
        <Link to="/" className="custom-logo">
          <LaerAILogo color="#180636" />
        </Link>

        <ul className="custom-nav-links">
          <NavLinks />
        </ul>
        <GradientButton>Request Demo</GradientButton>
        <button
          type="button"
          className="custom-hamburger"
          onClick={() => setSidebarOpen(true)}
        >
          <Hamburger />
        </button>
      </nav>
      {/* MOBILE SIDEBAR  */}
      <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
    </>
  );
};

export default Navbar;
