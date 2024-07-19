// import chalk from "chalk";
const yargs = require("yargs")

// yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function (argv) {
        console.log("Adding a new note!")
    }
})

yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    handler: function (argv) {
        console.log("Removing the note")
    }
})

yargs.command({
    command: 'read',
    describe: 'Reading a note',
    handler: function (argv) {
        console.log("Reading the note")
    }
})

yargs.command({
    command: 'list',
    describe: 'Listing a note',
    builder: {
      title: {
          describe: "Note title",
          demandOption: true,
          type: "string"
      }
    },
    handler: function (argv) {
        console.log("Listing the note", argv)
    }
})


console.log(yargs.argv)

