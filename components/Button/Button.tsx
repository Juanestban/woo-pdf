import {
  FC,
  DetailedHTMLProps,
  ButtonHTMLAttributes,
  forwardRef,
  CSSProperties,
} from 'react';
import cn from 'classnames';

import s from './Button.module.css';
import { Weight } from '@woo-pdf/models';

type PrimitiveButton = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type VariantButton = 'primary' | 'secondary' | 'ghost' | 'bordered';

interface ButtonProps extends PrimitiveButton {
  variant?: VariantButton;
  weight?: Weight;
  borderRadius?: '0px' | '5px';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = 'primary',
      weight = 'regular',
      borderRadius = '5px',
      ...props
    },
    ref
  ) => {
    const classNameButton = cn(
      s.button,
      s[variant],
      `font-${weight}`,
      className
    );
    const css: CSSProperties = { borderRadius };

    return (
      <button ref={ref} className={classNameButton} style={css} {...props}>
        {children}
      </button>
    );
  }
) as FC<ButtonProps>;

export default Button;
export type { ButtonProps };
