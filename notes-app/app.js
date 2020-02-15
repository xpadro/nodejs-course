const fs = require('fs')

fs.writeFileSync('notes.txt', 'This is the first line');
fs.appendFileSync('notes.txt', '\nThis is a second line')