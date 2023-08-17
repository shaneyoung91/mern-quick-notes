import { useState } from 'react';
import NewNoteForm from '../../components/NewNoteForm/NewNoteForm'


export default function NotePage({user}) {
    
    const [notes, setNotes] = useState([]);

    function addNote(newNote){
        setNotes([...notes, newNote])
    }
    
    return (
        <>
            <NewNoteForm addNote={addNote}/>
            <div>
                <br></br>
                {notes.length === 0 ? (
                    <p>No notes yet!</p>
                ) : (
                <ul>
                    {notes.map((note, index) => (
                        <li key={index}>
                            {note.text} || {new Date(note.createdAt).toLocaleString()}
                        </li>
                    ))}
                </ul>
                )}
            </div>
        </>
    )
}
