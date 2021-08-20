import React, { ReactElement } from 'react';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import './index.css';

function App(): ReactElement<BrowserRouter> {
    return (
        <Router>
            <Routes />
        </Router>
    );
}

export default App;
