const {mdToPdf} = require('md-to-pdf')

const createNote = async content => {
    await mdToPdf({content}, {dest: "temp.pdf"})
    return "temp.pdf"
} 

module.exports = createNote;