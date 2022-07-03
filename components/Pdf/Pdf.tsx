import { FC } from 'react';
import cn from 'classnames';

import s from './Pdf.module.css';

interface PdfProps {
  // props from components
}

const Pdf: FC<PdfProps> = (props) => {
  const title = "hello, I'm component";

  return <div className={cn(s.container)}>{title}</div>;
};

export default Pdf;
export type { PdfProps };
