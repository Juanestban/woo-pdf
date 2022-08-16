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
  // email
  // firstname
}

const ProfileImage = ({
  size = 25,
  logo,
}: {
  size?: number;
  logo?: string;
}) => (
  <picture className={s.wrapperImage}>
    {logo ? (
      <Image
        src="https://google.com"
        alt="woo-pdf-image-logo"
        sizes={size.toString()}
      />
    ) : (
      <Icon name="FiUser" size={size} />
    )}
  </picture>
);

const UserInfo: FC<UserInfoProps> = ({ username, logo }) => {
  const { toggle, handleToggle } = useToggle();

  return (
    <div className={cn(s.container)}>
      <Button
        className={s.buttonUserInfo}
        variant="ghost"
        onClick={handleToggle}
      >
        <ProfileImage logo={logo} />
      </Button>
      <div className={cn(s.advanceInfoUser, !toggle && s.hidden)}>
        <div className={s.profileContainer}>
          <ProfileImage logo={logo} size={30} />
          <Text>{username}</Text>
        </div>
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
