import React from "react";
import {useContext} from 'react'
import noteContext from '../context/notes/noteContext'
import {useState} from 'react'
function AddNote() {
    const context = useContext(noteContext)
    const {addNote} = context

    const [note, setNote] = useState({title:" ", description:" ", tag:""})
    const handleClick =(e)=>{
       e.preventDefault()
        addNote(note.title,note.description, note.tag);
        setNote({title:" ", description:" ", tag:""})
    }

    const onChange = (e)=>{
      setNote({...note, [e.target.name]: e.target.value})
    }
  return (
    <div>
      <div className="container">
        <h1>Add a Note</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              name="title"
              id="title"
              aria-describedby="emailHelp"
              onChange={onChange}
              minLength ={5}
              value={note.title}
              required
            />
          
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              onChange={onChange}
              minLength ={5}
              value={note.description}
              required
            />
          </div>
          <div className="mb-3">
          <label htmlFor="description" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              onChange={onChange}
              minLength ={5}
              value={note.tag}
              required
            />
           
          </div>
          <button disabled={note.title.length<5|| note.description.length<5}type="submit" onClick={handleClick} className="btn btn-primary">
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddNote;
