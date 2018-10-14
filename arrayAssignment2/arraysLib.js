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
