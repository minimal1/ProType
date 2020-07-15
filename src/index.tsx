/** @format */

import * as React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *   {
  box-sizing: border-box;
  }
  body {
    margin: 0;
  height: 100vh;

    div {

      margin : 0;
    }
    #root {
          height: 100vh;

    }
  }
`;
ReactDOM.render(
  <React.Fragment>
    <App />
    <GlobalStyle />
  </React.Fragment>,
  document.getElementById('root'),
);
