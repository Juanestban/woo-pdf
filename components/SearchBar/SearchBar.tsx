import { ChangeEvent, FC, useState } from 'react';
import cn from 'classnames';

import s from './SearchBar.module.css';
import { Icon } from '../Icon';
import { ButtonIcon } from '../ButtonIcon';

interface SearchBarProps {
  // props from components
}

const SearchBar: FC<SearchBarProps> = (props) => {
  const [field, setField] = useState('');

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setField(value);
  };

  const handleRemove = () => setField('');

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <Icon
          name="FiSearch"
          className={s.searchIconLeft}
          onFocus={() => alert('mesage')}
          onClick={() => alert('mesage')}
        />
        <input
          type="text"
          className={s.inputSearch}
          value={field}
          onInput={handleChange}
          placeholder="Search using woo pdf"
        />
        <ButtonIcon
          icon="FiX"
          className={cn(s.buttonIconClose, field.length === 0 && s.hidden)}
          variant="ghost"
          onClick={handleRemove}
        />
      </div>
      <ButtonIcon
        icon="FiSearch"
        className={s.buttonIcon}
        variant="primary"
        borderRadius="0px"
      />
    </div>
  );
};

export default SearchBar;
export type { SearchBarProps };
