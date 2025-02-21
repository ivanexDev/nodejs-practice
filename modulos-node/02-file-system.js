const fs = require("fs");

// fs.open(__dirname + "/archivo-nuevo.txt", "w", (err, fd)=>{

//     fs.write(fd,"hola a todos", (err, bufferInBytes)=>{

//         console.log(`se ha guardado un archivo con el texto ${bufferInBytes}`)

//         fs.close(fd, (err)=>{
//             console.log(err)
//         })

//     })
// })

fs.writeFileSync(__dirname + "/archivo.txt", "Texto dentro del archivo");

//obetener el nombre de los archivos dentro de una carpeta
