console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");

//var carros = [];
//carros[0] = "Ka";
//carros[1] = "Corsa";
//carros[2] = "Palio";

//var carros = ["Ka", "Corsa", "Palio"];

//var carros = new Array(10); // é apenas tamanho inicial, inserindo elementos undefined
//var carros = new Array();
//carros[0] = "Ka";
//carros[1] = "Corsa";
//carros[2] = "Palio";

//var carros = new Array("Ka", "Corsa", "Palio");
//console.log(carros);







//var carros = ["Ka", "Corsa", "Palio"];
//console.log(carros.toString());
//console.log(carros.length); // retorna o tamanho do array
//console.log(carros.push("Gol")); // adiciona ao final do array o item e retorna o tamanho do array
//console.log(carros.toString());

//console.log(carros.pop()); // remove o pultimo item da lista e retorna o que ele removeu
//console.log(carros.toString());

//console.log(carros.unshift("Gol")); // adiciona no topo do array o item e retorna o tamanho do array
//console.log(carros.toString());

//console.log(carros.shift()); // remove o primeiro item da lista e retorna o que ele retirou
//console.log(carros.shift());
//console.log(carros.toString());

//console.log(carros.indexOf("Corsa")); // retorna o indice de um determinado item no array
//console.log(carros.unshift("Ka"));
//console.log(carros.toString());
//console.log("=================================================================\n");






//var carros = ["Ka", "Corsa", "Palio"];
//var pos = carros.indexOf("Corsa"); // armazena o indice de um determinado item no array
//console.log(carros.splice(pos, 1)); // (x = indice de referencia, y = quantidade de itens) remove, elementos de uma posição e retorna array com itens removidos
//console.log(carros.toString() + "\n");

//var carros = ["Ka", "Corsa", "Palio"];
//var pos = carros.indexOf("Corsa"); // armazena o indice de um determinado item no array
//console.log(carros.splice(pos, 1, "Sonic")); // (x = indice de referencia, y = quantidade de itens, z = item a ser adicionado na posição) remove e adiciona elementos de uma posição e retorna array com itens removidos
//console.log(carros.toString() + "\n");

//var carros = ["Ka", "Corsa", "Palio"];
//var pos = carros.indexOf("Corsa"); // armazena o indice de um determinado item no array
//console.log(carros.splice(pos, 0, "Sonic")); // (x = indice de referencia, y = quantidade de itens, z = item a ser adicionado na posição) apenas adiciona elementos de uma posição e retorna array vazio
//console.log(carros.toString() + "\n");

//console.log("=================================================================\n");





//var carros = ["Ka", "Corsa", "Palio"];
//carros.forEach(function (elemento) {
//    console.log(elemento);
//});

/*
var carros = [];
carros[0] = { marca: "Ford", modelo: "Ka" };
carros[1] = { marca: "Chevrolet", modelo: "Corsa" };
carros[2] = { marca: "Fiat", modelo: "Palio" };

// FILTER filtra o item pesquisado
var carrosFord = carros.filter(function (elemento) {
    return elemento.marca === "Ford"; // três iguais === compara o tipo também
});

console.log(carrosFord);

// EVERY testa se TODOS os elementos satisfazem uma condição
var carrosFord = carros.every(function (elemento) {
    return elemento.marca === "Ford"; // três iguais === compara o tipo também
});
console.log(carrosFord);


// SOME testa se EXISTE elementos satisfazem uma condição
var carrosFord = carros.some(function (elemento) {
    return elemento.marca === "Ford"; // três iguais === compara o tipo também
});
console.log(carrosFord);


// MAP deriva um array de objetos fazendo uma análise e retornando o resultado da condição em array
var carrosMarca = carros.map(function (elemento) {
    return elemento.marca;
});
console.log(carrosMarca);

var carrosModelosLenght = carros.map(function (elemento) {
    return elemento.modelo.length; // vai retornar tamanho de cada palavra em array
});
console.log(carrosModelosLenght);
 */

/*
var carros = [];
carros[0] = { modelo: "Ka", preco: 28800 };
carros[1] = { modelo: "Corsa", preco: 34750 };
carros[2] = { modelo: "Palio", preco: 32000 };

// REDUCE processa itens de um array (nesse caso vai retorar o total de todos os precos)
var resultado = carros.reduce(function (prev, cur) {
    return prev + cur.preco; // prev = valor atual
}, 0); // começa com valor zero (valor inicial pois o primeiro laço é undefined)

console.log(resultado);
*/

/*
var carros = ["Ka", "Corsa", "Palio"];
var motos = ["Honda", "Yamaha"];

// CONCAT concatena dois arrays
var veiculos = carros.concat(motos);

console.log(resultado);
*/


/*
var carros = ["Ka", "Corsa", "Palio", "Gol"];

// SLICE corta itens de array retornando um array com os itens fatiados
console.log(carros.slice(0, 2));
console.log(carros.slice(1, 3));
console.log(carros.slice(2));

// REVERSE altera o array original revertendo
console.log(carros.reverse());
*/


/*
var carros = [];
carros[0] = { modelo: "Ka", preco: 28800 };
carros[1] = { modelo: "Corsa", preco: 34750 };
carros[2] = { modelo: "Palio", preco: 32000 };

// SORT ordens os itens de arrays (ele altera os indices)
// asc
carros.sort(function (a, b) {
    return a.preco - b.preco;
});
// desc
carros.sort(function (a, b) {
    return b.preco - a.preco;
});
console.log(carros.valueOf());
*/




var carros = ["Ka", "Corsa", "Palio", "Gol"];

// JOIN junta elementos de arrays passando um separador, isso é util para gerar um CSV, por exemplo!
console.log(carros.join(";")); // pega os elementos, junta e separa pelo caractere indicado

// SPLIT separa os elementos de um array, passando uma string de separador e retorna um array com isso
console.log(carros.join(";").split(";"));

// multiplicar uma string varias vezes
console.log(new Array(10).join("ha"));
