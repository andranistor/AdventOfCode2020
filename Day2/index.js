'use strict';

let psw = [];
let min = [];
let max = [];
let letter = [];

for (let i = 0; i < data.length; i++) {
  psw.push(data[i].substring(data[i].indexOf(':') + 2, data[i].length));
  min.push(data[i].substring(0, data[i].indexOf('-')));
  max.push(data[i].substring(data[i].indexOf('-') + 1, data[i].indexOf(':') - 2));
  letter.push(data[i].substring(data[i].indexOf(':') - 1, data[i].indexOf(':')))
}

let totalValid1 = 0;
let totalValid2 = 0;

for (let i = 0; i < psw.length; i++) {
  if ((psw[i].split(letter[i]).length - 1) >= min[i] && (psw[i].split(letter[i]).length - 1) <= max[i]) {
    totalValid1++
  }
}

for (let i = 0; i < psw.length; i++) {
  if ((psw[i][min[i]-1] === letter[i] && psw[i][max[i]-1] !== letter[i] || psw[i][min[i]-1] !== letter[i] && psw[i][max[i]-1] === letter[i])) {
    totalValid2++
  }
}

console.log(`Valid in task 1: ${totalValid1}. Valid in task 2: ${totalValid2}`);