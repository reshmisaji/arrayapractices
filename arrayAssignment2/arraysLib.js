/*..................add............................*/
const add = function(numbersSum,number){
  return numbersSum + number;
}

exports.add = add;

/*....................isEven.......................*/
const isEven = function(number){
  return Math.abs(number % 2);
}

exports.isEven = isEven;

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
    sumNumbers = add(sumNumbers,number);
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
  if( number>threshold){
    return 1;
  }else{
    return 0;
  }
}

const isBelow = function(number,threshold){
  if(number<threshold){
    return 1;
  }else{
    return 0;
  }
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

/*..............ascending and descending order...........*/
const isLarge = function(number,nextNumber){
  return (number < nextNumber);
}

const isSmall = function(number,nextNumber){
  return (number > nextNumber);
}

const ascendDescendArray  = function(numbers){
  let ascend = 1;
  let descend = 1;

  for(let index = 0; index < numbers.length-1; index ++){
    ascend += isLarge(numbers[index],numbers[index+1]);
    descend += isSmall(numbers[index],numbers[index+1]);
  }
  return { ascending : (ascend == numbers.length), descending : (descend == numbers.length) };
}

exports.ascendDescendArray = ascendDescendArray;

/*................extract digits of a number............*/
const ifNumberZero = function(digits,number){
  if(number == 0){
    digits.push(0);
  }
  return digits;
}

const extractDigits = function(number){
  let digits = [];
  let numberToExtract = number;

  while(numberToExtract > 0){
    digits.push(numberToExtract % 10);
    numberToExtract = Math.floor(numberToExtract / 10);
  };
  return (ifNumberZero(digits,number)).reverse();
}

exports.extractDigits = extractDigits;

/*.............zip.................*/
const zipArray = function(firstArray,secondArray){
  let zipNumbers = [];
  let arrayLength = Math.min(firstArray.length,secondArray.length);

  for(let index = 0; index < arrayLength; index ++){
    zipNumbers.push([firstArray[index],secondArray[index]])
  }
  return zipNumbers;
}

exports.zipArray = zipArray;

/*...........partition............*/
const partition = function(numbers,partitionFrequency){
  let partition = [[],[]];
  
  for(let index in numbers){
    partition[isAbove(numbers[index],partitionFrequency)].push(numbers[index]);
  }
  return partition;
}

exports.partition = partition;

/*.............rotate array................*/
const rotateArray = function(numbers,rotateValue){
  let rotatedArray = [];
  for(let index = rotateValue; index < numbers.length; index ++){
    rotatedArray.push(numbers[index]);
  }
  for(let index = 0; index < rotateValue; index ++){
    rotatedArray.push(numbers[index]);
  }
  return rotatedArray;
}

exports.rotateArray = rotateArray;

/*..................  Index of an element of array.........*/
const getIndexOfArray = function(numbers,number){
  let indexOfNumber = -1;

  for(let index = 0; index < numbers.length; index ++){
    if(numbers[index] == number){
      return index;
    }
  }
  return indexOfNumber;
}

exports.getIndexOfArray = getIndexOfArray;

/*...................unique array..................*/
const uniqueArray = function(numbers){
  let uniqueNumbers = [];
  uniqueNumbers.push(numbers[0]);

  for(let index = 1; index < numbers.length; index ++){
    if(!(uniqueNumbers.includes(numbers[index]))){
      uniqueNumbers.push(numbers[index]);
    }
  }
  return uniqueNumbers;
}

exports.uniqueArray = uniqueArray;

/*................union array..................*/
const unionArray = function(firstSet,secondSet){
  let commonSet = firstSet.concat(secondSet);

  return uniqueArray(commonSet);
}

exports.unionArray = unionArray;

/*..............intersection arary...................*/
const intersectDifferenceArrays = function(firstSet,secondSet){
  let partitionSet = [[],[]];
  firstSet = uniqueArray(firstSet);
  secondSet = uniqueArray(secondSet);
  
  for(let index in firstSet){
    if(secondSet.includes(firstSet[index])){
      partitionSet[0].push(firstSet[index]);
    }else{
      partitionSet[1].push(firstSet[index]);
    }
  }
  return { intersect : partitionSet[0], difference : partitionSet[1] };
}

exports.intersectDifferenceArrays = intersectDifferenceArrays;

/*........................is sub set array.....................*/
const isSubset = function(mainSet,subSet){
  let elementCount = 0;
  
  for(let element of subSet){
    elementCount += (mainSet.includes(element));
  }
 return (elementCount == subSet.length); 
}

exports.isSubset = isSubset;
