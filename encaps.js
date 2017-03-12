console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");

// ZONA no escopo global===================================================================
//var counter = 0;
//var add = function () {
//    return ++counter;
//};

//console.log(add());
//console.log(add());
//console.log(add());

//var itens = [];
//var add = function (item) {
//    itens.push(item);
//    return itens;
//};

//console.log(add('A'));
//console.log(add('B'));
//console.log(add('C'));



//// ENCAPSULAMENTO.. aí sim! ================================================================
//var counter = {
//    value: 0,
//    add: function () {
//        return ++this.value;
//    }
//};

//console.log(counter.add());
//console.log(counter.add());
//console.log(counter.add());

//var itens = {
//    value: [],
//    add: function (item) {
//        this.value.push(item);
//        return this.value;
//    }
//};

//console.log(itens.add('A'));
//console.log(itens.add('B'));
//console.log(itens.add('C'));
//counter.value = undefined;
//console.log(counter.add());



//// ENCAPSULAMENTO.. aí melhor ainda pois nao acessa objetos de dentro  ================================================================
//// factory
//var createCounter = function () {
//    var value = 0;
//    return {
//        add: function () {
//            return ++value;
//        }
//    };
//};

//// construction
//var Counter = function () {
//    var value = 0;
//    this.add = function () {
//        return ++value;
//    };
//};

//var counter1 = createCounter();
//var counter2 = new Counter();
//console.log(counter1.value);
//console.log(counter1.add());
//console.log(counter1.add());
//console.log(counter1.add());
//console.log(counter2.value);
//console.log(counter2.add());
//console.log(counter2.add());
//console.log(counter2.add());







//// MODULE PATTERN ========================================================================================
//var counter = (function () {
//    var value = 0;
//    return {
//        add: function () {
//            return ++value;
//        },
//        reset: function () {
//            value = 0;
//        }
//    };
//})();

//console.log(counter.value);
//console.log(counter.add());
//console.log(counter.add());
//console.log(counter.add());
//counter.reset();
//console.log(counter.add());




// REVEALING MODULE PATTERN ========================================================================================
var counter = (function () {
    var _value = 0; // privado (o underline aí é apenas convenção, que seria variáveis privadas)
    var _add = function () { // privado
        return ++_value;
    };
    var _reset = function () { // privado
        _value = 0;
    };
    return { // aqui, será PUBLICO!
        add: _add,
        reset: _reset
    };
})();

console.log(counter.value);
console.log(counter.add());
console.log(counter.add());
console.log(counter.add());
counter.reset();
console.log(counter.add());