import fs from 'fs'
//import { fileURLToPath } from 'url';
//import { dirname } from 'path';

//const __filename = fileURLToPath(import.meta.url);
//const __dirname = dirname(__filename);


// Read the file
//path.resolve(__dirname, 'input.txt')
const readableStream = fs.createReadStream('input.txt', {
    highWaterMark: 15,
});

// Write the file
//path.resolve(__dirname, 'output.txt')
const writableStream = fs.createWriteStream('output.txt')

readableStream.on('readable', () => {
    const msgInput = `${readableStream.read()}\n`;
    writableStream.write(msgInput);
    console.log('Successfully wrote');
})


readableStream.on('end', () => {
    writableStream.end()
})


