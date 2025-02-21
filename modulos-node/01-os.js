const os =  require('os')

const {arch , cpus, hostname, uptime, release, platform, freemem, totalmem} = os;

console.log(platform())
console.log(arch());
console.table(cpus());
console.log(hostname());
console.log(release());
console.log("Tiempo encendido el PC en segundos",uptime());
console.log(freemem());
console.log((freemem()/ (1024 * 1024)));
console.log((totalmem()/(1024 * 1024)));


function returnTime(seconds) {
    const horas = Math.trunc(seconds / 3600);
    const minutos = Math.trunc((seconds % 3600) / 60);
    const segundos = seconds % 60;

    console.log(`lleva encendido ${horas} horas ${minutos} minutos y ${segundos} segundos`);
}

returnTime(uptime());