import { FC } from 'react';
import Image from 'next/image';
import cn from 'classnames';
import { Icon } from '../Icon';
import { Button } from '../Button';
import { useToggle } from '@woo-pdf/hooks/useToggle';
import { Text } from '../Text';

import s from './UserInfo.module.css';

interface UserInfoProps {
  logo?: string;
  username: string;
}

const UserInfo: FC<UserInfoProps> = ({ username, logo }) => {
  const { toggle, handleToggle } = useToggle();

  return (
    <div className={cn(s.container)}>
      <Button
        className={s.buttonUserInfo}
        variant="ghost"
        onClick={handleToggle}
      >
        <picture className={s.wrapperImage}>
          {logo ? (
            <Image src="https://google.com" alt="woo-pdf-image-logo" />
          ) : (
            <Icon name="FiUser" size={25} />
          )}
        </picture>
      </Button>
      <div className={cn(s.advanceInfoUser, !toggle && s.hidden)}>
        <Text>{username}</Text>
        <ul>
          <li>
            <Button variant="bordered">
              <Icon name="FiLogOut" className={s.iconLogout} />
              sign out
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserInfo;
export type { UserInfoProps };
