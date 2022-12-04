import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: min(100%, 1260px);
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.not_quite_black};
  background-color: ${(props) => props.theme.colors.background};
  overflow: hidden;

  svg {
    color: ${(props) => props.theme.colors.white};
  }
`;
