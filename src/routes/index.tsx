import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Tools from '../pages/Tools';
import NotFound from '../pages/NotFound';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tools" component={Tools} />
        <Route path="*" component={NotFound} />
    </Switch>
);

export default Routes;
