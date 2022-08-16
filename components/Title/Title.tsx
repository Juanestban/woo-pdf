import {
  createElement,
  forwardRef,
  FC,
  DetailedHTMLProps,
  HTMLAttributes,
} from 'react';
import cn from 'classnames';
import { Weight } from '@woo-pdf/models';

import s from './Title.module.css';

type PrimitiveTitleElement = HTMLHeadingElement;

type PrimitiveTitle = DetailedHTMLProps<
  HTMLAttributes<PrimitiveTitleElement>,
  PrimitiveTitleElement
>;

interface TitleProps extends PrimitiveTitle {
  tag?: 'h1' | 'h2' | 'h3' | 'h4';
  weight?: Weight;
}

const Title = forwardRef<PrimitiveTitle, TitleProps>(
  (
    { tag = 'h2', className, weight = 'semi-bold', children, ...props },
    ref
  ) => {
    const TitlesWrapper = (props: any) =>
      createElement(tag, props, props.children);

    return (
      <TitlesWrapper
        ref={ref}
        className={cn(s.container, `font-${weight}`, className)}
        {...props}
      >
        {children}
      </TitlesWrapper>
    );
  }
) as FC<TitleProps>;

export default Title;
export type { TitleProps };
