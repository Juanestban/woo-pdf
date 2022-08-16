import { FC } from 'react';
import cn from 'classnames';
import { useTheme } from '@woo-pdf/contexts';
import { ButtonIcon } from '../ButtonIcon';
import { Title } from '../Title';
import { SearchBar } from '../SearchBar';
import { UserInfo } from '../UserInfo';

import s from './Header.module.css';

interface HeaderProps {
  // props from components
}

const Header: FC<HeaderProps> = (props) => {
  const { theme, toggleTheme } = useTheme();
  const featureHandleTheme = false;

  return (
    <header className={cn(s.header)}>
      <div className={s.headerLeft}>
        <Title>Woo pdf</Title>
      </div>
      <div className={s.headerCenter}>
        <SearchBar />
      </div>
      <nav className={s.headerRight}>
        {/* improvement */}
        {featureHandleTheme && (
          <ButtonIcon
            icon={theme === 'dark' ? 'FiMoon' : 'FiSun'}
            variant="ghost"
            onClick={toggleTheme}
          />
        )}
        <UserInfo username="Juan Esteban" />
      </nav>
    </header>
  );
};

export default Header;
export type { HeaderProps };
