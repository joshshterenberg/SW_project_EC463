import React, { Component } from 'react'

export default class Single extends Component {
  render() {
    return (
      <div>
	<script>
	  document.getElementById("write").innerHTML = window.location.search;
	</script>
        <h3>Single Account Analysis Report</h3>
        <div><p id="write"></p></div>
	<div><p>item 2</p></div>
	<div><p>item 3</p></div>
      </div>
    )
  }
}
