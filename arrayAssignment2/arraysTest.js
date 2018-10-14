/*.............Setting referense for assert object as assert..............*/
const assert = require ('assert');
const library = require ('./arraysLib.js');

/*.....................Test to partition even numbers...................*/
const partitionNumbers = library.partitionNumbers;
const inputsEven = [[],[2],[1],[4,2],[3,2],[2,3],[1,7],[-2],[-1],[-4,-2],[-1,2],[1,-2],[-2,3],[-2,1]];
const requiredOutputsEven = [[],[2],[],[4,2],[2],[2],[],[-2],[],[-4,-2],[2],[-2],[-2],[-2]];

for(let index in inputsEven){
  assert.deepEqual(partitionNumbers(inputsEven[index]).even,requiredOutputsEven[index]);
}

/*................Test to partition odd numbers.............................*/
const inputsOdd = [[],[0],[1],[1,3],[1,2],[2,1],[2,8],[-2],[-1],[-4,-2],[-1,2],[1,-2],[-2,3],[-2,1]];
const requiredOutputsOdd = [[],[],[1],[1,3],[1],[1],[],[],[-1],[],[-1],[1],[3],[1]];

for(let index in inputsOdd){
  assert.deepEqual(partitionNumbers(inputsOdd[index]).odd,requiredOutputsOdd[index]);
}

/*.................Test to find the sum of elements in an array..................*/
const sum = library.sum;
const inputNumbers = [[],[1],[1,0],[1,2],[1,-2],[-1,2]];
const requiredSum = [0,1,1,3,-1,1];

for(let index in inputNumbers){
  assert.deepEqual(sum(inputNumbers[index]),requiredSum[index]);
}

/*.........................Test to reverse of an array.........................*/
const reverse = library.reverse;
const numbersToReverse = [[1,2],[0,2]];
const reverseNumbers = [[2,1],[2,0]];

for(let index in numbersToReverse){
  assert.deepEqual(reverse(numbersToReverse[index]),reverseNumbers[index]);
}

/*......................Select every second element from numbers..................*/
const secondElement = library.secondElement;
const numbersToFilter = [[],[0],[1,2],[1,2,3]];
const secondElements = [[],[0],[1],[1,3]];

for(let index in numbersToFilter){
  assert.deepEqual(secondElement(numbersToFilter[index]),secondElements[index]);
}

/*......................Reverse Fibonacci..........................*/
const fibonacciReverse = library.fibonacciReverse;
const fibonacciLimit = [1,2,3,4];
const fibonacciReversed = [[0],[1,0],[1,1,0],[2,1,1,0]];

for(let index in fibonacciLimit){
  assert.deepEqual(fibonacciReverse(fibonacciLimit[index]),fibonacciReversed[index]);
}

/*................largest and lowest number............................*/
const largestAndLowest = library.largestAndLowest;
const lowestNumber = library.lowestNumber;
const inputs = [[],[0],[1,2],[1,3,2],[3,1,2],[1,2,3]];
const largestAndLowests = [,0,2,3,3,3];
const lowestNumbers = [,0,1,1,1,1];

for(let index in inputs){
  assert.deepEqual(largestAndLowest(inputs[index]).large,largestAndLowests[index]);
  assert.deepEqual(largestAndLowest(inputs[index]).low,lowestNumbers[index]);
}

/*..................average of numbers......................*/
const average = library.average;
const numbersForAvg = [[0],[1,2],[2,4],[2,4,5]];
const averages = [0,1.5,3,3.6666666666666665];

for(let index in numbersForAvg){
  assert.deepEqual(average(numbersForAvg[index]),averages[index]);
}

