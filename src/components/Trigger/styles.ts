import { Link } from 'react-router-dom';
import styled from 'styled-components';

type Props = {
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  color?: string;
  backgroundColor?: string;
  fontFamily?: string;
  fontSize?: string;
};

export const StyledButton = styled.button<Props>`
  width: ${(props) => props.width ?? 'max-content'};
  height: ${(props) => props.height ?? '38px'};
  margin: ${(props) => props.margin ?? '0'};
  padding: ${(props) => props.padding ?? '0'};
  color: ${(props) => props.color ?? '#000000'};
  background-color: ${(props) => props.backgroundColor ?? '#ffffff'};
  font-family: ${(props) => props.fontFamily ?? 'Whitney Medium'};
  font-size: ${(props) => props.fontSize ?? '0.9rem'};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  border-radius: 40px;
  line-height: 24px;
`;

export const StyledLink = styled(Link)<Props>`
  width: ${(props) => props.width ?? 'max-content'};
  height: ${(props) => props.height ?? '38px'};
  margin: ${(props) => props.margin ?? '0'};
  padding: ${(props) => props.padding ?? '0 16px'};
  color: ${(props) => props.color ?? props.theme.colors.not_quite_black};
  background-color: ${(props) => props.backgroundColor ?? props.theme.colors.not_quite_black};
  font-family: ${(props) => props.fontFamily ?? 'Whitney Medium'};
  font-size: ${(props) => props.fontSize ?? '0.9rem'};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  border-radius: 40px;
  line-height: 24px;
`;
