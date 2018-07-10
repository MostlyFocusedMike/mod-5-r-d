import React from 'react';
import YouTube from 'react-youtube';
 
class Player extends React.Component {
  test() {
  console.log("hey");
  }
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };
 
    return (
      <YouTube
        videoId="2g811Eo7K8U"
        opts={opts}
        onReady={this.props.setVideo}
        onStateChange={this.props.handlePlayState}
      />
      
    );
  }
 
}

export default Player 
