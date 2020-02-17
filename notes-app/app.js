const chalk = require("chalk")
const yargs = require("yargs")

const getNotes = require("./notes.js")

yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function() {
        console.log("Adding a new note!")
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing the note')
    }
})

yargs.command({
    command: 'list',
    describe: 'Lists notes',
    handler: function () {
        console.log('Listing the notes...')
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reding the note')
    }
})

console.log(yargs.argv)