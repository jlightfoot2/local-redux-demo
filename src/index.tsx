import * as OfflinePluginRuntime from 'offline-plugin/runtime';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
OfflinePluginRuntime.install();
import { HashRouter } from 'react-router-dom';

import RouteTest from './components/RouteTest';
import reducer from './reducers';


injectTapEventPlugin();


const render = (Component: any) => {
    ReactDOM.render(
        <AppContainer>
          <HashRouter>
            <Component/>
          </HashRouter>
        </AppContainer>,
        document.getElementById("spaApp")
    );
}

render(RouteTest);
// Hot Module Replacement API. Only used when running the dev server.
if ((module as any).hot) {
  (module as any).hot.accept('./components/AppBar', () => {
    render(RouteTest);
  });
}