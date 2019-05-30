const tail = require('./tail');

const stream = tail('test.txt', {
    numLines: 10,
    watch: true,
});

stream.on('line', (line) => {
    console.log(line);
});

stream.on('error', (err) => {
    console.error(err);
});