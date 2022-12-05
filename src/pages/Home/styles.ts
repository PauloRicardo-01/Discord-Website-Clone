import styled from 'styled-components';

export const FullHomeContainer = styled.div`
  min-width: 320px;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.background};
  overflow: hidden;

  .home-bg,
  .absolute-foreground-1,
  .absolute-foreground-2 {
    display: none;
  }

  @media screen and (min-width: 768px) {
    .home-bg,
    .absolute-foreground-2 {
      display: flex;
      position: absolute;
      bottom: 0;
      z-index: 1;
    }

    .home-bg {
      margin-right: 80px;
    }

    .absolute-foreground-2 {
      margin-left: 476px;
    }
  }

  @media screen and (min-width: 1024px) {
    .home-bg {
      margin-right: 0;
    }

    .absolute-foreground-1 {
      display: flex;
      position: absolute;
      bottom: 0;
      z-index: 1;
      margin-right: 1370px;
    }

    .absolute-foreground-2 {
      margin-left: 1356px;
    }
  }
`;

export const HomeContainer = styled.div`
  width: min(100%, 1260px);
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.not_quite_black};
  overflow: hidden;
  z-index: 2;
`;
