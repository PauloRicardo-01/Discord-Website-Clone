import { ReactNode } from 'react';
import { StyledButton, StyledLink } from './styles';

type Props = {
  type: 'button' | 'link';
  to?: string;
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  color?: string;
  backgroundColor?: string;
  fontSize?: string;
  fontFamily?: string;
  className?: string;
  children?: ReactNode;
};

export function Trigger({
  type,
  to,
  width,
  height,
  margin,
  padding,
  color,
  backgroundColor,
  fontSize,
  fontFamily,
  className,
  children,
}: Props) {
  switch (type) {
    case 'button':
      return (
        <StyledButton
          width={width}
          height={height}
          margin={margin}
          padding={padding}
          color={color}
          backgroundColor={backgroundColor}
          fontSize={fontSize}
          fontFamily={fontFamily}
          className={className}
        >
          {children}
        </StyledButton>
      );

    case 'link':
      return (
        <StyledLink
          to={to ?? '/'}
          width={width}
          height={height}
          margin={margin}
          padding={padding}
          color={color}
          backgroundColor={backgroundColor}
          fontFamily={fontFamily}
          fontSize={fontSize}
          className={className}
        >
          {children}
        </StyledLink>
      );
  }
}
