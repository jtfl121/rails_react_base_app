import React from 'react';
import axios from 'axios';
import {Link } from "react-router-dom";

class AboutUs extends React.Component {
  
  constructor(props){
    super(props);
  
    this.state = {
      users: []
    };
    this.handleUser = this.handleUser.bind(this);

  }
  
  componentDidMount(){
    let my_users = []

    var self = this;
    axios.get('/get_users')
      .then(function (response) {
        // handle success
        // console.log(response.data);
        self.setState({users: response.data})
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
  
  
  handleUser(){
    console.log('clicked')
  }
  
  render() {
    // console.log(this.state)

    return(
      <div>
        <h1>About US</h1>
        <Link to='/'>Home</Link>
        <table style={{width: "100%"}}>
          <tbody>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th> 
              <th>Age</th>
            </tr>
            {this.state.users.map((user) =>
            <tr key={user.first_name}>
          
              <td><Link to={'/users/' + user.id}>{user.first_name}</Link></td>
              <td>{user.last_name}</td> 
              <td>{user.age}</td>
            </tr>
          )}
          </tbody>
        </table>
        
      </div>
    )
  }
}
export default AboutUs