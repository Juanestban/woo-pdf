import { FC } from 'react';
import cn from 'classnames';

import s from './Folder.module.css';

interface FolderProps {
  // props from components
}

const Folder: FC<FolderProps> = (props) => {
  const title = "hello, I'm component";

  return <div className={cn(s.container)}>{title}</div>;
};

export default Folder;
export type { FolderProps };
