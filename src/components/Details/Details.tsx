import React, {FC} from 'react';

import MainImg from "../../assets/images/chooseUs/main.png";
import Card1 from "../../assets/images/chooseUs/icon1.png"
import Card2 from "../../assets/images/chooseUs/icon2.png"
import Card3 from "../../assets/images/chooseUs/icon3.png"

const Details: FC = () => {
  return (
    <section className='details'>
      <div className="container">
        <div className="details__banner">
          <h2>Save big with our cheap car rental!</h2>
          <p>
            Top Airports. Local Suppliers. <span>24/7</span> Support.
          </p>
        </div>
      </div>
      <div className="details__choose">
        <div className="details__choose-container">
          <div className="container">
            <img src={MainImg} alt="mainImg"/>
            <div className="details__choose-desc">
              <div className="details__choose-left">
                <h4>Why Choose Us</h4>
                <h2>Best valued deals you will ever find</h2>
                <p>
                  Discover the best deals you'll ever find with our unbeatable
                  offers. We're dedicated to providing you with the best value
                  for your money, so you can enjoy top-quality services and
                  products without breaking the bank. Our deals are designed to
                  give you the ultimate renting experience, so don't miss out on
                  your chance to save big.
                </p>
                <button className='button button--orange'>
                  Find Details &nbsp;
                  <i className="fa-solid fa-angle-right"></i>
                </button>
              </div>
              <div className="details__choose-right">
                <div className="details__choose-card">
                  <img src={Card1} alt="car-img" />
                  <div>
                    <h4>Cross Country Drive</h4>
                    <p>
                      Take your driving experience to the next level with our
                      top-notch vehicles for your cross-country adventures.
                    </p>
                  </div>
                </div>
                <div className="details__choose-card">
                  <img src={Card2} alt="coin-img" />
                  <div>
                    <h4>All Inclusive Pricing</h4>
                    <p>
                      Get everything you need in one convenient, transparent
                      price with our all-inclusive pricing policy.
                    </p>
                  </div>
                </div>
                <div className="details__choose-card">
                  <img src={Card3} alt="coin-img" />
                  <div>
                    <h4>No Hidden Charges</h4>
                    <p>
                      Enjoy peace of mind with our no hidden charges policy. We
                      believe in transparent and honest pricing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
