import React from 'react';
import ReactDOM from 'react-dom';

// styled-components
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from './styles';

import 'semantic-ui-css/semantic.min.css';

import App from './components/App';

import * as serviceWorker from './core/serviceWorker';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
