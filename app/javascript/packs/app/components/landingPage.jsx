import React from 'react';
import {Link } from "react-router-dom";

class LandingPage extends React.Component {

  
  render() {
    return(
      <div>
        <h1>Hello World</h1>
          <Link to='/about_us'>About us</Link>

      </div>
    )
  }
}
export default LandingPage