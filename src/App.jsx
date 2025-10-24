import React, { useState } from 'react'
import './App.css'
import Header from './components/Header/Header.jsx'
import Note from './components/Note/Note.jsx'
import Footer from './components/Footer/Footer.jsx'
import Notes from './components/Note/Notes.js'
import Createnotes from './components/Create Notes/Createnotes.jsx'


function App() {
  const [notes, setNotes] = useState([])
function addNote(newNote){
  setNotes((prevNotes)=>{
    return [...prevNotes, newNote]
  })
}
function deleteNote(id){
  setNotes((prevNotes)=>{
    return prevNotes.filter((noteItem, index)=>{
      return index !== id;
    })
  })
}

  return (
   <>
      <Header />
      <Createnotes onAdd={addNote}/>
      <div className='note-wrapper'>
      {notes.map((noteItem, index )=>{
        return <Note 
        key={index}
        id={index}
        title={noteItem.title} 
        content={noteItem.content} 
        onDelete={deleteNote} />
      })}
      </div>
      <Footer />
   </>
  )
}

export default App
