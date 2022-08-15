import {
  FC,
  createElement,
  DetailedHTMLProps,
  HTMLAttributes,
  forwardRef,
} from 'react';
import cn from 'classnames';

import s from './Text.module.css';

type PrimitiveElements = HTMLParagraphElement | HTMLSpanElement;

type PrimitiveText = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement | HTMLSpanElement>,
  PrimitiveElements
>;

interface TextProps extends PrimitiveText {
  tag?: 'p' | 'span';
}

const Text = forwardRef<PrimitiveElements, TextProps>(
  ({ className, tag = 'p', children, ...props }, ref) => {
    const WrapperText = (props: any) =>
      createElement<PrimitiveText, PrimitiveElements>(
        tag,
        props,
        props.children
      );

    return (
      <WrapperText ref={ref} className={cn(s.normalText, className)} {...props}>
        {children}
      </WrapperText>
    );
  }
) as FC<TextProps>;

export default Text;
export type { TextProps };
