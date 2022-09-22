import React, { Component } from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flipflop: false,
      account: {
        accountName: props.accountName
      }
    };
  }
  handleChange(event) {
    var account = this.state.account;
    account.accountName = event.target.value;
    this.setState({account: account });
  }
  handleClick(e) {
    e.preventDefault();
    console.log(this.state.account.accountName);
    document.getElementById("blinder").style.display = "block";
    document.getElementById("antiblinder2").style.display= "none";
    this.setState({flipflop: true});
    return false;
  }
  createEmbed() {
    console.log(this.state.account.accountName);
    return <TwitterTimelineEmbed sourceType="profile" screenName={`${this.state.account.accountName}`} options={{height: 400}} />
  }
  render() {
    return (
      <>
      <form onSubmit={this.handleClick.bind(this)} style={{display: "block"}} id="antiblinder2">
        <h3>Single Account Analysis</h3>

        <div className="mb-3">
          <label>User's Twitter Handle</label>
          <input
            id="testevent"
            type="text"
            value={this.state.account.accountName}
            onChange={this.handleChange.bind(this)}
            className="form-control"
            placeholder="Enter Twitter handle (ex. @john_doe)"
          />
        </div>
        <div className="d-grid">
          <button type="submit" id="myBtn" className="btn btn-primary">
            Analyze
          </button>
        </div>
      </form>


      <div id="blinder" style={{display: "none"}}>
        <h3>Single Account Analysis</h3>
        <div><p>{this.state.account.accountName}</p></div>
	<div><p>item 2</p></div>
	<div><p>item 3</p></div>
        {this.state.flipflop ? this.createEmbed() : null}
      </div>
      </>
    )
  }
}
