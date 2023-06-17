import React, {FC} from 'react';
import {useLocation} from "react-router-dom";

const BgCar: FC = () => {
  const location = useLocation()

  return (
    <section className='bg-car'>
      <div className="bg-car__overlay"></div>
      <div className="container">
        <div className="bg-car__content">
          <h3>{location.pathname}</h3>
        </div>
      </div>
    </section>
  );
};

export default BgCar;
