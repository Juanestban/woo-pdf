import { PropsWithChildren, ChangeEvent, useContext } from 'react';
import { usePdfView } from '@woo-pdf/hooks/usePdfView';
import { PdfViewContext } from './PdfViewContext';

interface PdfViewProviderProps extends PropsWithChildren {
  //
}

function PdfViewProvider({ children }: PdfViewProviderProps) {
  const { init, page, goTo, ...restProps } = usePdfView();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    /** do regex here for change the value if this will be only Number, else return to previous value
     * [passing] = 5      =>       [before] = 0    =>    [after]=5
     * [passing] = text   =>       [before] = 5    =>    [after]=5
     */
    goTo?.(Number(value));
  };

  return (
    <PdfViewContext.Provider
      value={{ init, page, handleChange, goTo, ...restProps }}
    >
      {children}
    </PdfViewContext.Provider>
  );
}

const usePdfViewContext = () => useContext(PdfViewContext);

export default PdfViewProvider;
export { usePdfViewContext };
