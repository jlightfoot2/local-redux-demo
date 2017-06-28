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
import {inspect} from 'util';

injectTapEventPlugin();

/**
 * createStore
 *
 * In order for your React components to use redux you
 * must create a store object and pass it to Provider component
 *
 * After you do this all your components that are children of the
 * Provider component (see below) will have access to your redux 
 * state object and dispatch method. All this configuration is taken care of below.
 *
 * For an example of binding state to a component all the files
 * in the containers/ directory show how redux and React are connected together. 
 *
 * 
 */

const store = createStore(reducer,applyMiddleware(thunk));

store.subscribe(() => {
   // console.log(store.getState()); // list entire state of app
    console.log(inspect(store.getState()));
});

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