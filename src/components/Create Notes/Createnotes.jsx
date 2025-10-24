// import React, {useState} from 'react'
// import '../../index.css'


// const Createnotes = (props) => {
//     const [note, setNote] = useState({
//         title: "",
//         content: ""
//     })
//     function handleChange(event){
//         const {name, value} = event.target
//         setNote((prevNote)=>{
//             return{
//                 ...prevNote,
//                 [name]: value
//             }
//         })
//     }
//     function submitNote(event){
//         props.onAdd(note);
//         setNote({
//             title: "",
//             content: ""
//         });
//         event.preventDefault();
//     }
//   return (
//     <div>
//       <form>
//         <input
//           name="title"
//           onChange={handleChange}
//           value={note.title}
//           placeholder="Title"
//         />
//         <textarea
//           name="content"
//           onChange={handleChange}
//           value={note.content}
//           placeholder="Take a note..."
//           rows="3"
//         />
//         <button onClick = {submitNote}>Add</button>
//       </form>
//     </div>
//   )
// }

// export default Createnotes


import React, { useState } from 'react';
import '../../index.css';

const Createnotes = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value
    }));
  }

  function submitNote(event) {
    event.preventDefault(); // Prevent page reload

    // Validation: both title and content must be filled
    if (note.title.trim() === "" || note.content.trim() === "") {
      alert("Please fill in both the title and content before adding a note.");
      return; // Stop if validation fails
    }

    props.onAdd(note); // Add note to parent
    setNote({ title: "", content: "" }); // Reset input fields
    alert("Note added successfully!"); // Confirmation alert
  }

  return (
    <div>
      <form onSubmit={submitNote} >
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Createnotes;
