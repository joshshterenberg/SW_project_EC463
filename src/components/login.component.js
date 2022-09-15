import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default class Login extends Component {
  render() {
    return (
      <form>
        <h3>Single Account Analysis</h3>

        <div className="mb-3">
          <label>User's Twitter Handle</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Twitter handle (ex. @john_doe)"
          />
        </div>

        <div className="d-grid">
          <Link to={'/single'}>
          <button type="submit" className="btn btn-primary">
            Analyze
          </button>
          </Link>
        </div>
      </form>
    )
  }
}
