import React, {FC} from 'react';

const PhoneNumber: FC = () => {
  return (
    <section className='phone-number'>
      <div className="phone-number__overlay"></div>
      <div className="container">
        <div className="phone-number__content">
          <h2>Book a car by getting in touch with us</h2>
          <span>
            <i className="fa-solid fa-phone"></i>
            <h3>(123) 456-7869</h3>
          </span>
        </div>
      </div>
    </section>
  );
};

export default PhoneNumber;
