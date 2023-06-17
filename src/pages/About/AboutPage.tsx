import React, {FC} from 'react';
import PlanTrip from "../../components/PlanTrip/PlanTrip";

import peoples from '../../assets/images/about/about-main.jpg'
import Box1 from '../../assets/images/about/icon1.png'
import Box2 from '../../assets/images/about/icon2.png'
import Box3 from '../../assets/images/about/icon3.png'

const AboutPage: FC = () => {
  return (
    <section className='about'>
      <div className="container">
        <div className="about__content">
          <img src={peoples} alt="peoples"/>
          <div className="about__text">
            <h3>About Company</h3>
            <h2>You start the engine and your adventure begins</h2>
            <p>
              Certain but she but shyness why cottage. Guy the put instrument
              sir entreaties affronting. Pretended exquisite see cordially the
              you. Weeks quiet do vexed or whose. Motionless if no to
              affronting imprudence no precaution. My indulged as disposal
              strongly attended.
            </p>
            <div className="about__boxes">
              <div className="about__box">
                <img src={Box1} alt="car-icon" />
                <span>
                  <h4>20</h4>
                  <p>Car<br/> Types</p>
                </span>
              </div>
              <div className="about__box">
                <img src={Box2} alt="car-icon" />
                <span>
                  <h4>85</h4>
                  <p>Rental<br/> Outlets</p>
                </span>
              </div>
              <div className="about__box">
                <img src={Box3} alt="car-icon" />
                <span>
                  <h4>75</h4>
                  <p>Repair<br/> Shop</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <PlanTrip />
      </div>
    </section>
  );
};

export default AboutPage;
