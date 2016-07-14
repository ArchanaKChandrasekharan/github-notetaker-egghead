var React = require('react');
// ReactDOM tells react that we are going to render the component on the client
// with ReactDOM and not on the server
var ReactDOM  = require('react-dom');

// React.createClass allows you to create a component
var Main = React.createClass({
  // render says what the UI will look like for the specific element
  render: function(){
    return (
      <div>
        Hello World
      </div>
    )
  }
});

ReactDOM.render(<Main />, document.getElementById('app'))
