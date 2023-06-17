import React, {FC} from 'react';
import {ICarProps} from "../../assets/data";
import {Link} from "react-router-dom";

const ModelCard: FC<ICarProps> = (car) => {

  return (
    <div className='model-card'>
      <img src={car.img} alt="modelImg"/>
      <div className="model-card__content">
        <div className="model-card__title">
          <span>{car.model}</span>
          <span>${car.price}</span>
        </div>
        <div className="model-card__subtitle">
          <span>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </span>
          <p>
            per day
          </p>
        </div>
        <div className="model-card__features">
          <span>
            <i className="fa-solid fa-car-side"></i> &nbsp;
            {car.mark}
          </span>
          <span>
            {car.doors}/5 &nbsp;
            <i className="fa-solid fa-car-side"></i>
          </span>
        </div>
        <div className="model-card__features">
          <span>
            <i className="fa-solid fa-car-side"></i>&nbsp;
            Manual
          </span>
          <span>
            {car.fuel} &nbsp;
            <i className="fa-solid fa-car-side"></i>
          </span>
        </div>
      </div>
      <Link onClick={() => window.scrollTo(0, 650)} to='/'>
        <button className='button button--orange'>Book Ride</button>
      </Link>
    </div>
  );
};

export default ModelCard;
