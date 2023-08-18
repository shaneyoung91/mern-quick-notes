import { useState } from 'react';
import { createNote }from '../../utilities/notes-api'

export default function NewNoteForm({ addNote, notes }) {
    const [formData, setFormData] = useState('')

    async function handleAddNote(evt) {
        evt.preventDefault();
        const savedNote = await createNote(formData)
        addNote(formData);
        setFormData('')
    }

    function handleChange(evt) {
        const newFormData = {...formData, [evt.target.name]: evt.target.value };
        setFormData(newFormData);
    }

    return (
        <>
            <form autoComplete="off" onSubmit={handleAddNote}>
                <input placeholder="Enter your note here" name='note' value={formData} onChange={handleChange} required ></input>
                <button type="submit">ADD NOTE</button>
            </form>
        </>
    )
}
