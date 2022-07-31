import { FC, PropsWithChildren } from 'react';
import { ThemeProvider, PdfViewProvider } from '@woo-pdf/contexts';

type WrapperProps = PropsWithChildren;

export const Wrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <PdfViewProvider>{children}</PdfViewProvider>
    </ThemeProvider>
  );
};
