import Navbar from "./components/layout/Navbar/Navbar";
import HomePage from "./pages/Home/HomePage";
import Footer from "./components/layout/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import Layout from "./components/layout/Layout";
import AboutPage from "./pages/About/AboutPage";
import VehiclePage from "./pages/Vehicle/VehiclePage";
import TestimonialsPage from "./pages/Testimonials/TestimonialsPage";
import OurTeamPage from "./pages/OurTeam/OurTeamPage";
import ContactPage from "./pages/Contact/ContactPage";
import React from "react";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route element={<Layout />}>
          <Route path='about' element={<AboutPage />} />
          <Route path='models' element={<VehiclePage />} />
          <Route path='testimonials' element={<TestimonialsPage />} />
          <Route path='team' element={<OurTeamPage />} />
          <Route path='contact' element={<ContactPage />} />
        </Route>
        <Route path='*' element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
