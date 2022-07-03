import { FC } from 'react';
import cn from 'classnames';

import s from './Footer.module.css';

interface FooterProps {
  // props from components
}

const Footer: FC<FooterProps> = (props) => {
  const title = "hello, I'm component";

  return <div className={cn(s.container)}>{title}</div>;
};

export default Footer;
export type { FooterProps };
