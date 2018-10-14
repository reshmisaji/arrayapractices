/*....................isEven.......................*/
const isEven = function(number){
  return Math.abs(number % 2);
}

/*.............Even Odd filter........................*/
const partitionNumbers = function(numbers){
  let partition = [[],[]];

  for(let number of numbers){
    partition[isEven(number)].push(number);
  }
  return {even : partition[0], odd : partition[1]};
}

exports.partitionNumbers = partitionNumbers;

/*..........Sum of elements of the Array................*/
const sum = function(numbers){
  let sumNumbers = 0;

  for(let number of numbers){
    sumNumbers = sumNumbers + number;
  }
  return sumNumbers;
}

exports.sum = sum;

/*................Reverse numbers......................*/
const reverse = function(numbers){
  let reverse = [];

  for(let  index = numbers.length - 1; index >=0; index --){
    reverse.push(numbers[index]);
  }
  return reverse;
}

exports.reverse = reverse;

/*...............Second Elements..............*/
const secondElement = function(numbers){
  let secondElements = [];

  for(let index = 0; index < numbers.length; index += 2){
    secondElements.push(numbers[index]);
  }
  return secondElements;
}

exports.secondElement = secondElement;

/*....................Fibonacci reverse...............*/
const fibUpToTwo = function(limit){
  let fibonacci = [];
  let valueToPush = 0;

  for(let index = 0; index <= limit -1; index ++){
    fibonacci.push(valueToPush);
    valueToPush ++;
  }
  return fibonacci;
}

const fibonacciGenerator = function(limit){
  let fibonacci =[];
  fibonacci = fibUpToTwo(2);

  for(let index = 2 ; index < limit; index ++){
    fibonacci[index] = fibonacci[index-2] +fibonacci[index-1];
  }
  return fibonacci;
}

const fibonacciReverse = function(limit){
  let fibonacci = [];

  switch(limit){
    case 0 : return fibonacci;

    case 1 : return fibUpToTwo(limit).reverse();

    default : return fibonacciGenerator(limit).reverse();
  };
}

exports.fibonacciReverse = fibonacciReverse;
