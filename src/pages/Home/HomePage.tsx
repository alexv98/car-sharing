import React, {FC} from 'react';
import Header from "../../components/Header/Header";
import OrderCar from "../../components/OrderCar/OrderCar";
import PlanTrip from "../../components/PlanTrip/PlanTrip";
import PickModels from "../../components/PickModels/PickModels";
import Details from "../../components/Details/Details";
import Testimonials from "../../components/Testimonials/Testimonials";
import Faq from "../../components/Faq/Faq";
import Download from "../../components/Download/Download";

const HomePage: FC = () => {

  return (
    <>
      <Header />
      <OrderCar />
      <PlanTrip />
      <PickModels />
      <Details />
      <Testimonials />
      <Faq />
      <Download />
    </>
  );
};

export default HomePage;
