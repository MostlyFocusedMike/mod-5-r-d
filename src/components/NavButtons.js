import React from "react"
import Data from "../data"

class NavButtons extends React.Component {
  render() {
    return (
      <div className="nav-buttons">
        <button onClick={this.props.back}>Back</button>
        {Data.notes
          .map(note => (
            <button 
              onClick={this.props.jumpTo}
              data-time={note.time}
              key={note.time}
            >{`Skip to ${note.time}`}
            </button>
          ))
        }
        <button onClick={this.props.playPause}>Play/Pause</button>
        <button onClick={this.props.next}>Next</button>
      </div>
    )
  }
} 

export default NavButtons 
