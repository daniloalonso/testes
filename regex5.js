var regExp = /^\([0-9]{2}\) [0-9]{4}-[0-9]{4}$/;

// Quantificadores 1
//  {2}   = número específico de 2
//  {6,}  = número mínimo de 6 até o infinito
//  {4,5} = número mínimo de 4 e máximo de 5

var telefone = "(80) 9876-5432";
console.log(regExp.test(telefone));

