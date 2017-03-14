var regExp = /\(d{2}\)\s\d{4,5}-?\d{4}/g;

// Opera��es com String API - Modificadores
//  i   Case-insensitive matching
//  g   Global matching (match em um e continua)
//  m   Multiline matching

var telefone = "<table><tr><td>(80) 999778899</td><td>(90) 99897-8877</td><td>(70) 98767-9999</td></tr></table>";
console.log(telefone.match(regExp));

