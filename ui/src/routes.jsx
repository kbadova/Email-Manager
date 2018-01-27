import React from 'react';
import history from './history';

import {Router} from 'react-router';
import {Switch, Route} from 'react-router-dom';

import paths from 'paths';

import Messages from 'pages/Messages';
import NewMessage from 'pages/NewMessage';
import ViewMessage from 'pages/ViewMessage';
import Login from 'pages/Login';

function routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route path={paths.messages} component={Messages} />
        <Route path={paths.newMessage} component={NewMessage} />
        <Route path={paths.viewMessage} component={ViewMessage} />
        <Route exact path={paths.login} component={Login} />
      </Switch>
    </Router>
  );
}

export default routes;
