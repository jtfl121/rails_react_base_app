import React from 'react';
import axios from 'axios';
import {Link } from "react-router-dom";

class User extends React.Component {
constructor(props){
  super(props);

  this.state = {
    user: []
  };

}

componentDidMount(){
  let my_users = []

  var self = this;
  axios.get('/get_user', {
    params: {
      id: (window.location.pathname).split("/").pop()
    }
  })
    .then(function (response) {
      // handle success
      console.log(response.data);
      self.setState({user: response.data[0]})
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
    // console.log(my_users)

  // this.setState({
  //   user: my_users
  // })
}
  
  render() {
    console.log(this.state)
    return(
      <div>
        <h1>User</h1>
        {this.state.user.first_name}<br />
        {this.state.user.last_name}<br />
        {this.state.user.age}<br />
          <Link to='/about_us'>About us</Link>

      </div>
    )
  }
}
export default User