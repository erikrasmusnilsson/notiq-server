const express = require('express')
const createNote = require('../../services/notes/create')
const fs = require('fs')

const router = express.Router();

router.post('/notes', async (req, res) => {
    const {filename, content} = req.body;
    if (!filename || filename === "") {
        res.status(400).send("no filename specified")
        return
    }
    if (!content || content === "") {
        res.status(400).send("empty note")
        return
    }

    const result = await createNote(content)
    res.status(201).download(result, filename, () => {
        fs.unlinkSync(result)
    })
});

module.exports = router;