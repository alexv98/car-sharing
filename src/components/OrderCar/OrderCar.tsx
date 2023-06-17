import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import {carCityData, carsData} from "../../assets/data";
import OrderForm from "./OrderForm";
import {ICar} from "../../types/types";

const OrderCar: FC = () => {

  //Select form states
  const [carType, setCarType] = useState<ICar>({
    name: '',
    img: ''
  });
  const [pickUp, setPickUp] = useState("");
  const [dropOff, setDropOff] = useState("");
  const [pickTime, setPickTime] = useState("");
  const [dropTime, setDropTime] = useState("");
  const fullInputs = carType && pickUp && dropOff && pickTime && dropTime

  const [successMessage, setSuccessMessage] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)
  const [modal, setModal] = useState(false)
  const openModal = (e: React.MouseEvent) => {
    e.preventDefault()

    //For reserve now button, without click to close or outside modal
    if(fullInputs && !modal) {
      setModal(true)
      setSuccessMessage(false)
      setErrorMessage(false)
    } else if(modal) {
      setModal(false)
      setSuccessMessage(true)
    } else if(!fullInputs) {
      setErrorMessage(true)
    }
  }

  useEffect(() => {
    if(modal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [modal])

  const handleCar = (e: ChangeEvent<HTMLSelectElement>) => {
    const currentCar = carsData.find(item => item.name === e.target.value)
    setCarType(currentCar!)
  }
  const handlePickUp = (e: ChangeEvent<HTMLSelectElement>) => {
    setPickUp(e.target.value)
  }
  const handleDropOff = (e: ChangeEvent<HTMLSelectElement>) => {
    setDropOff(e.target.value)
  }
  const handlePickTime = (e: ChangeEvent<HTMLInputElement>) => {
    setPickTime(e.target.value);
  };
  const handleDropTime = (e: ChangeEvent<HTMLInputElement>) => {
    setDropTime(e.target.value);
  };


  return (
    <>
      <section className="order">
        {/*overlay*/}
        {modal && <div
          onClick={openModal}
          className='modal-overlay'
        ></div>}

        <div className="container">
          <div className="order__content">
            <h3 className='order__title'>Select a car</h3>

            {/*Messages*/}
            {errorMessage && <p className="error-message">
                All fields required!
              <i
                onClick={() => setErrorMessage(false)}
                className="fa-solid fa-xmark"></i>
              </p>}

            {successMessage && <p className="success-message">
                Check your email to confirm an order.{" "}
                <i
                  onClick={() => {setSuccessMessage(false)}}
                  className="fa-solid fa-xmark"></i>
              </p>}

            <form className="car-form">
              <div className='car-form__type'>
                <label>
                  <i className="fa-solid fa-car"></i>
                  &nbsp; Select Your Car Type&nbsp;<b>*</b>
                </label>
                <select value={carType.name} onChange={handleCar}>
                  <option hidden>
                    Select your car type
                  </option>
                  {
                    carsData.map(type =>
                      <option key={type.name} value={type.name}>{type.name}</option>
                    )
                  }
                </select>
              </div>

              <div className='car-form__type'>
                <label>
                  <i className="fa-solid fa-car"></i>
                  &nbsp; Select pick up location&nbsp;<b>*</b>
                </label>
                <select value={pickUp} onChange={handlePickUp}>
                  <option hidden>Select pick up location</option>
                  {
                    carCityData.map(city =>
                      <option key={city} value={city}>{city}</option>
                    )
                  }
                </select>
              </div>

              <div className='car-form__type'>
                <label>
                  <i className="fa-solid fa-car"></i>
                  &nbsp; Select drop off location&nbsp;<b>*</b>
                </label>
                <select value={dropOff} onChange={handleDropOff}>
                  <option hidden>Select drop off location</option>
                  {
                    carCityData.map(city =>
                      <option key={city} value={city}>{city}</option>
                    )
                  }
                </select>
              </div>

              <div className="car-form__time">
                <label htmlFor="picktime">
                  <i className="fa-regular fa-calendar-days "></i> &nbsp;
                  Pick-up&nbsp;<b>*</b>
                </label>
                <input
                  id="picktime"
                  value={pickTime}
                  onChange={handlePickTime}
                  type="date"
                ></input>
              </div>

              <div className="car-form__time">
                <label htmlFor="droptime">
                  <i className="fa-regular fa-calendar-days "></i> &nbsp;
                  Drop-of&nbsp;<b>*</b>
                </label>
                <input
                  id="droptime"
                  value={dropTime}
                  onChange={handleDropTime}
                  type="date"
                ></input>
              </div>
              <button
                type='submit'
                onClick={openModal}
                className='button button--orange car-form__button'
              >Search
              </button>
            </form>
          </div>
        </div>
      </section>


      {/*modal*/}

      {modal &&
      <div className='order-modal'>
        <div className="order-modal__title">
          <h2>Complete Reservation</h2>
          <i onClick={openModal} className="fa-solid fa-xmark"></i>
        </div>
        <div className="order-modal__message">
          <h4>
            <i className="fa-solid fa-circle-info"></i> Upon completing this
            reservation enquiry, you will receive:
          </h4>
          <p>
            Your rental voucher to produce on arrival at the rental desk and a
            toll-free customer support number.
          </p>
        </div>

        <div className="order-modal__car-info">
          <div className="car-info">
            <div className="car-info__date">
              <div className="car-info__current">
                <h3>Location & Date</h3>
                <div className='car-info__item'>
                  <i className="fa-solid fa-location-dot"></i>
                  <div>
                    <h6>Pick-Up Date & Time</h6>
                    <p>
                      {pickTime} /{" "}
                      <input type="time"></input>
                    </p>
                  </div>
                </div>
              </div>
              <div className="car-info__current">
                <div className='car-info__item'>
                  <i className="fa-solid fa-location-dot"></i>
                  <div>
                    <h6>Drop-Off Date & Time</h6>
                    <p>
                      {dropTime} /{" "}
                      <input type="time"></input>
                    </p>
                  </div>
                </div>
              </div>

              <div className="car-info__current">
                <div className='car-info__item'>
                  <i className="fa-solid fa-calendar-days"></i>
                  <div>
                    <h6>Pick-Up Location</h6>
                    <p>{pickUp}</p>
                  </div>
                </div>
              </div>

              <div className="car-info__current">
                <div className='car-info__item'>
                  <i className="fa-solid fa-calendar-days"></i>
                  <div>
                    <h6>Drop-Off Location</h6>
                    <p>{dropOff}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="car-info__car">
              <h3>
                <span>Car - </span> {carType.name}
                {carType.img && <img src={carType.img} alt="car_img" />}
              </h3>
            </div>
          </div>
        </div>

        <div className="order-modal__client-info">
          <div className="client-info">
            <h4>Personal Information</h4>
            <OrderForm openModal={openModal}/>
          </div>
        </div>
      </div>}
    </>
  );
};

export default OrderCar;
