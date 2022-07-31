import { createContext, ChangeEvent } from 'react';
import {
  CustomHookPdfView,
  INITIAL_STATE_PDF_VIEW,
} from '@woo-pdf/hooks/usePdfView';
import { noop } from '@woo-pdf/utils/mock';

export const PdfViewContext = createContext<
  | Pick<CustomHookPdfView, 'init' | 'view' | 'page' | 'handlePage'> & {
      handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
    }
>({
  init: noop,
  view: <></>,
  page: INITIAL_STATE_PDF_VIEW,
  handlePage: noop,
  handleChange: noop,
});
