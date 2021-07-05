//Não se pode utilizar o this. numa arrow function.
// let soma = x => x + this.x;
// let soma = x => x + x;
// console.log(soma(2))

// function numeroAleatorio(x) {
//   return ((Math.random() * x)).toFixed(0);
// }

// console.log(numeroAleatorio(10))

// function verificaTipoDado(x) {
//   let tipo = typeof x;
//   let tiposValidos = ['string', 'number', 'boolean'];
//   for(let type of tiposValidos){
//     if(type === tipo){
//       console.log(`O tipo do dado '${x}' é -> ${tipo}.`);
//     }
//   }

// }

// verificaTipoDado("oi");
// verificaTipoDado(true);
// verificaTipoDado(1);

// function tornaPositivo(x = 0){
//   return Math.abs(x);
// }

// console.log(tornaPositivo(-12))

// function contaLetras(texto) {
//   let tamanhoTexto = texto.length;
//   if (tamanhoTexto > 10) {
//     console.log("Texto muito longo.");
//   }
//   if (tamanhoTexto <= 10) {
//     console.log("Texto dentro do limite.");
//   }
// }

// contaLetras("ola, bom dia!");
// contaLetras("Bem vindo!");

// function decrementaValor(num) {
//   for (let x = num; x > 0; x--) {
//     if (x % 2 === 0) {
//       console.log(`Número par: ${x}`);
//     }
//   }
// }

// decrementaValor(29);

// let arrayNum = [1,2,3,4,5];
// console.log()

// let estadoCivil = {
//   estadoCivil: "Solteiro"
// };

// Object.assign(pessoa, estadoCivil);

// delete pessoa.peso;
// pessoa.peso = 80;
// console.log(pessoa);

// console.log(Object.keys(pessoa))

// let pessoa = {
//   nome: "Joao",
//   idade: 19,
//   peso: 80.0
// };

// let pessoa3 = {
//   nome: "Joao",
//   idade: 19,
//   peso: 80.0
// };

// let pessoa2 = pessoa;
// console.log(pessoa2 === pessoa)
// pessoa2.nome = 'carol';

// let vetorNomes = ["João", "Carol", "Leandro", "Carol", "Kátia"];

// vetorNomes.pop();
// vetorNomes.pop();
// vetorNomes.pop();
// console.log(vetorNomes)
// vetorNomes.push('Carlos', 'Maria', 'José');
// vetorNomes.shift();
// vetorNomes.shift();
// vetorNomes.shift();
// vetorNomes.unshift('Leandro', 'Kátia', 'Carol', 'João')
// vetorNomes.pop()

// console.log(vetorNomes.indexOf("Carol"));
// console.log(vetorNomes.lastIndexOf("Carol"));

// console.log(vetorNomes.slice(1,2))
// let nomeRemovido = vetorNomes.pop();
// console.log(nomeRemovido);
// console.log(vetorNomes);
// vetorNomes.push('Kátia')

// let nomeRemovido = vetorNomes.shift();
// console.log(nomeRemovido);
// vetorNomes.unshift('João');
// console.log(vetorNomes)
// let arrayNumeros = [1, 24, 1, 3, 5, 6, 7, 222, 6, 2, 1, 1, 3, 77, 1];
// function qtdPessoa(x = 1) {
//   let cont = 0;
//   let posicoes = [];
//   for (let i = 0; i < arrayNumeros.length; i++) {
//     if (arrayNumeros[i] === x) {
//       posicoes[cont] = i;
//       cont++;
//     }
//   }
//   return cont, posicoes;
// }

// console.log(qtdPessoa());

// console.log(vetorNomes)
// console.log(vetorNomes.slice(-3))
// let cont = 0;
// let lendoArray = arrayNumeros.forEach((num) => {
//   if (num === 1) {
//     cont++;
//   }
// });

// console.log(cont);

// console.log(arrayNumeros.includes(3))
// console.log(arrayNumeros.includes(7))
// console.log(arrayNumeros.includes(12))
// console.log(arrayNumeros.includes(222))

// console.log(arrayNumeros)
// console.log(arrayNumeros.reverse())

// let nomeCompleto = '\n               Joao vitor lima lago santos';
// console.log(nomeCompleto)
// console.log(nomeCompleto.trim())

// let idPessoa = "1";
// console.log(idPessoa.padStart(10, "0"));
// console.log(idPessoa.padEnd(10, "0"));

// let nome = "Joao Vitor Lima Lago Santos";
// let nomeDividido = nome.split(" ");
// console.log(nomeDividido);
// console.log(nomeDividido.join(" "));

// console.log("oi \n".repeat(2));

// function exibirPalavras(...args){
//   args.forEach(string => {console.log(string)});
// }

// exibirPalavras('joao', 'é', 'preguiçoso', '!');

// let pessoa ={
//   nome: 'joao',
//   idade: 19
// }

// const {nome: vNome, idade: vIdade} = pessoa;

// console.log(vNome);
// console.log(vIdade)

// let arrayNumbers = [1,2,3,4,5];

// const [num1, num2, num3] = arrayNumbers;

// console.log(num1)
// console.log(num2)
// console.log(num3)

// let pessoa = {
//   'nome': 'joao',
//   'idade': 19
// }

// // console.log(pessoa

// let stringPessoa = JSON.stringify(pessoa)
// console.log(stringPessoa)
// let jsonPessoa = JSON.parse(stringPessoa)
// console.log(jsonPessoa)

// let onibus = {
//   rodas: 8,
//   portas: 2,
//   limitePassageiros: 40
// }

// onibus.janelas = 20;
// delete onibus.rodas;
// console.log(onibus)
// console.log(Object.keys(onibus))

// let arrayNomes = ['Cassandra','Joao', 'Lucas', 'Ana', 'Miguel'];

// if(arrayNomes.includes('Joao')){
//   let posicao = arrayNomes.indexOf('Joao');
//   console.log(arrayNomes[posicao])
// }

// let arrayNumber1 = [1, 2, 3, 4, 5];
// let arrayNumber2 = [1, 2, 3, 4];

// function verificaQtdNumeros(arrayNumber) {
//   if (arrayNumber.length < 5) {
//     console.log("Poucos elementos");
//   } else {
//     console.log("Muitos elementos");
//   }
// }

// verificaQtdNumeros(arrayNumber1);
// verificaQtdNumeros(arrayNumber2);

// let arrayNumber = [1, 2, 3, 4, 5];

// let totalSoma = 0;
// arrayNumber.forEach((num) => {
//   totalSoma += num;
// });

// console.log(totalSoma);

// let recibo = {
//   codCliente: 1,
//   "pedido(s)": ["Pão", "Leite", "Café"],
//   nomeAtendente: "Leticia"
// };

// console.log(recibo);

// let frase = "O Clima está frio hoje.";
// let arrayFrase = frase.split(" ");
// arrayFrase.forEach((value) => {
//   console.log(value);
// });

// const calculadora = {
//   soma: function (num1, num2) {
//     return(num1 + num2);
//   },
//   subtracao: function (num1, num2) {
//     return(num1 - num2);
//   },
//   multiplicacao: function (num1, num2) {
//     return(num1 * num2);
//   },
//   divisao: function (num1, num2) {
//     return(num1 / num2);
//   }
// };

// console.log(calculadora.soma(4, 8));
// console.log(calculadora.subtracao(5, 4));
// console.log(calculadora.multiplicacao(2, 8));
// console.log(calculadora.divisao(3, 1));

// let pessoa = {
//   nome: "",
//   idade: 0
// };

// let joao = Object.create(pessoa);
// joao.nome = 'joao';
// joao.idade = 19;

// function criarPessoa(nome = "", idade = 0) {
//   let pessoa = Object.create({});
//   pessoa.nome = nome;
//   pessoa.idade = idade;
//   return pessoa;
// }

// let joao = criarPessoa("Joao", 19);
// console.log(joao);

// function Pessoa(nome = "", idade = 0) {
//   this.nome = nome;
//   this.idade = idade;
// }

// let joao = new Pessoa("Joao", 19);
// console.log(joao);
// console.log(Object.getPrototypeOf(joao))

// function Pessoa(nome = "", idade = 0) {
//   this.nome = nome;
//   this.idade = idade;
// }

// Pessoa.prototype.comprimentar = function () {
//   console.log("Olá!");
// };

// Pessoa.prototype.pedir = function () {
//   console.log("Poderia me dar isso?");
// };

// let joao = new Pessoa("Joao", 19);
// console.log(joao);
// console.log(Object.getPrototypeOf(joao));
// joao.comprimentar();
// joao.pedir();

// class Pessoa {
//   constructor(nome = "", idade = null) {
//     this.nome = nome;
//     this.idade = idade;
//   }
//   comprimentar() {
//     return "Olá, como você está?";
//   }
// }
// //Defiinindo valores padrões para o prototype.
// Pessoa.prototype.nome = "";
// Pessoa.prototype.idade = 0;

// let joao = new Pessoa("Joao", 19);
// console.log(joao);
// let semDefinicao = new Pessoa();
// console.log(semDefinicao);
// console.log(Pessoa.prototype);

// class Pessoa {
//   constructor(nome = "", idade = null) {
//     this.nome = nome;
//     this.idade = idade;
//   }
//   comprimentar() {
//     return "Olá, como você está?";
//   }
// }

// //Uma definição de constantes para objetos.
// let nome = Symbol();
// let idade = Symbol();

// Pessoa.prototype[nome] = '';
// Pessoa.prototype[idade] = 0;

// let joao = new Pessoa('Joao', 19);
// console.log(joao)
// console.log(Pessoa.prototype)

// class Pessoa {
//   constructor(nome = "", idade = null) {
//     this.nome = nome;
//     this.idade = idade;
//   }

//   definirNome(value) {
//     this.nome = value;
//   }

//   verNome() {
//     return this.nome;
//   }

//   definirIdade(value) {
//     this.idade = value;
//   }

//   verIdade() {
//     return this.idade;
//   }
// }

// let joao = new Pessoa();
// console.log(joao);
// joao.definirNome("Joao");
// joao.definirIdade(19);

// class Mamifero {
//   constructor(patas = 4) {
//     this.patas = patas;
//   }
//   correr() {
//     return "Está correndo!";
//   }
// }

// class Cachorro extends Mamifero {
//   constructor(patas = 4, cor = null) {
//     super(patas);
//     this.cor = cor;
//   }
// }

// let viraLata = new Cachorro(4, "Amarelo");
// // console.log(viraLata);

// console.log(viraLata instanceof Mamifero);

// class ContaBanco {
//   constructor(saldo = 0) {
//     this.saldo = saldo;
//   }

//   depositar(value) {
//     this.saldo += value;
//     return `O valor: (${value}) foi depositádo com sucesso! Saldo atual de (${this.saldo}).`;
//   }
//   sacar(value) {
//     if (this.saldo >= value) {
//       this.saldo -= value;
//       return `O valor: (${value}) foi sacado com sucesso! Saldo atual de ${this.saldo}.`;
//     } else {
//       return `Saldo insuficiente na conta. Valor de saque desejado: (${value}) > valor atual (${this.saldo}).`;
//     }
//   }
// }

// let ContaJoao = new ContaBanco(100);
// console.log(ContaJoao.saldo);
// console.log(ContaJoao.sacar(50));
// console.log(ContaJoao.sacar(50));
// console.log(ContaJoao.sacar(50));
// console.log(ContaJoao.depositar(200));
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
    return `O item (${value}) foi adicionado com sucesso!`;
  }
  removerItem(value) {
    for (let value of this.item) {
      if (value.nome === value) {
        this.qtdTotal--;
        let posicao = this.item.indexOf(value);
        let valorItem = value.valor;
        this.valorTotal -= valorItem;
        this.item.splice(posicao, posicao);
      } else {
        return `Item não encontrado!`;
      }
    }
  }
}

let bicicleta = new Item("Bicicleta", 5000);
let camiseta = new Item("Camiseta", 50);

let meuCarrinho = new CarrinhoCompras();
meuCarrinho.adicionarItem(bicicleta);
meuCarrinho.adicionarItem(camiseta);
console.log(meuCarrinho.item);
console.log(meuCarrinho.qtdTotal);
// let array =[1,2];
// console.log(array.includes(1))

// class Pessoa {
//   constructor(nome = "") {
//     this.nome = nome;
//   }
// }

// let carlos = new Pessoa("Carlos");
// let rebeca = new Pessoa("Rebeca");
// let caio = new Pessoa("Caio");
// let arrayObj = [carlos, rebeca, caio];

// for (let value of arrayObj) {
//   console.log(value.nome);
// }
