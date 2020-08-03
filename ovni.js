function Ovni(context, image) {
  this.context = context;
  this.image = image;
  this.x = 0;
  this.y = 0;
  this.velocidade = 0;
}

Ovni.prototype = {
  desenhar: function() {
    this.context.drawImage(this.image, this.x, this.y, this.image.width, this.image.height);
  },
  atualizar: function() {
    this.y += this.velocidade;

    if(this.y > this.context.canvas.height) {
      this.animacao.excluirSprite(this);
      this.colisor.excluirSprite(this);
    }
  },
  retangulosColisao: function() {
    var rets = [
      { x: this.x + 20, y: this.y + 1, largura: 25, altura: 10 },
      { x: this.x + 2, y: this.y + 11, largura: 60, altura: 12 },
      { x: this.x + 20, y: this.y + 23, largura: 25, altura: 7 }
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
    if(outro instanceof Tiro) {
      this.animacao.excluirSprite(this);
      this.colisor.excluirSprite(this);
      this.animacao.excluirSprite(outro);
      this.colisor.excluirSprite(outro);
    }
  }
}