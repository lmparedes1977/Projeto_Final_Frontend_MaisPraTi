const varA = document.getElementById('num_a');
const varB = document.getElementById('num_b');
let som = document.getElementById('soma');
let subA = document.getElementById('subtAB');
let subB = document.getElementById('subtBA');
let mul = document.getElementById('mult');
let divA = document.getElementById('divAB');
let divB = document.getElementById('divBA');
let potA = document.getElementById('potAB');
let potB = document.getElementById('potBA');
let raiA = document.getElementById('raizA');
let raiB = document.getElementById('raizB');
let fatA = document.getElementById('fatA');
let fatB = document.getElementById('fatB');
let porA = document.getElementById('porcAB');
let porB = document.getElementById('porcBA');
let med = document.getElementById('media');

function calculaTudo(x, y) {
  x = Number(varA.value);
  y = Number(varB.value);

  som.innerHTML = soma(x, y);
  subA.innerHTML = subtr(x, y);
  subB.innerHTML = subtr(y, x);
  mul.innerHTML = multi(y, x);
  divA.innerHTML = divisao(x, y).toFixed(2);
  divB.innerHTML = divisao(y, x).toFixed(2);
  potA.innerHTML = potencia(x, y);
  potB.innerHTML = potencia(y, x);
  raiA.innerHTML = raizQ(x).toFixed(2);
  raiB.innerHTML = raizQ(y).toFixed(2);
  fatA.innerHTML = fatorial(x);
  fatB.innerHTML = fatorial(y);
  porA.innerHTML = porcent(y, x);
  porB.innerHTML = porcent(x, y);
  med.innerHTML = media(y, x).toFixed(2);
}

function soma(x, y) {
  return x + y;
}

function subtr(x, y) {
  return x - y;
}

function multi(x, y) {
  return x * y;
}

function divisao(x, y) {
  return x / y;
}

function potencia(x, y) {
  return x ** y;
}

function raizQ(n) {
  return Math.sqrt(n);
}

function fatorial(n) {
  let fator = 1;
  if (n >= 1) {
    fator = n * fatorial(n - 1);
  }
  return fator;
}

function porcent(x, y) {
  return `${((x / y) * 100).toFixed(0)}%`;
}
function media(x, y) {
  return (x + y) / 2;
}
