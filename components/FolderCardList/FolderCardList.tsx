import { FC } from 'react';
import cn from 'classnames';
import { FolderCard } from '@woo-pdf/components/FolderCard';
import { useFolderContext } from '@woo-pdf/contexts';

import s from './FolderCardList.module.css';

interface FolderCardListProps {
  // props from components
}

const FolderCardList: FC<FolderCardListProps> = () => {
  const { folders } = useFolderContext();

  return (
    <section className={cn(s.container)}>
      {folders.map((folder, idx) => (
        <FolderCard key={idx} name={`${folder} - folder name`} />
      ))}
    </section>
  );
};

export default FolderCardList;
export type { FolderCardListProps };
