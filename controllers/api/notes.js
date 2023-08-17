const Note = require('../../models/user');

module.exports = {
    create,
}

async function create(req, res) {
    try {
        const note = await Note.create(req.body)
    } catch (err) {
        res.status(500).json(err);
    }
}