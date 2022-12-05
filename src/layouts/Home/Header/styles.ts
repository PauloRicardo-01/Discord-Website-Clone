import styled from 'styled-components';

type Props = {
  slide?: boolean;
};

export const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  padding: 0 24px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    color: ${(props) => props.theme.colors.white};
  }

  @media screen and (min-width: 768px) {
    padding: 0 40px;
  }
`;

export const MobileButtonContainer = styled.div`
  width: 124px;
  display: flex;
  justify-content: flex-end;
  gap: 16px;

  a {
    color: ${(props) => props.theme.colors.not_quite_black};
    font-family: 'Whitney Light';
    font-weight: 600;
    font-size: 14px;
  }

  button {
    width: 40px;
    height: 40px;
    display: block;
    background-color: transparent;
    border: none;
  }

  @media screen and (min-width: 1024px) {
    button {
      display: none;
    }
  }
`;

export const DesktopMenu = styled.nav`
  height: 100%;
  flex-grow: 1;
  display: none;
  align-items: center;
  justify-content: center;
  gap: 20px;

  a {
    padding: 10px;
    color: ${(props) => props.theme.colors.white};
    font-family: 'Whitney medium';
    font-weight: 500;

    :hover {
      text-decoration: underline;
    }
  }

  @media screen and (min-width: 1024px) {
    display: flex;
  }
`;

export const MobileMenuOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  display: none;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const MobileMenu = styled.div<Props>`
  min-width: 330px;
  width: 330px;
  height: 100vh;
  padding: 24px 48px 120px 24px;
  position: relative;
  margin-right: ${(props) => (props.slide ? '0' : '-100vw')};
  background-color: ${(props) => props.theme.colors.white};
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  overflow-y: scroll;
  transition: 0.2s;
  z-index: 1000;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const MobileMenuContent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 1000;

  a {
    width: 124px;
    height: 34px;
    position: relative;

    svg {
      color: ${(props) => props.theme.colors.not_quite_black};
    }
  }

  nav {
    width: 100%;
    padding-top: 45px;
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    a,
    button {
      width: 100%;
      height: 40px;
      padding: 8px 16px;
      display: flex;
      align-items: center;
      gap: 4px;
      color: ${(props) => props.theme.colors.not_quite_black};
      background-color: transparent;
      border: none;
      font-size: 16px;

      &.selected {
        color: ${(props) => props.theme.colors.text_link};
        background-color: ${(props) => props.theme.colors.off_white};
        border-radius: 8px;
      }

      :hover {
        text-decoration: underline;
      }

      svg {
        margin-top: 2px;
        transform: rotate(270deg);
        color: ${(props) => props.theme.colors.not_quite_black};
      }
    }

    ::before {
      content: '';
      width: 100%;
      height: 1px;
      position: absolute;
      top: 28px;
      background-color: #ebedef;
    }
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const MenuCloseButton = styled.button<Props>`
  width: 40px;
  height: 40px;
  position: fixed;
  top: 18px;
  right: ${(props) => (props.slide ? '18px' : '-100vw')};
  color: ${(props) => props.theme.brand};
  background-color: transparent;
  border: none;
  transition: 0.2s;

  svg {
    width: 24px;
    height: 24px;
    transform: rotate(360deg);

    path {
      color: ${(props) => props.theme.colors.not_quite_black};
    }
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const MobileMenuFooter = styled.div<Props>`
  width: 330px;
  height: 120px;
  position: fixed;
  right: ${(props) => (props.slide ? '0' : '-100vw')};
  bottom: 0;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  transition: 0.2s;

  div {
    width: 100%;
    height: 86px;
    padding: 0 24px;
    display: flex;
    align-items: center;
    background-color: ${(props) => props.theme.colors.white};
    box-shadow: 0 0 20px 20px ${(props) => props.theme.colors.white};

    a {
      width: 100%;
      height: 38px;
      color: ${(props) => props.theme.colors.white};
      background-color: ${(props) => props.theme.colors.brand};

      svg {
        color: ${(props) => props.theme.colors.white};
      }
    }
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const SecondaryMenu = styled.div<Props>`
  width: 100%;
  height: 100%;
  position: absolute;
  right: ${(props) => (props.slide ? '0' : '-100vw')};
  top: 0;
  display: none;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.white};
  transition: 0.2s;

  button {
    width: 82px;
    height: 40px;
    margin-bottom: 9px;
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    font-size: 16px;

    svg {
      transform: rotate(90deg);
      color: ${(props) => props.theme.colors.not_quite_black};
    }
  }

  ul {
    width: 100%;

    &.main-ul {
      padding-bottom: 104px;
    }

    .main-li {
      padding: 26px 0 17px 0;
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 6px;

      &:not(.final-li) {
        ::after {
          content: '';
          width: 100%;
          height: 1px;
          position: absolute;
          bottom: 0;
          background-color: #ebedef;
        }
      }

      div {
        height: 28px;
        font-family: 'Whitney Medium';
        font-size: 20px;
      }

      ul {
        width: 100%;
        display: flex;
        flex-direction: column;

        li {
          width: 100%;
          height: max-content;
          display: flex;

          a {
            width: 100%;
            height: 100%;
            padding: 8px 8px 8px 16px;
            display: flex;
            align-items: center;
            color: #4f5660;
            line-height: 24px;

            :hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;
