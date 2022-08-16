import { FC, forwardRef } from 'react';
import cn from 'classnames';
import { Button, ButtonProps } from '../Button';
import { Icon, IconsObject, IconProps } from '../Icon';

import s from './ButtonIcon.module.css';

type PrimitiveButtonIcon = Omit<ButtonProps, 'children'> &
  Omit<IconProps, 'name'>;

interface ButtonIconProps extends PrimitiveButtonIcon {
  icon: keyof typeof IconsObject;
}

const ButtonIcon = forwardRef<HTMLButtonElement, ButtonIconProps>(
  ({ icon, size = 20, color, className, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(s.containerButtonIcon, className)}
        {...props}
      >
        <Icon name={icon} size={size} color={color} />
      </Button>
    );
  }
) as FC<ButtonIconProps>;

export default ButtonIcon;
export type { ButtonIconProps };
