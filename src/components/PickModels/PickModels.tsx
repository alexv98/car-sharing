import React, {FC, useEffect, useState} from 'react';
import {carsData} from "../../assets/data";
import {ICarProps} from "../../types/types";
import Loader from "../Loader/Loader";

const PickModels: FC = () => {

  const [activeCar, setActiveCar] = useState<ICarProps>(carsData[0])
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    new Promise(resolve => {
      setLoader(true)
      setTimeout(() => resolve(setLoader(false)), 500)
    })
  }, [activeCar])

  const goToForm = () => {
    window.scrollTo({ top: 650, left: 0, behavior: 'smooth'})
  }

  return (
    <div className='pick-models'>
      <div className="container">
        <div className="pick-models__content">
          <div className="pick-models__title">
            <h3>Vehicle Models</h3>
            <h2>Our rental fleet</h2>
            <p>
              Choose from a variety of our amazing vehicles to rent for your
              next adventure or business trip
            </p>
          </div>
          <div className="pick-models__cars">
            <ul className='pick-models__cars-list'>
              {
                carsData.map(car =>
                  <li
                    key={car.name}
                    className={car === activeCar ? 'active' : ''}
                    onClick={() => setActiveCar(car)}
                  >{car.name}</li>
                )
              }
            </ul>
            {
              loader
                ? <div className='loader'><Loader /></div>
                : <img src={activeCar.img} alt='car'/>
            }
            <div className="pick-models__options">
              <div className="pick-models__options-price">
                <span>${activeCar.price}</span>/ rent per day
              </div>
              <ul className="pick-models__options-list">
                {
                  Object.entries<ICarProps>(activeCar)
                    .map(([key, value]) => {
                      if(key !== 'name' && key !== 'img') {
                        return (
                          <li key={value}>
                            <span>{key}</span>
                            <span>{value}</span>
                          </li>
                        )
                      }
                    })
                }
              </ul>
              <button
                className='button button--orange pick-models__btn'
                onClick={goToForm}>
                reserve now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickModels;
