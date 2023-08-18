import * as notesAPI from './notes-api'

export async function createNote(formData){
    const note = await notesAPI.createNote(formData);
    return note
}