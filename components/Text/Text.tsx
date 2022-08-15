import {
  FC,
  createElement,
  DetailedHTMLProps,
  HTMLAttributes,
  forwardRef,
} from 'react';
import cn from 'classnames';
import { Weight } from '@woo-pdf/models';

import s from './Text.module.css';

type PrimitiveElements = HTMLParagraphElement | HTMLSpanElement;

type PrimitiveText = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement | HTMLSpanElement>,
  PrimitiveElements
>;

interface TextProps extends PrimitiveText {
  tag?: 'p' | 'span';
  weight?: Weight;
}

const Text = forwardRef<PrimitiveElements, TextProps>(
  ({ className, tag = 'p', children, weight = 'regular', ...props }, ref) => {
    const WrapperText = (props: any) =>
      createElement<PrimitiveText, PrimitiveElements>(
        tag,
        props,
        props.children
      );

    return (
      <WrapperText
        ref={ref}
        className={cn(s.normalText, `font-${weight}`, className)}
        {...props}
      >
        {children}
      </WrapperText>
    );
  }
) as FC<TextProps>;

export default Text;
export type { TextProps };
