// somar(3)(4)(5)

function somar(a){
  return function(b){
    return function(c){
      return a + b + c;
    }
  }
}

console.log(somar(3)(4)(5));

// fn -> 3 * 7
// fn -> 3 + 7
// fn -> 3 - 7
// calcular(3)(7)(fn)

function calcular(a) {
  console.log("a", a);
  return function(b){
    console.log("b", b);
  }
}

const somar = (a, b) => a + b;
const multiplicar = (a, b) => a * b;
const subtrair = (a, b) => a - b;
const dividir = (a, b) => a / b;

calcular(1)(1)(somar);