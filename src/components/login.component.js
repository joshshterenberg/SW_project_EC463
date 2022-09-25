import React, { Component } from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import Sentiment from 'sentiment';

const sentiment = new Sentiment();

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flipflop: false,
      flipflop2: false,
      sentimentScore: null,
      account: {
        accountName: props.accountName
      }
    };
  }
  getSentiment() {
    if (this.state.flipflop2 === true) {
      this.setState({flipflop2: false});
      this.setState({sentimentScore: sentiment.analyze(this.state.account.accountName)}, () => {
        console.log(this.state.sentimentScore.score);
        document.getElementById("lord").innerHTML = this.state.sentimentScore.score;
      });
    }
  }
  handleChange(event) {
    var account = this.state.account;
    account.accountName = event.target.value;
    this.setState({account: account });
  }
  handleClick(e) {
    e.preventDefault();
    document.getElementById("blinder").style.display = "block";
    document.getElementById("antiblinder2").style.display= "none";
    this.setState({flipflop: true});
    this.setState({flipflop2: true});
    return false;
  }
  createEmbed() {
    return <TwitterTimelineEmbed sourceType="profile" screenName={`${this.state.account.accountName}`} options={{height: 300}} />
  }
  render() {
    return (
      <>
      <form onSubmit={this.handleClick.bind(this)} style={{display: "block"}} id="antiblinder2">
        <h3>Account Analysis</h3>

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
        <p> </p>
        <h7 style={{color: 'red', textAlign: 'center'}}>Note: please reload website if input is nonexistent or banned Twitter account, as analysis will not be able to take place.</h7>
      </form>


      <div id="blinder" style={{display: "none"}}>
        <h3>Single Account Analysis</h3>
        <div><p>Analyzing user account: "{this.state.account.accountName}"</p></div>
        <p>Overall Sentiment of this user in the last 5 days (scale is from -10 to 10):</p>
        <p id="lord">{this.getSentiment()}</p>
        {this.state.flipflop ? this.createEmbed() : null}
      </div>
      </>
    )
  }
}
