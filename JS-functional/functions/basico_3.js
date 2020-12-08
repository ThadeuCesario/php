// Arrow function
const felizNatal = () => console.log('Feliz Natal');
felizNatal();

const saudacao = (nome) => `Fala ${nome}!!`;
console.log(saudacao('Thadeu')); 

/**
 * Abaixo será realizado o REST, em que todos os parâmetros são pegos e armazenados em um array.
 */
const somar = (...numeros) => {
  let tota = 0;
  for (let i of numeros) {
    tota += i;
  }
  return tota;
}
console.log(somar(1,2,3,5));
console.log(somar(1,2,3,5,6,8,9,10));
console.log(somar(1,2,3,5,8,8,8,8,8,8,9));