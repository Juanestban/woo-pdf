import { FC } from 'react';
import cn from 'classnames';

import s from './Aside.module.css';

interface AsideProps {
  // props from components
}

const Aside: FC<AsideProps> = (props) => {
  const title = "hello, I'm component";

  return <div className={cn(s.container)}>{title}</div>;
};

export default Aside;
export type { AsideProps };
