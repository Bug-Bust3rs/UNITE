import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/Unite__Logo.png';
import { UserRound } from 'lucide-react';

interface NavLink {
  label: string;
  to: string;
}

const Navbar: React.FC = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const navItems: NavLink[] = [
    { label: 'About Us', to: '#' },
    { label: 'Posts', to: '#' },
    { label: 'Services', to: '#' },
    { label: 'Testimonials', to: '#' },
    { label: 'Contact Us', to: '#' },
  ];

  return (
    <nav className="sticky top-0 z-50 py-6 px-20 backdrop-blur-lg ">
      <div className="container px-24 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center ">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" /> 
            <span className="text-[1.5rem] font-bold tracking-tight poppins-semibold ">UNITE</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12 ">
            {navItems.map((item, index) => (
              <li className='hover:text-blue-500 font-semibold text-[1rem]' key={index}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center items-center">
          <button className='mr-16'>
              { <UserRound />}
            </button>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end ml-5">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-slate-100 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li className='hover:text-cyan-500 font-semibold py-4' key={index} >
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <Link to="#" className="py-2 px-3 border rounded-xl">
                Sign In
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
