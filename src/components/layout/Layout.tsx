import React, {FC} from 'react';
import BgCar from "./BgCar/BgCar";
import PhoneNumber from "./PhoneNumber/PhoneNumber";
import {Outlet} from "react-router-dom";

const Layout: FC = () => {
  return (
    <section>
      <BgCar />
      <Outlet />
      <PhoneNumber />
    </section>
  );
};

export default Layout;
