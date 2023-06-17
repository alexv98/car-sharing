import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {IClient} from "../../types/types";
import {OrderInput} from "./OrderInput";


type OrderFormType = {
  openModal: (e: React.MouseEvent) => void;
}

const OrderForm: FC<OrderFormType> = ({openModal}) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<IClient>({
    mode: "onChange"
  })


  const onSubmit: SubmitHandler<IClient> = (data, event: React.MouseEvent) => {
    alert((JSON.stringify(data)))
    reset()
    openModal(event)
  }

  return (
    <form
      className="client-info__form"
      onSubmit={handleSubmit(onSubmit)}>
      <div className="client-info__col-2">
        <div className='client-info__item'>
          <OrderInput
            id={'firstName'}
            label={'First Name'}
            placeholder={'Enter your first name'}
            type='text'
            required={true}
            register={register}
            error={errors}
            pattern={/^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/}
            />
        </div>

        <div className='client-info__item'>
          <OrderInput
            id={'lastName'}
            label={'Last Name'}
            placeholder={'Enter your last name'}
            type='text'
            required={true}
            register={register}
            error={errors}
            pattern={/^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/}
          />
        </div>
      </div>

      <div className="client-info__col-2">
        <div className='client-info__item'>
          <OrderInput
            id={'phoneNumber'}
            label={'Phone Number'}
            placeholder={'Enter your phone number'}
            type='tel'
            required={true}
            register={register}
            error={errors}
            pattern={/^\d+$/}
            minLength={11}
            maxLength={11}
          />
        </div>

        <div className='client-info__item'>
          <OrderInput
            id={'age'}
            label={'Age'}
            placeholder={'Enter your age from 18'}
            type='number'
            required={true}
            register={register}
            error={errors}
            min={18}
          />
        </div>
      </div>

      <div className="client-info__col-1">
        <div className='client-info__item'>
          <OrderInput
            id={'email'}
            label={'Email'}
            placeholder={'Enter your email'}
            type='email'
            required={true}
            register={register}
            error={errors}
            pattern={/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/}
          />
        </div>
      </div>

      <div className="client-info__col-1">
        <div className='client-info__item'>
          <OrderInput
            id={'address'}
            label={'Address'}
            placeholder={'Enter your address'}
            type='text'
            required={true}
            register={register}
            error={errors}
          />
        </div>
      </div>

      <div className="client-info__col-2">
        <div className='client-info__item'>
          <OrderInput
            id={'city'}
            label={'City'}
            placeholder={'Enter your city'}
            type='text'
            required={true}
            pattern={/^[a-zA-Z]+([ -]*)+[ a-zA-Z]+$/}
            register={register}
            error={errors}
          />
        </div>
        <div className='client-info__item'>
          <OrderInput
            id={'zipcode'}
            label={'Zip code'}
            placeholder={'Enter your zip code'}
            type='text'
            required={true}
            register={register}
            error={errors}
            pattern={/^\d+$/}
            minLength={6}
            maxLength={6}
          />
        </div>
      </div>

      <div className="client-info__checkbox">
        <OrderInput
          id={'sendNews'}
          label={''}
          placeholder={''}
          type={'checkbox'}
          required={false}
          register={register}
          error={errors} />
        <label htmlFor={'sendNews'}>
          Please send me latest news and updates
        </label>
      </div>

      <div className='client-info__footer'>
        <button
          type='submit'
          className='button button--orange client-info__btn-submit'
        >
          Reserve Now</button>
      </div>
    </form>
  );
};

export default OrderForm;
