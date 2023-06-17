import React, {FC, useEffect, useState} from 'react';

import BgShape from "../../assets/images/hero/hero-bg.png";
import Car from "../../assets/images/hero/main-car.png";
import {Link} from "react-router-dom";

const Header: FC = () => {

  const [scrollBtnIsVisible, setScrollBtnIsVisible] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth'})
  }

  useEffect(() => {
    const pageScroll = () => {
      if(window.pageYOffset > 600) {
        setScrollBtnIsVisible(true)
      } else {
        setScrollBtnIsVisible(false)
      }
    }
    window.addEventListener('scroll', pageScroll)

    return () => window.removeEventListener('scroll', pageScroll)
  })

  return (
    <section className='header'>
      <div className="container">
        <img className='bg-shape' src={BgShape} alt="bg"/>
        <div className='header__content'>
          <div className='header__description'>
            <h4>Plan your trip now</h4>
            <h1>Save <span>big</span> with our car rental</h1>
            <p>Rent the car of your dreams. Unbeatable prices, unlimited miles,
              flexible pick-up options and much more.
            </p>
            <div className="header__buttons">
              <Link
                className="button button--orange home__btn"
                to="/"
              >
                Book Ride &nbsp;<i className="fa-solid fa-circle-check"></i>
              </Link>
              <Link className="button button--black header__btn" to="/">
                Learn More &nbsp;<i className="fa-solid fa-angle-right"></i>
              </Link>
            </div>
          </div>
          <img
            src={Car}
            alt="car-img"
            className="header__car-img"
          />
        </div>
      </div>

      {scrollBtnIsVisible &&
        <div
          onClick={scrollToTop}
          className='scroll-btn'>
          <i className="fa-solid fa-angle-up"></i>
        </div>}
    </section>
  );
};

export default Header;
