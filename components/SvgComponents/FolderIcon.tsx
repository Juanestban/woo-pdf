import { SVGProps } from 'react';

export const FolderIcon = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    width={34}
    height={34}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M28.334 8.5h-12.75L12.75 5.667H5.667A2.842 2.842 0 0 0 2.834 8.5v5.667h28.333v-2.834A2.842 2.842 0 0 0 28.333 8.5Z"
      fill="#FFA000"
    />
    <path
      d="M28.334 8.5H5.666a2.842 2.842 0 0 0-2.833 2.833V25.5a2.842 2.842 0 0 0 2.833 2.833h22.666a2.842 2.842 0 0 0 2.834-2.833V11.333A2.842 2.842 0 0 0 28.333 8.5Z"
      fill="#FFCA28"
    />
  </svg>
);
