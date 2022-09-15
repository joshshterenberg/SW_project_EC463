import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

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
            placeholder="Enter followed account (ex. @john_doe)"
          />
        </div>

        <Link to={'/multi'}>
	<div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Analyze
          </button>
        </div>
	</Link>
      </form>
    )
  }
}
