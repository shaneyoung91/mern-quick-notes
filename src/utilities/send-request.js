import { getToken } from "./users-service";

export default async function sendRequest(url, method = 'GET', payload = null) {
    // Fetch accepts an options object as the 2nd argument
    // used to include a data payload, set headers, specify the method, etc.
    const options = { method };
    if (payload) {
        options.headers = { 'Content-Type': 'application/json'};
        options.body = JSON.stringify(payload);
    }
    const token = getToken();
    if (token) {
        // Great use case for the Logical OR assignment operator
        // If options.headers is falsy, then assign to {}
        options.headers ||= {};
        // Add token to an Authorization header
        // Prefacing with 'Bearer ' is recommended in the HTTP specification
        options.headers.Authorization = `Bearer ${token}`;    
    }
    const res = await fetch(url, options);
    // res.ok will be false if the status code set is not 2xx
    if (res.ok) return res.json();
    throw new Error('Bad Request');
}