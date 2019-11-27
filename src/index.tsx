/* eslint-disable import/no-unresolved */
import React from 'react';
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

ReactDOM.render(
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <NotificationGlobalStyles />
            <Notifications />
            <App />
          </ConnectedRouter>
        </Provider>
      </ThemeProvider>
    </ApolloHooksProvider>
  </ApolloProvider>,
  MOUNT_NODE,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
