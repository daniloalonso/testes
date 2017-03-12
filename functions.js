console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
//// Funções declaradas podem estar em qualquer lugar do código, pois são carregadas primeiro
//// Function Declaration
//function teste1(a, b) {
//    return a + b;
//}

//// Funções expressas apenas devem ser declaradas antes de serem chamadas
//// Function Expression
//var teste2 = function (a, b) {
//    return a + b;
//};

//// Função dentro de função
//var hello = function () {
//    return function haha() {
//        return "HELLO";
//    };
//};

//console.log(hello);
//console.log(hello());
//console.log(hello()());

//// Functions lambda
//var produto = { nome: 'iPhone 7', preco: 2000 };
//var formulaImpostoA = function (preco) { return preco * 0.35; };
//var formulaImpostoB = function (preco) { return preco * 0.20; };
//var calcularPreco = function (produto, formulaImposto) {
//    return produto.preco + formulaImposto(produto.preco);
//};
//var res1 = calcularPreco(produto, formulaImpostoA);
//var res2 = calcularPreco(produto, formulaImpostoB);

//console.log("Produto       : " + produto.nome);
//console.log("Preço         : " + produto.preco);
//console.log("ImpostoA      : " + formulaImpostoA(produto.preco));
//console.log("ImpostoB      : " + formulaImpostoB(produto.preco));
//console.log("--------------------------");
//console.log("Valor Final   : " + (res1 + res2).toString());

//// Exemplo1
//var pessoa = {
//    nome: "Zé das Cove",
//    idade: 60,
//    getIdade: function () {
//        return this.idade; // o 'this' se refere ao escopo atual.
//    }
//};

// Exemplo2
//var getIdade = function (extra) {
//    console.log(arguments);
//    return this.idade + extra;
//}
//var pessoa = {
//    nome: "Zé das Cove",
//    idade: 60,
//    getIdade: getIdade // repara que não tem o (), pois estaria invocando. isso é uma REFERENCIA à função
//};

//console.log(getIdade(1)); // isso NÃO vai retornar pq NÃO tenho 'idade' no escopo global!
//console.log(pessoa.getIdade(1)); // o 'getIdade' passará a estar DENTRO do escopo do objeto, então, retornará normalmente
//console.log(getIdade.call(pessoa, 1, 111, "xixi")); // passa o objeto 'pessoa' (e o parâmetro um atras do outro) será passado como contexto no método 'call', fazendo com que o 'getIdade' passe a ficar dentro do escopo 'pessoa'
//console.log(getIdade.apply(pessoa, [1])); // passa o objeto 'pessoa' (e o parâmetro em formato de ARRAY) será passado como contexto no método 'call', fazendo com que o 'getIdade' passe a ficar dentro do escopo 'pessoa'




//// Funções Construtoras X Funções Fábrica ===========================================================================================================
//// Funções Fábrica
//var criarPessoa = function (nome, idade) {
//    return {
//        nome: nome,
//        idade: idade
//    };
//};
//console.log(criarPessoa("Pedro", 20));
//console.log(criarPessoa("Maria", 30));



//// Funções Construtoras
//var Pessoa = function (nome, idade) {
//    this.nome = nome;
//    this.idade = idade;
//};
//console.log(new Pessoa("Pedro", 20));
//console.log(new Pessoa("Maria", 30));

//// como é

//var pedro = {};
//Pessoa.call(pedro, "Pedro", 20);
//console.log(pedro);

//var maria = {};
//Pessoa.call(maria, "Maria", 30);
//console.log(maria);



// Closures ===============================================================================================

var helloWorld = function () {
    var message = "Hello World!";// <----|
    return function () { //              |  essa referencia não é perdida
        return message; // <-------------|
    };
};

console.log(helloWorld); // Não mostra
console.log(helloWorld()); // Não mostra
console.log(helloWorld()()); // Mostra
var fnHello = helloWorld();
console.log(fnHello()); // Mostra
