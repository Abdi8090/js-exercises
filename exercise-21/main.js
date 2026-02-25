const numbers = [1, 2, 3, 4, 5];


const total = numbers.reduce((accumulator, currentValue) => {
  return accumulator * currentValue;
}, 1);

console.log(total); 
