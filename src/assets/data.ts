import {ICarProps, ITeammate} from "../types/types";

import CarAudi from "./images/cars-big/audia1.jpg";
import CarGolf from "./images/cars-big/golf6.jpg";
import CarToyota from "./images/cars-big/toyotacamry.jpg";
import CarBmw from "./images/cars-big/bmw320.jpg";
import CarMercedes from "./images/cars-big/benz.jpg";
import CarPassat from "./images/cars-big/passatcc.jpg";

import Person1 from '../assets/images/team/1.png'
import Person2 from '../assets/images/team/2.png'
import Person3 from '../assets/images/team/3.png'
import Person4 from '../assets/images/team/4.png'
import Person5 from '../assets/images/team/5.png'
import Person6 from '../assets/images/team/6.png'

import CarImg1 from "../assets/images/cars-big/audi-box.png";
import CarImg2 from "../assets/images/cars-big/golf6-box.png";
import CarImg4 from "../assets/images/cars-big/toyota-box.png";
import CarImg3 from "../assets/images/cars-big/bmw-box.png";
import CarImg5 from "../assets/images/cars-big/benz-box.png";
import CarImg6 from "../assets/images/cars-big/passat-box.png";

export const carsData: ICarProps[] = [
  {
    name: 'Audi A1 S-Line',
    img: CarAudi,
    mark: 'Audi',
    model: 'A1',
    year: 2012,
    doors: 5,
    AC: 'yes',
    transmission: 'manual',
    fuel: 'gasoline',
    price: 45
  },
  {
    name: 'VW Golf 6',
    img: CarGolf,
    mark: 'Volkswagen',
    model: 'Golf 6',
    year: 2008,
    doors: 5,
    AC: 'yes',
    transmission: 'manual',
    fuel: 'diesel',
    price: 37
  },
  {
    name: 'BMW 320 ModernLine',
    img: CarBmw,
    mark: 'BMW',
    model: '320',
    year: 2012,
    doors: 5,
    AC: 'yes',
    transmission: 'manual',
    fuel: 'diesel',
    price: 30
  },
  {
    name: 'Toyota Camry',
    img: CarToyota,
    mark: 'Toyota',
    model: 'Camry',
    year: 2006,
    doors: 5,
    AC: 'yes',
    transmission: 'automatic',
    fuel: 'hybrid',
    price: 35
  },
  {
    name: 'Mercedes-Benz GLK',
    img: CarMercedes,
    mark: 'Mercedes',
    model: 'BENZ GLK',
    year: 2006,
    doors: 5,
    AC: 'yes',
    transmission: 'manual',
    fuel: 'diesel',
    price: 50
  },
  {
    name: 'VW Passat CC',
    img: CarPassat,
    mark: 'Volkswagen',
    model: 'Passat CC',
    year: 2008,
    doors: 5,
    AC: 'yes',
    transmission: 'automatic',
    fuel: 'gasoline',
    price: 25
  },
]

export const carCityData = [
  'Belgrade',
  'Novi Sad',
  'Nis',
  'Kragujevac',
  'Subotica'
]

export const questions = [
  {
    title: 'What is special about comparing rental car deals?',
    body: 'Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies.'
  },
  {
    title: 'How do I find the car rental deals?',
    body: 'You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.'
  },
  {
    title: 'How do I find such low rental car prices?',
    body: 'Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices.'
  }
]

export const modelImages = [
  CarImg1,
  CarImg2,
  CarImg3,
  CarImg4,
  CarImg5,
  CarImg6,
]

export const team: ITeammate[] = [
  { img: Person1, name: "Luke Miller", job: "Salesman" },
  { img: Person2, name: "Michael Diaz", job: "Business Owner" },
  { img: Person3, name: "Briana Ross", job: "Photographer" },
  { img: Person4, name: "Lauren Rivera", job: "Car Detailist" },
  { img: Person5, name: "Martin Rizz", job: "Mechanic" },
  { img: Person6, name: "Caitlyn Hunt", job: "Menager" },
]
