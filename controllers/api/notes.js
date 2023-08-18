const Note = require('../../models/note');

module.exports = {
    createNote,
}

async function createNote(req, res) {
    try {
        const note = await Note.create({text: req.body.text, user: req.user})
    } catch (err) {
        res.status(400).json(err);
    }
}