import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store, persistor } from './components/redux/auth/store';
import { App } from './components/App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'components/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

const theme = {
  primaryWhite: '#FFFFFF',
  primaryBlack: '#2F2F2F',
  primaryBlue: '#407BFF',
  secondaryGrey: '#ECF2FF',
  secondaryRed: '#EF5050',
  secondaryBlue: '#9EBBFF',
  secondaryOrange: '#FF9D43',
  secondaryLightBlue: '#D7E3FF',
  cubicBezier: '0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)',
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <BrowserRouter basename="/node_front_fs_85_Kotiko-UA">
            <App />
            <GlobalStyles />
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
// some comment - need to remove
