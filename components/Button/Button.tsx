import { FC } from 'react';
import cn from 'classnames';

import s from './Button.module.css';

interface ButtonProps {
  // props from components
}

const Button: FC<ButtonProps> = (props) => {
  const title = "hello, I'm component";

  return <div className={cn(s.container)}>{title}</div>;
};

export default Button;
export type { ButtonProps };
