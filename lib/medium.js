var React = require('react');

module.exports = React.createClass({
  displayName: 'Medium',
  
  render() {
    return (
      <div>
        <video src="test.mp4" controls/>
        <audio src="test.mp3" controls/>
      </div>
    );
  }
});
