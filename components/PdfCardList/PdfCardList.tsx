import { FC } from 'react';
import cn from 'classnames';

import s from './PdfCardList.module.css';

interface PdfCardListProps {
  // props from components
}

const PdfCardList: FC<PdfCardListProps> = (props) => {
  const title = "hello, I'm component";

  return <div className={cn(s.container)}>{title}</div>;
};

export default PdfCardList;
export type { PdfCardListProps };
