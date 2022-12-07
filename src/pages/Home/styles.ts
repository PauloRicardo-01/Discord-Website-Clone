import styled from 'styled-components';

export const FullHomeContainer = styled.div`
  min-width: 320px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
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

type Props = {
  backgroundColor?: string;
};

export const HomeSection = styled.section<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;

  .container {
    padding: 56px 24px;
    width: 100%;
    max-width: 1260px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    svg {
      margin-top: 24px;
      width: 100%;
      max-width: 678px;
      height: max-content;
    }

    .section-content {
      width: 100%;

      h2 {
        color: ${(props) => props.theme.colors.not_quite_black};
        font-family: 'Ginto Normal Medium';
        font-size: clamp(20px, 4vw, 40px);
        font-weight: 600;
        line-height: 120%;
      }

      div {
        margin-top: 24px;
        font-size: clamp(16px, 2vw, 20px);
        line-height: 1.625;
      }
    }
  }

  &.second-section {
    background-color: ${(props) => props.theme.colors.off_white};
  }

  @media screen and (min-width: 768px) {
    .container {
      padding: 80px 40px;
      flex-direction: row;
      align-items: center;

      &.second-container {
        svg {
          order: 2;
        }
      }

      svg {
        margin-top: 0;
        width: 50%;
      }

      .section-content {
        width: 50%;

        h2 {
          font-size: 48px;
        }
      }
    }
  }

  @media screen and (min-width: 1024px) {
    .container {
      padding: 120px 40px;
      justify-content: space-between;

      svg {
        width: 65%;
      }

      .section-content {
        width: 33%;

        h2 {
          max-width: 360px;
        }
      }
    }
  }
`;

export const LastSection = styled.section`
  padding: 56px 24px;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.off_white};

  .container {
    width: 100%;
    max-width: 1260px;
    display: flex;
    flex-direction: column;

    h2 {
      font-family: 'Ginto Nord Black';
      font-size: clamp(20px, 4vw, 40px);
      font-weight: 800;
      line-height: 95%;
      text-transform: uppercase;
      text-rendering: geometricPrecision;
    }

    div {
      margin-top: 24px;
      font-size: clamp(16px, 2vw, 20px);
      line-height: 1.625;
    }

    svg {
      width: 100%;
      height: max-content;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 80px 40px;

    .container {
      align-items: center;

      h2,
      div {
        max-width: 980px;
        text-align: center;
      }

      svg {
        margin-top: 16px;
      }
    }
  }

  @media screen and (min-width: 768px) {
    padding: 120px 40px 80px;

    .container {
      align-items: center;

      h2,
      div {
        max-width: 980px;
        text-align: center;
      }

      svg {
        margin-top: 16px;
        max-width: 1180px;
      }
    }
  }
`;

export const DownloadSection = styled.div`
  padding: 0 24px 120px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.off_white};

  svg {
    position: absolute;
  }

  h4 {
    margin-top: 30px;
    font-family: 'Ginto Normal Medium';
    font-size: 32px;
    font-weight: 600;
  }

  a {
    width: 100%;
    height: 56px;
    margin-top: 40px;
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.brand};
    border-radius: 28px;
    font-size: 20px;

    svg {
      position: relative;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 0 40px 120px;

    a {
      width: 275px;
    }
  }
`;
