const fs = require('fs');

let readStream = fs.createReadStream('./asset/nombres.txt');
    writeStream = fs.createWriteStream('asset/nombres_copias.txt');


readStream.pipe(writeStream);


readStream
    .on('data', chunk => {
        console.log(chunk);
        console.log( chunk.toString());
        console.log(' He leído:' , chunk.length , 'caracteres');

    })
    .on( 'end', ()=> console.log('Termiñé de leer el archivo') )
    .on( 'error' , error => console.log('Ocurrió un error: ', error.message) );


