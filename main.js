function sonido(idElementoAudio){
   document.querySelector(idElementoAudio). play();
     
}


 const listaDeTeclas =  document.querySelectorAll('.tecla');
 

for( contador = 0 ;contador<listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador]
     const clase = tecla.classList[1]
     console.log(clase)
    const inAudio = `#som_${clase}`
    
    tecla .onclick=function () {
        sonido(inAudio);
    };
    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code==='Enter'){
            tecla.classList.add('ativa')
        }
       

    }
    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }

}

