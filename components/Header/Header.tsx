import { FC } from 'react';
import cn from 'classnames';

import s from './Header.module.css';

interface HeaderProps {
  // props from components
}

const Header: FC<HeaderProps> = (props) => {
  const title = "hello, I'm component";

  return <div className={cn(s.container)}>{title}</div>;
};

export default Header;
export type { HeaderProps };
