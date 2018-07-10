import React from "react" 

class Notes extends React.Component {

  handleProps = (e) => {
    return <p>{this.props.time}</p>
  }
/*
 *  from the d
 *  would probably be {
 *  {
 *  [10,20,30]
 *  [{notes: "i am a note"}, {notes: "i am another note"}]
 *  }
 *
 *
 */
  handleClick = () => {
    this.props.jumpTo(10)
  }

  showNote = () => {

   let dbData = {
     notes: [{time: 5, note: "i am a \nnote"}, {time: 10, note: "i am another note"}, {time: 15, note: "I am the final Note"}]
   }
   const {time} = this.props
   let obj = dbData.notes.find(note => time <= note.time)
   return obj ?  obj.note :  dbData.notes[dbData.notes.length -1].note
  }
  render() {
    console.log(this.props);
    return (
      <div> 
        <pre>{this.showNote()}</pre>
        <br /> 
        <button onClick={this.handleClick}>Scrub</button>
      </div>
    )
  }
}

export default Notes 
