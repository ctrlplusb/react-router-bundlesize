import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router/lib/Router';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';
import browserHistory from 'react-router/lib/browserHistory';

function App({ children }) {
  return (
    <div>
      <h1>Hello World!</h1>
      {children}
    </div>
  );
}

function Home() {
  return (
    <div>
      I 💖 react-router.
    </div>
  );
}

const routes = (
  <Route path="/" component={App}>
    <IndexRoute getComponent={Home} />
  </Route>
);

ReactDOM.render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);
