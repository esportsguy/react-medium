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
        return (
          <video className="video-js" ref="medium" controls>
            <source src={src} type="video/mp4"/>
          </video>
        );
      case 'audio':
        return <audio ref="medium" src={src}/>;
      case 'image':
        return <img ref="medium" src={src}/>;
    }
  },

  componentDidMount() {
    var mime = this.props.medium.mime;
    var ps = mime.split('/');

    if(ps[0] === 'video') {
      videojs(this.refs.medium, {}, function() {
        console.log('videojs created');
      });
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
