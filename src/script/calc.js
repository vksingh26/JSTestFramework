//implemeting test case using mocha
let add = function(a, b){
    if(!a || !b){
        throw new Error("expected values are undefined for add  method !")
    }
    return a + b;
}

let substract = function(a, b){
    if(!a || !b){
        throw new Error("expected values are undefined for substract method !")
    }
    return a - b;
}

module.exports = {add, substract}
