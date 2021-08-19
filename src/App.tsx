import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './routes';
import "./index.css";

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

// TODO: implementar debug

export default App;
