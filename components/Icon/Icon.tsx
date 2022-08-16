import { FC, ComponentProps } from 'react';
import { IconType } from 'react-icons';
import * as iconsComponent from 'react-icons/fi';
import cn from 'classnames';

const IconsObject = { ...iconsComponent };

interface IconProps extends ComponentProps<IconType> {
  // props from components
  name: keyof typeof IconsObject;
  size?: number;
  color?: string;
}

const Icon: FC<IconProps> = ({
  name,
  size = 20,
  className,
  color,
  ...props
}) => {
  const WrapperIcon = IconsObject[name];

  return (
    <WrapperIcon
      size={size}
      color={color}
      className={cn(className)}
      {...props}
    />
  );
};

export default Icon;
export { IconsObject };
export type { IconProps };
