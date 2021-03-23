/*inicio de la funcion de evalluacion mutuamente exclusivos 
JUEGO
index entrar`` */
let entrarStatus = false;
let registroStatus = false;
let lista = document.getElementById("regis");
lista.addEventListener('click', ()=>{
let entrar = document.getElementById("containerEntrar");
let reg = document.getElementById("containerRegistro");
   if(registroStatus === false && entrarStatus === true){
entrar.style.scale= 0;
reg.style.scale= 1;
  entrarStatus= false;
 registroStatus = true;
  }else if(registroStatus === false && entrarStatus === false ){
reg.style.scale= 1;
 registroStatus = true;
  }else{
reg.style.scale= 0;
registroStatus = false;
  }
})

/*inicio de la funcion de evalluacion mutuamente exclusivos 
JUEGO
index REGISTRAR`` */
let index = function(){
let entrar = document.getElementById("containerEntrar");
let reg = document.getElementById("containerRegistro");
 if(entrarStatus === false && registroStatus === true){
reg.style.scale= 0;
entrar.style.scale= 1;
    entrarStatus=true;
registroStatus = false;
  }else if(entrarStatus === true){
entrar.style.scale= 0;
  entrarStatus=false;
}else if(entrarStatus === false){
entrar.style.scale= 1;
    entrarStatus=true;
}
}
