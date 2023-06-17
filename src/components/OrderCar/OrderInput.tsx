import React, { FC } from 'react';
import {InputProps} from "../../types/types";

const incorrectInput = 'Incorrect input'

export const OrderInput: FC<InputProps> =
  ({
      id,
      label,
      placeholder,
      type,
      value,
      register,
      required,
      error,
      pattern,
      maxLength,
      minLength,
      min,
      max
    }) => {


    return (
      <>
        <label htmlFor={id}>
          {label}{required && <b>*</b>}
        </label>
        <input
          id={id}
          type={type}
          value={value}
          placeholder={placeholder}
          {...register(id, {
            required: {value: required, message: 'This field is required.'},
            pattern: {value: pattern, message: incorrectInput},
            min: {value: min, message: incorrectInput},
            max: {value: max, message: incorrectInput},
            minLength: {value: minLength, message: incorrectInput},
            maxLength: {value: maxLength, message: incorrectInput},
          })}
        />
        {required && <p className="required-field">{error[id]?.message}</p>}
      </>
    );
  }

