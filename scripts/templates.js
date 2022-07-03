// component => Page
// import type { NextPage } from 'next';

const templateComponent = (nameComponent, typeComponent = 'components') => {
  const conditional = typeComponent === 'components';

  return `${
    conditional
      ? "import { FC } from 'react';"
      : "import type { NextPage } from 'next';"
  }
import cn from 'classnames';

import s from './${nameComponent}.module.css';

interface ${nameComponent}Props {
  // props from components
}

const ${nameComponent}: ${
    conditional ? 'FC' : 'NextPage'
  }<${nameComponent}Props> = (props) => {
  const title = "hello, I'm component";

  return (
    <div className={cn(s.container)}>
      {title}
    </div>
  );
};

export default ${nameComponent};
${conditional ? `export type { ${nameComponent}Props };` : ''}
`;
};

const templateCSS = `.container {
  border: 1px solid #09f;
}`;

module.exports = { templateComponent, templateCSS };
