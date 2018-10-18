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

/*.............Largesst and lowest number................*/
const large = function(number,largest){
  if(number > largest){
    return number;
  } else{
    return largest;
  }
}

const low = function(number,lowest){
  if(number < lowest){
    return number;
  }else{
    return lowest;
  }
}

const largestAndLowest = function(numbers){
  let largest = numbers[0];
  let lowest = numbers[0];

  for(let number of numbers){
    largest = large(number,largest);
    lowest = low(number,lowest);
  }
  return {large : largest , low : lowest};
}

exports.largestAndLowest = largestAndLowest;

/*...................average of numbers............*/
const average = function(numbers){
  return sum(numbers)/numbers.length;
}

exports.average = average;

/*.............Mapping length...............*/
const mapLength = function(word){
  return word.length;
}

exports.mapLength = mapLength;

/*............odd even count.................*/
const oddEvenCount = function(numbers){
  let evenCount = 0;
  let oddCount = 0;

  for(let index in numbers){
   oddCount += isEven(numbers[index]);
  }
  evenCount = (numbers.length - oddCount);
  return {odd : oddCount, even : evenCount};
}

exports.oddEvenCount = oddEvenCount;

/*.....................above below threshold count.................*/
const isAbove = function(number,threshold){
  return number>threshold;
}

const isBelow = function(number,threshold){
  return number<threshold;
}

const countUpDownThreshold = function(numbers,threshold){
  let aboveCount = 0;
  let belowCount = 0;

  for(let index in numbers){
    aboveCount += isAbove(numbers[index],threshold);
    belowCount += isBelow(numbers[index],threshold);
  }
  return {above : aboveCount, below : belowCount}
}

exports.countUpDownThreshold = countUpDownThreshold;

/*...............reverse Array...................*/
const reverseArray = function(numbers){
  let reversedArray = reverse(numbers);
  return reversedArray;
}

exports.reverseArray = reverseArray;
