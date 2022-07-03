import { FC } from 'react';
import cn from 'classnames';

import s from './SearchBar.module.css';

interface SearchBarProps {
  // props from components
}

const SearchBar: FC<SearchBarProps> = (props) => {
  const title = "hello, I'm component";

  return <div className={cn(s.container)}>{title}</div>;
};

export default SearchBar;
export type { SearchBarProps };
