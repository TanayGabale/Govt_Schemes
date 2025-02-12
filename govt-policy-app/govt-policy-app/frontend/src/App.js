import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PolicyContextProvider from './context/PolicyContext';

const App = () => {
  return (
    <PolicyContextProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          {/* Additional routes can be added here */}
        </Switch>
      </Router>
    </PolicyContextProvider>
  );
};

export default App;