/* eslint-disable import/no-unresolved */
import React, { ReactType } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider } from 'styled-components';
import { Notifications, NotificationGlobalStyles } from 'components/Notification';
import { history } from './utils/history';
import * as serviceWorker from './serviceWorker';
import App from './App';
import configureStore from './store/configureStore';
import { theme } from './theme/theme';
import { GRAPHQL_URL } from './config/uri';

import 'antd/dist/antd.css';
import 'react-notifications-component/dist/theme.css';

const client = new ApolloClient({
  uri: GRAPHQL_URL,
});

// Create redux store with history
const initialState = {};
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('root');

const render = (RootComponent: ReactType) => {
  // eslint-disable-next-line react/no-render-return-value
  return ReactDOM.render(
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <ConnectedRouter history={history}>
              <NotificationGlobalStyles />
              <Notifications />
              <RootComponent />
            </ConnectedRouter>
          </Provider>
        </ThemeProvider>
      </ApolloHooksProvider>
    </ApolloProvider>,
    MOUNT_NODE,
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('./App').default;
    render(NextApp);
  });
}

serviceWorker.unregister();
