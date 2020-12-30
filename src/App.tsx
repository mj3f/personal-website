import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';

function App() {
  return (
      <Router>
          <div>
              <nav className="Navbar">
                  <ul>
                      <li>
                          <Link to="/">Home</Link>
                      </li>
                      <li>
                          <Link to="/projects">Projects</Link>
                      </li>
                  </ul>
              </nav>

              {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
              <Switch>
                  <Route path="/">
                      <Home />
                  </Route>
                  <Route path="/projects">
                      <Projects />
                  </Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
