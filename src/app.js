const express = require('express')
const {json} = require('body-parser')
const cors = require('cors');
const createNoteRouter = require('./controllers/notes/create')

const app = express()

app.use(cors())
app.use(json())
app.use(createNoteRouter)

app.set('port', process.env.PORT || 1337)

module.exports = app