import React, { Component } from "react";
import axios from "axios";

export class Login extends Component {
  state = {
    credentials: {
      username: "",
      password: "",
    },
  };
  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };
  login = (e) => {
    e.preventDefault();
    
    axios
      .post("http://localhost:5002/api/login", this.state.credentials)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        
        this.props.history.push("/protected");
      })
      .catch((err) => console.log({ err }));
  };

  render() {
    return (
      <div>
        <h1>This is Login page</h1>
        <div>
          <form onSubmit=     
              {this.login}>
             
            
            <input
              type="text"
              name="username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
            />
            <input
              type="password"
              name="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
            />
            <button>Log in</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
