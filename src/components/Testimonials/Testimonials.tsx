import React, {FC} from 'react';
import Harry from '../../assets/images/testimonials/pfp1.jpg'
import Ron from '../../assets/images/testimonials/pfp2.jpg'


const Testimonials: FC = () => {
  return (
    <section className='testimonials'>
      <div className="container">
        <div className="testimonials__content">
          <div className="testimonials__title">
            <h4>Reviewed by People</h4>
            <h2>Client's Testimonials</h2>
            <p>
              Discover the positive impact we've made on the our clients by
              reading through their testimonials. Our clients have experienced
              our service and results, and they're eager to share their
              positive experiences with you.
            </p>
          </div>
        </div>
        <div className="testimonials__cards">
          <div className="testimonials-card">
            <p>
              "We rented a car from this website and had an amazing
              experience! The booking was easy and the rental rates were
              very affordable. "
            </p>
            <div className='testimonials-card__wrapper'>
              <div className='testimonials-card__user'>
                <img src={Harry} alt="user_img" />
                <div>
                  <h4>Parry Hotter</h4>
                  <p>Belgrade</p>
                </div>
              </div>
              <div className="testimonials-card__quotes-icon">
                <i className="fa-solid fa-quote-right"></i>
              </div>
            </div>
          </div>
          <div className="testimonials-card">
            <p>
              "The car was in great condition and made our trip even better.
              Highly recommend for this car rental website!"
            </p>
            <div className='testimonials-card__wrapper'>
              <div className='testimonials-card__user'>
                <img src={Ron} alt="user_img" />
                <div>
                  <h4>Ron Rizzly</h4>
                  <p>Novi Sad</p>
                </div>
              </div>
              <div className="testimonials-card__quotes-icon">
                <i className="fa-solid fa-quote-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
