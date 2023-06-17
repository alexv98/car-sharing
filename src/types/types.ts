import { InputHTMLAttributes } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

export interface ICar {
  name: string,
  img: string
}

export interface IClient {
  firstName: string,
  lastName: string,
  phoneNumber: number,
  age: number,
  email: string,
  address: string,
  city: string,
  zipcode: string,
  sendNews?: boolean
  error?: FieldError | undefined
}

type InputType = 'text' | 'email' | 'tel' | 'number' | 'checkbox'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  id: any,
  label: string,
  placeholder: string,
  type: InputType,
  value?: string,
  register: UseFormRegister<IClient>,
  error?: FieldError | undefined

  required?: boolean,
  maxLength?: number,
  minLength?: number,
  min?: number,
  max?: number,
  pattern?: any
}

export interface ICarProps {
  name: string,
  img: string,
  model: string,
  mark: string,
  year: number,
  doors: 3 | 5
  AC: string
  transmission: 'manual' | 'automatic'
  fuel: 'gasoline' | 'diesel' | 'hybrid'
  price: number
}

export type ITeammate = {
  name: string,
  job: string,
  img: string
}
