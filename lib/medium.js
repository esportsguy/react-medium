var React = require('react');

module.exports = React.createClass({
  displayName: 'Medium',

  play() {
    var el = this.refs.medium;
  },

  renderMedium() {
    var medium = this.props.medium;
    var src = medium.src;
    var mime = medium.mime;
    var ps = mime.split('/');

    switch(ps[0]) {
      case 'video':
        return <video ref="medium" src={src}/>;
      case 'audio':
        return <audio ref="medium" src={src}/>;
      case 'image':
        return <img ref="medium" src={src}/>;
    }
  },

  render() {
    var medium = this.props.medium;

    return (
      <div className="m-medium">
        {this.renderMedium()}
        <div className="play">
          <div className="play-button" onClick={this.handleClick}>play</div>
        </div>
      </div>
    );
  },

  handleClick(e) {
    this.play();
  }
});
