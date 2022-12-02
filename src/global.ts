import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

html, body {
  width: 100vw;
  height: 100vh;
}

#root {
  width: 100%;
  height: 100%;
}

input,
button,
textarea {
  outline: none;
  border: 1px solid gray;
}

a, button {
  -webkit-tap-highlight-color: none;
  box-shadow: none;
}

a {
  text-decoration: none;
}

ul {
  list-style-type: none;
}
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.background};
  overflow-y: hidden;
`;
