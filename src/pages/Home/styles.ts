import styled from 'styled-components';

export const FullHomeContainer = styled.div`
  min-width: 320px;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.background};

  .home-bg {
    display: none;
  }

  @media screen and (min-width: 768px) {
    .home-bg {
      display: flex;
      position: absolute;
      bottom: 0;
    }
  }
`;

export const HomeContainer = styled.div`
  width: min(100%, 1260px);
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.not_quite_black};
  overflow: hidden;
`;
