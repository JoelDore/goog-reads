import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron'
import Saved from './pages/Saved'
import Search from './pages/Search'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Jumbotron />
        <Route exact path={['/', '/search']} component={Search} />
        <Route exact path='/saved' component={Saved} />
      </div>
    </Router>
  );
}

export default App;
