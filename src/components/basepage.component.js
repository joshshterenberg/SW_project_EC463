import React, { Component } from 'react';
import {SocialIcon } from 'react-social-icons';

export default class Login extends Component {
  render() {
    return (
      <form style={{opacity: "1", animation: "fade 2s linear"}}>
        <h3>EmotiTweet: A Google MLP Application</h3>
	<div style={{margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center"}}>
	  <SocialIcon network="twitter" style={{margin: "0 1.5em"}} />
	  <SocialIcon network="google" style={{margin: "0 1.5em"}} />
        </div>
      </form>
    )
  }
}
