const chalk = require('chalk')
const yargs = require('yargs')
const note = require('./note')

//customise yargs version
yargs.version('1.1.0')

//create add command
yargs.command(
    {
        command: 'add',
        describe: 'add a new note',
        handler: function (argv) {
            // console.log('tilte:'+ argv.title + " body:"+argv.body)
            note.addnote(argv.title,argv.body)
        },
        builder: {
            title: {
                describe: 'note title',
                demandOption: true,
                type: 'string'
            },
            body:{
                describe: 'note body',
                demandOption: true,
                type: 'string'
            }
        }
    }
)
//create remove command

yargs.command(
    {
        command: 'remove',
        describe: 'remove a note',
        handler: function () {
            console.log('Removing the note!.')
        }
    }
)
//list command
yargs.command(
    {
        command: 'list',
        describe: 'list all note',
        handler: function () {
            console.log('Listing the note!.')
        }
    }
)

//read command
yargs.command(
    {
        command: 'read',
        describe: 'read all note',
        handler: function () {
            console.log('reading the note!.')
        }
    }
)

yargs.parse()
// console.log(yargs.argv)