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
        self.setState({users: response.data})
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }
  
  
  handleUser(){
  }
  
  render() {

    return(
      <div>
        <h1>About US</h1>
        <Link to='/'>Home</Link>
        <table className='main_table'style={{width: "100%"}}>
          <tbody>
            <tr className='header_row'>
              <th>Firstname</th>
              <th>Lastname</th> 
              <th>Age</th>
            </tr>
            {this.state.users.map((user) =>
            <tr className='body_row' key={user.first_name}>
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