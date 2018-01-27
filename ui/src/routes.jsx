import React from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';

import paths from 'paths';

import Messages from 'pages/Messages';
import NewMessage from 'pages/NewMessage';
import ViewMessage from 'pages/ViewMessage';
import Login from 'pages/Login';

function routes() {
  return (
    <Router>
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
