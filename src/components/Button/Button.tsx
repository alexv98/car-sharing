import React, {FC, ButtonHTMLAttributes} from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

const Button: FC<ButtonProps> = (props) => {

  const {
    className,
    children,
    ...otherProps
  } = props

  return (
    <button
    type='button'
    className={className}
    {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
