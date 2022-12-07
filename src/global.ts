import { createGlobalStyle } from 'styled-components';
import GintoNordBlack from '../src/assets/fonts/ginto-nord-black.otf';
import GintoNord from '../src/assets/fonts/ginto-nord-regular.ttf';
import GintoNormalBlack from '../src/assets/fonts/ginto-normal-black.otf';
import GintoNormalLight from '../src/assets/fonts/ginto-normal-light.otf';
import GintoNormalMedium from '../src/assets/fonts/ginto-normal-medium.otf';
import WhitneyLight from '../src/assets/fonts/whitney-light.otf';
import WhitneyMedium from '../src/assets/fonts/whitney-medium.otf';

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: "Whitney Light";
    src: url(${WhitneyLight});
  }
  @font-face {
    font-family: "Whitney Medium";
    src: url(${WhitneyMedium});
  }
  @font-face {
    font-family: "Ginto Normal Light";
    src: url(${GintoNormalLight});
  }
  @font-face {
    font-family: "Ginto Normal Medium";
    src: url(${GintoNormalMedium});
  }
  @font-face {
    font-family: "Ginto Normal Black";
    src: url(${GintoNormalBlack});
  }
  @font-face {
    font-family: "Ginto Nord";
    src: url(${GintoNord});
  }
  @font-face {
    font-family: "Ginto Nord Black";
    src: url(${GintoNordBlack});
  }
  
* {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-weight: inherit;
  font-style: inherit;
  font-family: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
  font-family: "Whitney Light", sans-serif;
}

input,
button,
textarea {
  border: 1px solid gray;
}

a, button {
  -webkit-tap-highlight-color: none;
  box-shadow: none;
  cursor: pointer;
}

a {
  text-decoration: none;
}

ul {
  list-style-type: none;
}
`;
