const tempo = $("#tempo")
const iniciar = $("#iniciar")
const pausar = $("#pausar")
const zerar = $("#zerar")

let hora = 0, minuto = 0, segundo = 0;
let intervalo = null;

const atualizar = () =>{
  tempo.textContent = (addZero(hora)+":"+addZero(minuto)+":"+addZero(segundo));
}

const iniciarTempo = () =>{
  if(intervalo) return;
  intervalo = setInterval(()=>{
    segundo++;
    if(segundo === 60){
      segundo = 0;
      minuto++
    }
    if(minuto === 60){
      minuto = 0;
      hora++
    }
    atualizar()
  },1000)
}

const pausarTempo = () =>{
  clearInterval(intervalo);
  intervalo = null;
}

const zerarTempo = () =>{
  pausarTempo()
  hora = 0;
  minuto = 0;
  segundo = 0;
  atualizar()
}

atualizar();

iniciar.addEventListener("click",iniciarTempo);
pausar.addEventListener("click",pausarTempo);
zerar.addEventListener("click",zerarTempo);