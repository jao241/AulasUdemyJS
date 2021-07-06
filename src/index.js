// class Item {
//   constructor(nome, qtdItem, valor) {
//     this.nome = nome;
//     this.qtdItem = qtdItem;
//     this.valor = valor * this.qtdItem;
//   }
// }

// class CarrinhoCompras {
//   constructor(item = [], qtdTotal = 0, valorTotal = 0) {
//     this.item = item;
//     this.qtdTotal = qtdTotal;
//     this.valorTotal = valorTotal;
//   }
//   adicionarItem(value) {
//     this.item.push(value);
//     this.qtdTotal += value.qtdItem;
//     this.valorTotal += value.valor;
//     // return `O item (${value}) foi adicionado com sucesso!`;
//   }
//   removerItem(removeValue) {
//     for (let i = 0; i < this.item.length; i++) {
//       if (this.item[i].nome === removeValue) {
//         this.qtdTotal -= this.item[i].qtdItem;
//         this.valorTotal -= this.item[i].valor;
//         this.item.splice(i, i);
//         // console.log(this.item);
//       }
//     }
//   }
// }

// let bicicleta = new Item("Bicicleta", 1, 5000);
// let camiseta = new Item("Camiseta", 3, 50);

// let meuCarrinho = new CarrinhoCompras();
// meuCarrinho.adicionarItem(bicicleta);
// meuCarrinho.adicionarItem(camiseta);
// // console.log(meuCarrinho.valorTotal);
// meuCarrinho.removerItem("Camiseta");
// // console.log(meuCarrinho.valorTotal);

// class EnderecoCliente {
//   constructor(rua, bairro, cidade, estado) {
//     this.rua = rua;
//     this.bairro = bairro;
//     this.cidade = cidade;
//     this.estado = estado;
//   }
//   // Métoto setter
//   set mudarRua(newValue) {
//     this.rua = newValue;
//   }
//   // Métoto setter
//   set mudarBairro(newValue) {
//     this.bairro = newValue;
//   }
//   // Métoto setter
//   set mudarcidade(newValue) {
//     this.cidade = newValue;
//   }
//   // Métoto setter
//   set mudarEstado(newValue) {
//     this.estado = newValue;
//   }
// }

// let meuEndereco = new EnderecoCliente(
//   "Avenida G",
//   "Urbis VI",
//   "Vitória da Conquista",
//   "Bahia"
// );

// console.log(meuEndereco);
// meuEndereco.mudarRua = "Juquita França";
// meuEndereco.mudarBairro = "Guarani";
// meuEndereco.mudarcidade = "Paraisopolis";
// meuEndereco.mudarEstado = "MG";
// console.log(meuEndereco);

// class Carro {
//   constructor(marca, cor, gasolina = 50) {
//     this.marca = marca;
//     this.cor = cor;
//     this.gasolina = gasolina;
//   }
//   dirigir() {
//     let value = 20;
//     if (this.gasolina > value) {
//       this.gasolina -= 10;
//       return `Dando umas voltas por ai!`;
//     } else {
//       return `Abasteça o carro, gasolina atual: (${value}/100)`;
//     }
//   }
//   abastecer() {
//     if (this.gasolina < 50) {
//       this.gasolina = 100;
//       return `Tanque de combustível abastecido!`;
//     } else {
//       return `Não é possível abastecer pois o tanque está cheio!`;
//     }
//   }
// }

// let meuCarro = new Carro("Ford", "Prata");
// console.log(meuCarro.dirigir());
// console.log(meuCarro.abastecer());
// console.log(meuCarro.abastecer());

class ContaBancaria {
  constructor(saldoCCorrente, saldoCPoupanca, jurosPoupanca) {
    this.saldoCCorrente = saldoCCorrente;
    this.saldoCPoupanca = saldoCPoupanca;
    this.jurosPoupanca = jurosPoupanca;
  }
  // Método depositar para conta corrente
  depositarCCorrente(newValue) {
    this.saldoCCorrente += newValue;
    return `Valor depositado na conta corrente com sucesso!`;
  }
  // Método depositar para conta poupança
  depositarCPoupanca(newValue) {
    this.saldoCPoupanca += newValue;
    return `Valor depositado na conta poupança com sucesso!`;
  }
  // Método que transfere saldo da conta poupança para a corrente
  transferir(newValue) {
    if (this.saldoCPoupanca >= newValue) {
      this.saldoCCorrente += newValue;
      this.saldoCPoupanca -= newValue;
      return `Transferencia efetuada com sucesso!`;
    } else {
      return `Não foi possível realizar a tranferencia por insuficiencia de saldo na conta poupança!`;
    }
  }
}

class ContaEspecial extends ContaBancaria {
  constructor(saldoCCorrente, saldoCPoupanca, jurosPoupanca) {
    super(saldoCCorrente, saldoCPoupanca, jurosPoupanca * 2);
    this.saldoCCorrente = saldoCCorrente;
    this.saldoCPoupanca = saldoCPoupanca;
    this.jurosPoupanca = jurosPoupanca * 2;
  }
}

let minhaContaComum = new ContaBancaria(200, 100, 20);
let minhaContaEspecial = new ContaEspecial(100, 200, 40);

console.log(minhaContaComum.jurosPoupanca);
console.log(minhaContaEspecial.jurosPoupanca);
