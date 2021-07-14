import React from 'react';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import {BrowserRouter as Router, Switch, Link,Route  } from 'react-router-dom'


function App() {
 
   return (
     <Router>
        <div> 
          <ul>
           
          <li>
              <Link to = "/">Home</Link>
            </li>
            <li>
              <Link to = "/about">About</Link>
            </li>
            <li>
              <Link to = "/contact">Contact</Link>
            </li>
          </ul>
          <hr/>
          <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route  path="/Contact">
            <Contact/>
          </Route>
          </Switch>
        
        </div>
     </Router>
    
   )
  
}
export default App;
