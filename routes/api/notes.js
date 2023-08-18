const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');

// All paths start with '/api/notes'

// POST /api/notes (create a note)
router.post('/new', notesCtrl.createNote);

module.exports = router;