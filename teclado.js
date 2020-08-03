var SETA_ESQUERDA = 37;
var SETA_DIREITA = 39;
var SETA_ACIMA = 38;
var SETA_ABAIXO = 40;
var ESPACO = 32;

function Teclado(elemento) {
  this.elemento = elemento;
  this.pressionadas = [];
  this.disparadas = [];
  this.funcoesDisparo = [];

  this.elemento.addEventListener('keydown', (evento) => {
    this.pressionadas[evento.keyCode] = true;

    if(this.funcoesDisparo[evento.keyCode] && !this.disparadas[evento.keyCode]) {
      this.disparadas[evento.keyCode] = true;
      this.funcoesDisparo[evento.keyCode]();
    }
  });

  this.elemento.addEventListener("keyup", evento => {
    this.pressionadas[evento.keyCode] = false;
    this.disparadas[evento.keyCode] = false;
  });
}

Teclado.prototype = {
  pressionada: function(tecla) {
    return this.pressionadas[tecla];
  },
  disparou: function(tecla, callback) {
    this.funcoesDisparo[tecla] = callback;                                                                                             
  }
}