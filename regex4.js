var regExp = /^\([0-9][0-9]\) [0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/;

// Grupos

//  [abc]   = Vai dar match apenas as letras a, b e c
//  [^abc]  = Vai negar, ou seja, vai dar match se n�o tiver a, b e c
//  [0-9]   = Vai dar match nos n�meros de 0 a 9
//  [^0-9]  = n�o vai dar match nos npumeros de 0 a 9

var telefone = "(80) 9876-5432";
console.log(regExp.test(telefone));
