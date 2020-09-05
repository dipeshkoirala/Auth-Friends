import React, { Component } from "react";

import { AxiosCall } from "./AxiosCall";


export class User extends Component {
  state = {
   
    name: "",
    age: "",
    email: "",
  };

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };


  handleSubmit = (e) => {
    e.preventDefault();
    AxiosCall()
      .post("/friends", this.state)
      .then((res) => {
        this.setState([...this.state], res.data);
        console.log(res.data);
      })
      .catch((err) => console.log({ err }));
  };

  
  render() {
    
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
        </label>
        <label>
          Age:
          <input
            type="text"
            name="age"
            onChange={this.handleChange}
            value={this.state.age}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
        </label>
        <button type="submit">AddUser</button>
      </form>
    );
  }
}
export default User;
