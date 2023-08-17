
// This is the base path of the Express route we'll define
const BASE_URL = '/api/notes';

export async function addNote(newNote) {
    const res = fetch('BASE_URL', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify((newNote))
    });
}