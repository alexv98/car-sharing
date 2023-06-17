import React, {FC, useState} from 'react';
import {Link} from "react-router-dom";

import Logo from '../../../assets/images/logo/logo.png'


const Navbar: FC = () => {

  const navbarLinks = [
    {name: 'Home', path: '/'},
    {name: 'About', path: '/about'},
    {name: 'Vehicle Models', path: '/models'},
    {name: 'Testimonials', path: '/testimonials'},
    {name: 'Our Team', path: '/team'},
    {name: 'Contact', path: '/contact'},
  ]

  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav>

      {/*mobile*/}
      <div className={`mobile-navbar ${isOpen ? "open-nav" : ""}`}>
        <div
          onClick={() => setIsOpen(false)}
          className="mobile-navbar__close"
        >
          <i className="fa-solid fa-xmark"></i>
        </div>
        <ul className="mobile-navbar__links">
          {
            navbarLinks.map(link =>
              <Link to={link.path}>
                <li key={link.path}>{link.name}</li>
              </Link>
            )
          }
        </ul>
        <div className="navbar__auth_mobile">
          <Link className="navbar__buttons button--transition" to="/">
            Sign In
          </Link>
          <Link className="navbar__buttons button--orange" to="/">
            Register
          </Link>
        </div>
      </div>

      {/*desktop*/}
      <div className="navbar">
        <div className="navbar__img">
          <Link to='/' onClick={() => window.scrollTo(0, 0)}>
            <img src={Logo} alt="logo"/>
          </Link>
        </div>
        <ul className='navbar__links'>
          {
            navbarLinks.map(link =>
              <Link to={link.path}>
                <li key={link.path}>{link.name}</li>
              </Link>
            )
          }
        </ul>
        <div className="navbar__auth">
          <Link className="navbar__buttons button button--transition" to="/">
            Sign In
          </Link>
          <Link className="navbar__buttons button button--orange" to="/">
            Register
          </Link>
        </div>
      </div>

      {/*mobile*/}
      <div
        className="mobile-hamb"
        onClick={() => setIsOpen(true)}
      >
        <i className="fa-solid fa-bars"></i>
      </div>

    </nav>
  );
};

export default Navbar;
