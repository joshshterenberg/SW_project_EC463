import React, { Component } from 'react'

export default class SignUp extends Component {
  render() {
    return (
      <form>
        <h3>Multi-Account Analysis</h3>

        <div className="mb-3">
          <label>Source Twitter Handle</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Twitter handle that accounts follow (ex. @john_doe)"
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
      </form>
    )
  }
}
