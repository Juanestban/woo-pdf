import { FC } from 'react';
import cn from 'classnames';
import { Text } from '../Text';
import { FolderIcon } from '../SvgComponents';

import s from './FolderCard.module.css';

interface FolderCardProps {
  /** folder name */
  name: string;
}

const FolderCard: FC<FolderCardProps> = ({ name }) => {
  return (
    <div className={cn(s.container)}>
      <div className={s.leading}>
        <FolderIcon />
      </div>
      <div className={s.trailing}>
        <Text className={s.folderName}>{name}</Text>
      </div>
    </div>
  );
};

export default FolderCard;
export type { FolderCardProps };
