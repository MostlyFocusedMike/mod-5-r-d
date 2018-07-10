import React, { Component } from 'react';
import './App.css';
import Player from './components/Player';
import Notes from './components/Notes';

class App extends Component {
  state = {
    playState: 0,
    video: {},
    time: 0
  }

  handlePlayState = (e) => {
    this.setState({
      playState: e.data,
    }, () => this.logTime(e))
    console.log(e.data);
  }

  logTime = (e) => {
    if (this.state.playState === 1) {
      this.setState({
        time: Math.floor(e.target.getCurrentTime())
      }) // immediately fix the timecode 
      this.time = setInterval(() => { //check each escond the video plays 
        this.setState({
          time: Math.floor(e.target.getCurrentTime())
        }, () => console.log(this.state.time))
      }, 1000)
    } else {
      clearInterval(this.time)
    }
  }
  
  // e.target from the Player component is the only way to access the video 
  // so we need to bring it up to the top state as soon as it's loaded 
  // that way other components will have access to it
  setVideo = (e) => {
    this.setState({
      video: e.target
    })
  }
  jumpTo = (place) => {
    this.state.video.pauseVideo()
    this.state.video.seekTo(place, true) // time in seconds to go to, and whether you want to allow it to go into unbuffered territory
    this.setState({ time: place })
  }

  render() {
    return (
      <div>
      <Player 
        handlePlayState={this.handlePlayState} 
        logTime={this.logTime} 
        setVideo={this.setVideo}
      />
      <Notes
        time={this.state.time}
        jumpTo={this.jumpTo}
      />
      </div>
    );
  }
}

export default App;
