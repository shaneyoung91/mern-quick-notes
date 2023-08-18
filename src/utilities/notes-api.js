import sendRequest from "./send-request";
// This is the base path of the Express route we'll define
const BASE_URL = '/api/notes';

export async function createNote(formData) {
    return sendRequest(`${BASE_URL}/new`, 'POST', formData)
}