import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import LandingPage from './components/landingPage';
import AboutUs from './components/aboutUs';
import User from './components/user';

const App = (props) => (
  <Router>
    <div>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/about_us' component={AboutUs} />
      <Route path='/users/:id' component={User} />
    </div>
  </Router>
)
export default App;
