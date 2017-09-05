import React, { Component } from "react";


class GithubUser extends Component {
    constructor(props){
        super(props);
    };
  render() {
    var username = this.props.username;
    var avatarUrl = this.props.url;
    console.log(this.props);

    return (
        <div>
        <h2>{username} </h2>
        <img className="github-usertag__avatar" src={avatarUrl} alt="image not displayed" />
        </div>
      
    );
  }
}

export default GithubUser;