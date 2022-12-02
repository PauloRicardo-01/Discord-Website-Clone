import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 100%;
  max-width: 1260px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background};

  svg {
    color: ${(props) => props.theme.colors.white};
  }
`;
