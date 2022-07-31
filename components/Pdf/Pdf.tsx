import { FC } from 'react';
import cn from 'classnames';
import { usePdfViewContext } from '@woo-pdf/contexts';
import s from './Pdf.module.css';

interface PdfProps {
  // file: File;
}

const Pdf: FC<PdfProps> = () => {
  const { view, page, handleChange } = usePdfViewContext();

  return (
    <div className={cn(s.container)}>
      <div style={{ display: 'flex' }}>
        <button>- previous</button>
        <input
          type="text"
          name=""
          value={page.currentPage}
          onChange={handleChange}
        />
        <button>+ next</button>
      </div>
      {view}
    </div>
  );
};

export default Pdf;
export type { PdfProps };
