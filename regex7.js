var regExp = /^\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}$/;

// Quantidicadores 2 (colocar na frente)
//  ? = Zero ou um
//  * = Zero ou mais
//  + = Um ou mais


var telefone1 = "(80) 987654231";
console.log(regExp.test(telefone1));
var telefone2 = "(80) 98765-4321";
console.log(regExp.test(telefone2));

