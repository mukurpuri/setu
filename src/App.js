import React from 'react';
import { PersistGate } from 'redux-persist/es/integration/react'
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './views/Home'
import { store, persistor } from './redux/store/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <PersistGate 
        loading={null}
        persistor={persistor}
      >
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;