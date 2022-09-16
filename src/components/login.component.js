import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: {
        accountName: props.accountName
      }
    }
  }
  handleChange(event) {
    var account = this.state.account;
    account.accountName = event.target.value;
    this.setState({account: account });
  }
  handleClick() {
    console.log(this.state.account);
  }
  render() {
    return (
      <>
      <style></style>
      <form method="GET">
        <h3>Single Account Analysis</h3>

        <div className="mb-3">
          <label>User's Twitter Handle</label>
          <input
            type="text"
            value={this.state.account.accountName}
            onChange={this.handleChange.bind(this)}
            className="form-control"
            placeholder="Enter Twitter handle (ex. @john_doe)"
          />
        </div>

	<Link to={'/single'}>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={this.handleClick.bind(this)}>
            Analyze
          </button>
        </div>
	</Link>
      </form>
      </>
    )
  }
}
