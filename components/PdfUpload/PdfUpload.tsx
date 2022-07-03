import { FC } from 'react';
import cn from 'classnames';

import s from './PdfUpload.module.css';

interface PdfUploadProps {
  // props from components
}

const PdfUpload: FC<PdfUploadProps> = (props) => {
  const title = "hello, I'm component";

  return <div className={cn(s.container)}>{title}</div>;
};

export default PdfUpload;
export type { PdfUploadProps };
