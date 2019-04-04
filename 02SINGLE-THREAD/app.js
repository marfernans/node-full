/*Single thread*/

"use strict";

function singleThread() {
  process.argv[2] = "Estamos aprendiendo NODE.JS :)";
  process.argv[3] = 19;
  process.argv[4] = null;
  process.argv[5] = true;

  console.log("--------------------------------------------------------");
  console.log("         EL PROCESO DE NODE.JS               ");
  console.log("Id del proceso................." + process.pid);
  console.log("Título......................." + process.title);
//console.log('Directorio de Node.js.....' + process.execPath);
  console.log("Directorio Actual............" + process.cwd());
  console.log("Versión de Node.js........." + process.version);
  console.log("Versión Dependencias......" + process.versions);
  console.log("Plataforma (S.O.)........." + process.platform);
  console.log("Arquitectura (S.O)............" + process.arch);
  console.log("Tiempo activo de Node....." + process.uptime());
  console.log("argumentos del proceso........" + process.argv);
  console.log("*********************************************************");

  console.log(
        process.argv[0],
        process.argv[1]
    );

    
  let key = 0;

  for (key in process.argv) {
    console.log(process.argv[key]);
  }
}

singleThread();
