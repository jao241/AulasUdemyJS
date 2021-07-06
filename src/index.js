class Item {
  constructor(nome, valor) {
    this.nome = nome;
    this.valor = valor;
  }
}

class CarrinhoCompras {
  constructor(item = [], qtdTotal = 0, valorTotal = 0) {
    this.item = item;
    this.qtdTotal = qtdTotal;
    this.valorTotal = valorTotal;
  }
  adicionarItem(value) {
    this.item.push(value);
    this.qtdTotal++;
    this.valorTotal += value.valor;
    // return `O item (${value}) foi adicionado com sucesso!`;
  }
  removerItem(removeValue) {
    for (let i = 0; i < this.item.length; i++) {
      if (this.item[i].nome === removeValue) {
        this.qtdTotal--;
        this.valorTotal -= this.item[i].valor;
        this.item.splice(i, i);
        console.log(this.item);
      }
    }
  }
}

let bicicleta = new Item("Bicicleta", 5000);
let camiseta = new Item("Camiseta", 50);

let meuCarrinho = new CarrinhoCompras();
meuCarrinho.adicionarItem(bicicleta);
meuCarrinho.adicionarItem(camiseta);
meuCarrinho.removerItem("Camiseta");
