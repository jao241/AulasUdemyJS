// let reg1 = new RegExp("test");
// let reg2 = /test/;
// console.log(reg2);

// let temArroba = new RegExp("gmail");

// console.log(temArroba.test("Vorque45@gmail.com"));

// let regString = new RegExp("[a-z]");
// let valorVerificado = regString.test("1234A234234".toLowerCase);
// if (valorVerificado) {
//   console.log("Valor inserido em formato inválido!");
// } else {
//   console.log(valorVerificado);
// }

// let dReg = /\D/; //\d
// let wReg = /\W/; //\w
// let sReg = /\S/; //s
// let pontoReg = /./;
// console.log(pontoReg.test("a"));

// let dReg = /\d\d\d\d/;
// console.log(dReg.test("111"));

// let dRegPlus = /\d+/;

// console.log(dRegPlus.test("11111"));

let verificaSomenteNum = /\d{5}-\d{4}/;
console.log(verificaSomenteNum.test("99999-999"));
