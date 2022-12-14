import { FC, PropsWithChildren } from 'react';
import {
  ThemeProvider,
  PdfViewProvider,
  FolderProvider,
} from '@woo-pdf/contexts';
import { Header } from '@woo-pdf/components';

type WrapperProps = PropsWithChildren;

export const Wrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <Header />
      <FolderProvider>
        <PdfViewProvider>{children}</PdfViewProvider>
      </FolderProvider>
    </ThemeProvider>
  );
};
