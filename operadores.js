console.log("0 == '':                 " + (0 == ""));
console.log("0 == '0':                " + (0 == "0"));
console.log("1 == '1':                " + (1 == "1"));
console.log("10 == '10':              " + (10 == "10"));
console.log("false == undefined:      " + (false == undefined));
console.log("false == null:           " + (false == null));
console.log("null == undefined:       " + (null == undefined));
console.log("1 == true:               " + (1 == true));
console.log("0 == false:              " + (0 == false));
console.log("0 == '\\n':               " + (0 == "\n"));
console.log("10 == 'new Number(10)':  " + (10 == new Number(10)));
console.log("-------------------------------------");
console.log("-------------------------------------");
console.log("10 === '10':             " + (10 === "10"));
console.log("1 === true:              " + (1 === true));
var x = {};
var y = {};
console.log("x == y:                  " + (x == y));
console.log("x === y:                 " + (x === y));
var z = x;
console.log("x == z:                  " + (x == z));
console.log("x === z:                 " + (x === z));
console.log("-------------------------------------");
console.log("0 || 2:                  " + (0 || 2));
console.log("1 || 2:                  " + (1 || 2));
console.log("0 && 2:                  " + (0 && 2));
console.log("1 && 2:                  " + (1 && 2));
console.log("-------------------------------------");
console.log("!!0:                     " + (!!0));
console.log("!!NaN:                   " + (!!NaN));
console.log("!!'':                    " + (!!""));
console.log("!!false:                 " + (!!false));
console.log("!!null:                  " + (!!null));
console.log("!!undefined:             " + (!!undefined));
console.log("-------------------------------------");
console.log("-------------------------------------");

var generateSerial = function (max) {
    //if (max === null || max === undefined || max === 0) {
    //if (!max) {
    //    max = 1000;
    //}
    max = max || 1000;
    max = 1000;
    return Math.floor(Math.random() * max);
};

console.log(generateSerial(1000));
console.log(generateSerial(100));
console.log(generateSerial(10));
console.log(generateSerial());

console.log("-------------------------------------");
console.log("-------------------------------------");
// Operadores bit a bit

//  1 | 2 = 3
//
//  0001 = 1
//  0010 = 2
//  0011 = 3
//
//  1 ou 0 = 1
console.log("1 | 2:                   " + (1 | 2));

//  1 & 2 = 0
//
//  0001 = 1
//  0010 = 2
//  0000 = 0
//
//  1 e 0 = 0
console.log("1 & 2:                   " + (1 & 2));

console.log("-------------------------------------");
console.log("-------------------------------------");

console.log("typeof 10:               " + (typeof 10));
console.log("typeof 'Danilo':         " + (typeof "Danilo"));
console.log("typeof true:             " + (typeof true));
console.log("typeof undefined:        " + (typeof undefined));
console.log("typeof null:             " + (typeof null));
console.log("typeof {}:               " + (typeof {}));
console.log("typeof /abc/:            " + (typeof /abc/));
console.log("typeof []:               " + (typeof []));
console.log("typeof new Date():       " + (typeof new Date()));
console.log("typeof function () { }:  " + (typeof function () { }));
console.log("-------------------------------------");
console.log("-------------------------------------");

var Pessoa = function (nome, idade) {
    this.nome = nome;
    this.idade = idade;
};
var pedro = new Pessoa("Pedro", 20);
console.log(pedro);
// INSTANCEOF verifica se o objeto é do tipo X, Y ou Z
console.log("pedro instanceof Pessoa: " + (pedro instanceof Pessoa));
console.log("pedro instanceof Date    " + (pedro instanceof Date));
// IN verifica se uma propriedade existe no objeto
console.log("'nome' in pedro:         " + ("nome" in pedro));
console.log("'peso' in pedro:         " + ("peso" in pedro));
delete pedro.nome;
console.log("delete pedro.nome");
console.log("'nome' in pedro:         " + ("nome" in pedro));
console.log("-------------------------------------");
console.log("-------------------------------------");
console.log("10 > 9:                  " + (10 > 9));
console.log("1.1 < 1.2:               " + (1.1 < 1.2));
console.log("'a' < 'b':               " + ("a" < "b"));
console.log("'ana' < 'maria':         " + ("ana" < "maria"));
console.log("-------------------------------------");
console.log("-------------------------------------");

var x = 0;

console.log("x:                       " + (x));
console.log("x++:                     " + (x++));
console.log("x++:                     " + (x++));
console.log("x++:                     " + (x++));
console.log("x:                       " + (x));
console.log("++x:                     " + (++x));
console.log("++x:                     " + (++x));
console.log("x:                       " + (x));
