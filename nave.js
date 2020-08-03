function Nave(context, teclado, image) {
  this.context = context;
  this.teclado = teclado;
  this.image = image;
  this.x = 0;
  this.y = 0;
  this.velocidade = 0;
}

Nave.prototype = {
  atualizar: function () {
    if(this.teclado.pressionada(SETA_ESQUERDA) && this.x > 0) {
      this.x -= this.velocidade;
    }
    if(this.teclado.pressionada(SETA_DIREITA) && this.x < this.context.canvas.width - this.image.width) {
      this.x += this.velocidade;
    }
    if(this.teclado.pressionada(SETA_ACIMA) && this.y > 0) {
      this.y -= this.velocidade;
    }
    if(this.teclado.pressionada(SETA_ABAIXO) && this.y < this.context.canvas.height - this.image.height) {
      this.y += this.velocidade;
    }
  },
  desenhar: function() {
    this.context.drawImage(this.image, this.x, this.y, this.image.width, this.image.height)
  },
  atirar: function() {
    var t = new Tiro(this.context, this);
    this.animacao.novoSprite(t);
    this.colisor.novoSprite(t);
  },
  retangulosColisao: function() {
    var rets = [
      { x: this.x + 2, y: this.y + 19, largura: 9, altura: 13 },
      { x: this.x + 13, y: this.y + 3, largura: 10, altura: 33 },
      { x: this.x + 25, y: this.y + 19, largura: 9, altura: 13 }
    ];

    for(var i in rets) {
      this.context.save();
      this.context.strokeStyle = 'yellow';
      this.context.strokeRect(rets[i].x, rets[i].y, rets[i].largura, rets[i].altura);
      this.context.restore();
    }

    return rets;

  },
  colidiuCom: function(outro) {
    if(outro instanceof Ovni) {
      this.animacao.desligar();
      alert('GAME OVER!');
    }
  }
}