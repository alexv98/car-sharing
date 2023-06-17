import React, {FC} from 'react';
import ModelCard from "../../components/ModelCard/ModelCard";
import {carsData} from "../../assets/data";
import {modelImages} from "../../assets/data";

const VehiclePage: FC = () => {
  return (
    <section className='vehicle'>
      <div className="container">
        <div className="vehicle__content">
          <ul className='vehicle__list'>
            {
              carsData.map((car, index) =>
                <li>
                  <ModelCard {...car} img={modelImages[index]}/>
                </li>
              )
            }
          </ul>
        </div>
      </div>
    </section>
  );
};

export default VehiclePage;
