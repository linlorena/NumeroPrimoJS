function isPrime(numero) {
  if (numero <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

let resposta = prompt('Digite um número inteiro positivo:');
let numero = parseInt(resposta);
if (isPrime(numero)) {
  alert(numero + " é primo.");
} else {
  alert(numero + " não é primo.");
}