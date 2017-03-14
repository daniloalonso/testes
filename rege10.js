var regExp = /\(d{2}\)\s\d{4,5}-?\d{4}/;

// Opera��es com String API
//  match   - Executa uma busca na String e retorna um array contendo os dados encontrados, ou null
//  split   - Divide a String com base em uma outra String fixa ou express�o regular
//  replace - Substitui partes da String com base em uma outra String fixa ou epress�o regular

var telefone = "<table><tr><td>(80) 999778899</td><td>(90) 99897-8877</td><td>(70) 98767-9999</td></tr></table>";
console.log(telefone.match(regExp));

