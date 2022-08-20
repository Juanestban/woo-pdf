import { FC } from 'react';
import cn from 'classnames';
import { usePdfViewContext } from '@woo-pdf/contexts';
import s from './Pdf.module.css';

interface PdfProps {
  // file: File;
}
// warning => advised for delete
const Pdf: FC<PdfProps> = () => {
  const { view, page, handleChange, nextPage, prevPage } = usePdfViewContext();

  return (
    <div className={cn(s.container)}>
      <div style={{ display: 'flex' }}>
        <button onClick={prevPage}>- previous</button>
        <input type="text" value={page.currentPage} onChange={handleChange} />
        <button onClick={nextPage}>+ next</button>
      </div>
      {view}
    </div>
  );
};

export default Pdf;
export type { PdfProps };
