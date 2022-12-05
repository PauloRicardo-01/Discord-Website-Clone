import styled from 'styled-components';

export const HomeHeroContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .relative-foreground-1 {
    width: 100%;
    max-width: 880px;
    height: max-content;
    margin-left: -80px;
  }

  @media screen and (min-width: 768px) {
    .relative-foreground-1 {
      display: none;
    }
  }

  @media screen and (min-width: 1024px) {
    align-items: center;
  }
`;

export const HomeHeroContent = styled.div`
  width: 100%;
  padding: 56px 24px;
  display: flex;
  flex-direction: column;

  h1 {
    color: ${(props) => props.theme.colors.white};
    font-family: 'Ginto Nord Black';
    font-weight: 700;
    font-size: 44px;
    font-size: clamp(24px, 5vw, 44px);
    line-height: 95%;
    text-transform: uppercase;
    text-rendering: geometricPrecision;
    margin-bottom: 24px;
  }

  div {
    color: ${(props) => props.theme.colors.white};
    font-size: clamp(16px, 2vw, 20px);
    line-height: 1.625;
  }

  @media screen and (min-width: 768px) {
    padding: 80px 40px 156px;

    h1 {
      margin-bottom: 40px;
      width: 412px;
      font-size: 56px;
    }

    div {
      width: 61.4%;
    }
  }

  @media screen and (min-width: 836px) {
    h1 {
      width: 70%;
      font-size: 56px;
      padding-right: 30px;
    }
  }

  @media screen and (min-width: 1024px) {
    padding: 120px 40px;
    align-items: center;

    h1 {
      margin-bottom: 40px;
      padding: 0;
      width: 100%;
      max-width: 780px;
      text-align: center;
    }

    div {
      width: 100%;
      max-width: 780px;
      text-align: center;
    }
  }
`;

export const HomeHeroButtons = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  color: ${(props) => props.theme.colors.not_quite_black};

  a,
  button {
    padding: 16px 32px;
    max-width: 100%;
    height: max-content;
    border-radius: 28px;
    font-size: 20px;
  }

  a {
    color: ${(props) => props.theme.colors.not_quite_black};
    background-color: ${(props) => props.theme.colors.white};

    svg {
      width: 23px;
      height: 24px;
      margin-left: 0;
    }
  }

  button {
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.not_quite_black};
  }

  @media screen and (min-width: 768px) {
    margin-top: 32px;
  }

  @media screen and (min-width: 1024px) {
    justify-content: center;
  }
`;
