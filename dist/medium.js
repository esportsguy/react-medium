'use strict';

var React = require('react');

module.exports = React.createClass({
  displayName: 'Medium',

  play: function play() {
    var el = this.refs.medium;
  },

  renderMedium: function renderMedium() {
    var medium = this.props.medium;
    var src = medium.src;
    var mime = medium.mime;
    var ps = mime.split('/');

    switch (ps[0]) {
      case 'video':
        return React.createElement(
          'video',
          { className: 'video-js', ref: 'medium', controls: true },
          React.createElement('source', { src: src, type: 'video/mp4' })
        );
      case 'audio':
        return React.createElement('audio', { ref: 'medium', src: src });
      case 'image':
        return React.createElement('img', { ref: 'medium', src: src });
    }
  },

  componentDidMount: function componentDidMount() {
    var mime = this.props.medium.mime;
    var ps = mime.split('/');

    if (ps[0] === 'video') {
      videojs(this.refs.medium, {}, function () {
        console.log('videojs created');
      });
    }
  },

  render: function render() {
    var medium = this.props.medium;

    return React.createElement(
      'div',
      { className: 'm-medium' },
      this.renderMedium(),
      React.createElement(
        'div',
        { className: 'play' },
        React.createElement(
          'div',
          { className: 'play-button', onClick: this.handleClick },
          'play'
        )
      )
    );
  },

  handleClick: function handleClick(e) {
    this.play();
  }
});