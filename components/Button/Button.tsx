import { FC, DetailedHTMLProps, ButtonHTMLAttributes, forwardRef } from 'react';
import cn from 'classnames';

import s from './Button.module.css';
import { Weight } from '@woo-pdf/models';

type PrimitiveButton = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type VariantButton = 'normal' | 'ghost';

interface ButtonProps extends PrimitiveButton {
  // props from components
  variant?: VariantButton;
  weight?: Weight;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, className, variant = 'normal', weight = 'regular', ...props },
    ref
  ) => {
    const classNameButton = cn(
      s.button,
      s[variant],
      `font-${weight}`,
      className
    );

    return (
      <button ref={ref} className={classNameButton} {...props}>
        {children}
      </button>
    );
  }
) as FC<ButtonProps>;

export default Button;
export type { ButtonProps };
