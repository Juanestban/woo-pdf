import { useState, useEffect, ReactNode, useContext } from 'react';
import { FolderContext } from './FolderContext';

interface FolderProviderProps {
  children: ReactNode;
}

function FolderProvider({ children }: FolderProviderProps) {
  const [folders, setFolders] = useState(Array.from({ length: 7 }).fill('🥝'));

  const handleFolders = () => setFolders([...folders]);

  useEffect(() => {
    //
  }, []);

  return (
    <FolderContext.Provider value={{ folders, handleFolders }}>
      {children}
    </FolderContext.Provider>
  );
}

const useFolderContext = () => useContext(FolderContext);

export default FolderProvider;
export { useFolderContext };
