import { FC, PropsWithChildren } from 'react';
import {
  ThemeProvider,
  PdfViewProvider,
  FolderProvider,
} from '@woo-pdf/contexts';

type WrapperProps = PropsWithChildren;

export const Wrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <FolderProvider>
        <PdfViewProvider>{children}</PdfViewProvider>
      </FolderProvider>
    </ThemeProvider>
  );
};
