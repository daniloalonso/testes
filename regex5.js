var regExp = /^\([0-9]{2}\) [0-9]{4}-[0-9]{4}$/;

// Quantificadores 1
//  {2}   = n�mero espec�fico de 2
//  {6,}  = n�mero m�nimo de 6 at� o infinito
//  {4,5} = n�mero m�nimo de 4 e m�ximo de 5

var telefone = "(80) 9876-5432";
console.log(regExp.test(telefone));

