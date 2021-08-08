import React from 'react';
import './App.css';
import Home from './Home';
import SearchScreen from './SearchScreen';
import Header from './Header';
import Footer from './Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
            <Route path= "/">
              <Home />
            </Route>
            <Route path= "/search">
              <SearchScreen />
            </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
