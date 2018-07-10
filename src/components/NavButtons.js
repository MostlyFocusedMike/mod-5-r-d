import React from "react"
import Data from "../data"

class NavButtons extends React.Component {
  render() {
    return (
      <div className="nav-buttons">
        {Data.notes
          .map(note => (
            <button 
              onClick={this.props.jumpTo}
              data-time={note.time}
            >{`Skip to ${note.time}`}
            </button>
          ))
        }
      </div>
    )
  }
} 

export default NavButtons 
