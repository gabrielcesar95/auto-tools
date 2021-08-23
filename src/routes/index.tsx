import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import FuelComparer from '../pages/Tools/FuelComparer';
import NotFound from '../pages/NotFound';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tools/fuel-comparer" component={FuelComparer} />
        <Route path="*" component={NotFound} />
    </Switch>
);

export default Routes;
