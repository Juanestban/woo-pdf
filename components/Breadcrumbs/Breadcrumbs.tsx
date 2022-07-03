import { FC } from 'react';
import cn from 'classnames';

import s from './Breadcrumbs.module.css';

interface BreadcrumbsProps {
  // props from components
}

const Breadcrumbs: FC<BreadcrumbsProps> = (props) => {
  const title = "hello, I'm component";

  return <div className={cn(s.container)}>{title}</div>;
};

export default Breadcrumbs;
export type { BreadcrumbsProps };
