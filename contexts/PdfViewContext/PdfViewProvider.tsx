import { PropsWithChildren, ChangeEvent, useContext } from 'react';
import { usePdfView } from '@woo-pdf/hooks/usePdfView';
import { PdfViewContext } from './PdfViewContext';

interface PdfViewProviderProps extends PropsWithChildren {
  //
}

function PdfViewProvider({ children }: PdfViewProviderProps) {
  const { init, view, page, handlePage } = usePdfView();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    handlePage('currentPage', Number(value));
  };

  return (
    <PdfViewContext.Provider
      value={{ init, view, page, handlePage, handleChange }}
    >
      {children}
    </PdfViewContext.Provider>
  );
}

const usePdfViewContext = () => useContext(PdfViewContext);

export default PdfViewProvider;
export { usePdfViewContext };
