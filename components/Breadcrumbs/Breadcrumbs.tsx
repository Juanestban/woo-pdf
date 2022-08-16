import { useState, useEffect, FC } from 'react';
import cn from 'classnames';
import { FiChevronRight } from 'react-icons/fi';
import { Button } from '../Button';

import s from './Breadcrumbs.module.css';

interface BreadcrumbsProps {
  // props from components
}

const Breadcrumbs: FC<BreadcrumbsProps> = (props) => {
  const length = 5;
  const [residuos] = useState(
    Array.from({ length }).map((_, idx) =>
      idx === 0 ? '/' : `Folder ${idx + 1}`
    )
  );
  const [bread, setBread] = useState(
    Array.from({ length }).map((_, idx) => `Folder ${idx + 1}`)
  );

  useEffect(() => {
    if (bread.length > 4) {
      const filtered = residuos.filter(
        (_, idx) =>
          idx === 0 ||
          idx === residuos.length - 1 ||
          idx === residuos.length - 2
      );
      setBread(filtered);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={cn(s.container)}>
      {bread.map((foldername, idx) => (
        <div key={idx} className={s.buttonBreadcrumb}>
          <Button variant="ghost">{foldername}</Button>
          {idx + 1 !== bread.length && <FiChevronRight size={20} />}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumbs;
export type { BreadcrumbsProps };
