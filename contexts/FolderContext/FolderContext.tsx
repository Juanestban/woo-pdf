import { createContext } from 'react';
import { noop } from '@woo-pdf/utils/mock';

interface IFolderContext {
  folders: any[];
  handleFolders: () => void;
}

export const FolderContext = createContext<IFolderContext>({
  folders: [],
  handleFolders: noop,
});
