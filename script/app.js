'use strict';

const React = require('react');
const ReactDOM = require('react-dome');

var Counter = React.createClass({
  incrementCount: function() {
    this.setState({
      count: this.state.count + 1
    });
  },
  getInitialState: function() {
    return {
      count: 0
    }
  },
  render: function() {
    return {
      <div class="my-component">
        <h1>Count: {this.state.count}</h1>
        <button type="button" onClick={this.incrementCount}>Increment Count</button>
      </div>
    };
  }
});

ReactDOM.render(<Counter/>, document.getElementById('mount-point'));
