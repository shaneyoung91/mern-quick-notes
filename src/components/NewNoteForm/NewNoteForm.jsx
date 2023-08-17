import { useState } from 'react'

export default function NewNoteForm({ addNote }) {
    const [formData, setFormData] = useState({
        text: "",
    });
    
    function handleAddNote(evt) {
        evt.preventDefault();
        addNote(formData)
        setFormData({ text: "" });
    }

    function handleChange(evt) {
        const newFormData = {...formData, [evt.target.name]: evt.target.value };
        setFormData(newFormData);
    }

    return (
        <>
            <form onSubmit={handleAddNote}>
                <input placeholder="Enter your note here" name="text" value={formData.text} onChange={handleChange}></input>
                <button type="submit">ADD NOTE</button>
            </form>
        </>
    )
}
