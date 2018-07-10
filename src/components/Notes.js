import React from "react" 

 let dbData = {
   notes: [{time: 3, type: "code", content: "i am a \ncode"}, 
     {time: 5, type: "text", content: "i am text"}, 
     {time: 7, type: "pic", content: "https://media.giphy.com/media/1wqYNiObsge7Jowizv/giphy.gif", alt: "gif"}, 
     {time: 9, type: "code", content: "i am \nmore \n\tcode"}, 
     {time: 12, type: "pic", content: "https://static.boredpanda.com/blog/wp-content/uploads/2018/04/5acb63d83493f__700-png.jpg", alt: "cat pic"}
   ]
 }
class Notes extends React.Component {

  handleClick = () => {
    this.props.jumpTo(10)
  }

  pickNote = () => {
   const {time} = this.props
   let obj = dbData.notes.find(note => time <= note.time)
   return obj ? obj : dbData.notes[dbData.notes.length -1]
  }

  displayNote = () => {
    let note = this.pickNote() 
    if (note.type === "code") {
      return <pre>{note.content}</pre>
    } else if (note.type === "text") {
      return <p>{note.content}</p>
    } else {
      return <img src={note.content} alt={note.alt} />
    }
  }

  render() {
    return (
      <div> 
        {this.displayNote()}
      </div>
    )
  }
}

export default Notes 
