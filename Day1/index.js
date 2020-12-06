'use strict';

let sum = 0;

// Task 1
for (let i = 0; i < numbers.length; i++) {
  for (let j = i + 1; j < numbers.length - 1; j++) {
    // Task 2
    for (let k = j + 1; k < numbers.length - 2; k++) {
      sum = numbers[i] + numbers[j] + numbers[k];
      
      if (sum === 2020) {
        console.log(numbers[i] * numbers[j] * numbers[k]);
        break;
      }
    }
  }
}