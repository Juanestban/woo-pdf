import { FC } from 'react';
import cn from 'classnames';

import s from './Title.module.css';

interface TitleProps {
  // props from components
}

const Title: FC<TitleProps> = (props) => {
  const title = "hello, I'm component";

  return <div className={cn(s.container)}>{title}</div>;
};

export default Title;
export type { TitleProps };
