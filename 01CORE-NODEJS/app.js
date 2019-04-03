'use strict'; //Modo para programar con buenas practicas e.p.

console.log('Hola Mundo NODE.JS :)');

console.log(5 + 10);

// Aroja error en la terminal, pero no en la consola del navegador e.p.
//console.log( window); 


// Sí se muestra en la terminal pero no en el navegador e.p.

 console.log( global);


// pero tambien exite codigo que se puede ver  en el gavegador y en la termial de comando  e.p. 

setInterval(() =>{
    console.log('Hola Node.js' + new Date()  );
},2000);