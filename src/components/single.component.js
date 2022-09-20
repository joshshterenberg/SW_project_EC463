import React, { Component } from 'react'

export default class Single extends Component {
  render() {
    return (
      <div>
        <h3>Single Account Analysis Report</h3>
        <div><p>{this.state}</p></div>
	<div><p>item 2</p></div>
	<div><p>item 3</p></div>
      </div>
    )
  }
}
