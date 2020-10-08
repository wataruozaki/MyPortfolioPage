import React from 'react';
import ReactDOM from 'react-dom';

// redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/rootReducer';

// styled-components
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from './styles';

import 'semantic-ui-css/semantic.min.css';

import App from './components/App';

import * as serviceWorker from './core/serviceWorker';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
