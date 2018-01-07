import React from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';

import paths from 'paths';

import Messages from 'pages/Messages';
import NewMessage from 'pages/NewMessage';
import ViewMessage from 'pages/ViewMessage';

function routes() {
  return (
    <Router>
      <Switch>
        <Route path={paths.messages} component={Messages} />
        <Route path={paths.newMessage} component={NewMessage} />
        <Route path={paths.viewMessage} component={ViewMessage} />
      </Switch>
    </Router>
  );
}

export default routes;
