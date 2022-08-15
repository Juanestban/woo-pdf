import { FC } from 'react';
import cn from 'classnames';
import { FolderCard } from '@woo-pdf/components/FolderCard';
import { useFolderContext } from '@woo-pdf/contexts';
import { Title } from '../Title';

import s from './FolderCardList.module.css';

interface FolderCardListProps {
  // props from components
}

const FolderCardList: FC<FolderCardListProps> = () => {
  const { folders } = useFolderContext();

  return (
    <section className={cn(s.section)}>
      <Title tag="h3" weight="normal" className={s.titleFolder}>
        Folders
      </Title>
      <div className={cn(s.containerFolders)}>
        {folders.map((folder, idx) => (
          <FolderCard key={idx} name={`${folder} - folder name`} />
        ))}
      </div>
    </section>
  );
};

export default FolderCardList;
export type { FolderCardListProps };
