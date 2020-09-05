import React, { Component } from "react";
import AddUser from "./AddUser";
import { AxiosCall } from "./AxiosCall";

export class ServerData extends Component {
  state = {
    info: [],
   
  };

  getData = () => {
    AxiosCall()
      .get("/friends")
      .then((res) => {
        console.log(res.data);
        this.setState({
          info: res.data,
       
        });
      })

      .catch((err) => console.log({ err }));
  };

  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <div>
        <h2>This page is for getting data from Server Data</h2>
        <AddUser />
      </div>
    );
  }
}

export default ServerData;
