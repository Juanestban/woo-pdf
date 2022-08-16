import { useState } from 'react';

type IUseToggle = { toggle: boolean; handleToggle: () => void };

export const useToggle = (initialState?: boolean): IUseToggle => {
  const [toggle, setToggle] = useState(!!initialState);

  const handleToggle = () => setToggle(!toggle);

  return { toggle, handleToggle };
};
