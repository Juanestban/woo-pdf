import { FC } from 'react';
import cn from 'classnames';

import s from './PdfCard.module.css';

interface PdfCardProps {
  // props from components
}

const PdfCard: FC<PdfCardProps> = (props) => {
  const title = "hello, I'm component";

  return <div className={cn(s.container)}>{title}</div>;
};

export default PdfCard;
export type { PdfCardProps };
