function Fundo(context, image) {
  this.context = context;
  this.image = image;
  this.velocidade = 0;
  this.posicaoEmenda = 0;
}

Fundo.prototype = {
  atualizar: function() {
    this.posicaoEmenda += this.velocidade;

    if(this.posicaoEmenda > this.image.height) {
      this.posicaoEmenda = 0;
    }

  },
  desenhar: function() {
    var posicaoY = this.posicaoEmenda - this.image.height;
    this.context.drawImage(this.image, 0, posicaoY, this.image.width, this.image.height);

    posicaoY = this.posicaoEmenda;
    this.context.drawImage(this.image, 0, posicaoY, this.image.width, this.image.height);

  }
}