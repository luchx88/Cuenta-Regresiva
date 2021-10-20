// ------ Fuera de ARGENTINA la CASTA LADRONA!!! ------

// ------ Variables ------
const cuentaRegresiva = document.getElementById('cuentaRegresiva')

const FIN = new Date(2023, 11, 10, 12)

const SEGUNDO =  1000
const MINUTO = SEGUNDO * 60
const HORA = MINUTO * 60
const DIA = 24 * HORA
const MES = DIA * (365 / 12)
let timer


function mostrarRestante() {
  let presente = new Date()
  let restante = (FIN - presente)
  
  if (restante < 0) {
    clearInterval(timer)
    console.log(`Se TERMINO`)
    return
  }
  
  
  let meses = Math.floor(restante / MES)
  let dias = Math.floor(restante / DIA)
  let horas = Math.floor((restante % DIA) / HORA)
  let minutos = Math.floor((restante % HORA) / MINUTO)
  let segundos = Math.floor((restante % MINUTO) / SEGUNDO)
  
  cuentaRegresiva.innerHTML = `<br />${meses} meses <br />${dias}   días <br />${horas} horas <br />${minutos} minutos <br />${segundos} segundos<br><br>`
  
} 

// Gracias a Pablo Monteserín (https://pablomonteserin.com/cuenta-regresiva/)
timer = setInterval(mostrarRestante, 1000)