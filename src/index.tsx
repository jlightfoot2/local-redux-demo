import * as OfflinePluginRuntime from 'offline-plugin/runtime';
import * as React from 'react';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
OfflinePluginRuntime.install();
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './reducers';

injectTapEventPlugin();

const store = createStore(reducer,applyMiddleware(thunk));

const render = (Component: any) => {
    ReactDOM.render(
        <AppContainer>
          <Provider store={store}>
            <HashRouter>
              <Component />
            </HashRouter>
          </Provider>
        </AppContainer>,
        document.getElementById("spaApp")
    );
}

render(App);
// Hot Module Replacement API. Only used when running the dev server.
if ((module as any).hot) {
  (module as any).hot.accept('./components/App', () => {
    render(App);
  });
}