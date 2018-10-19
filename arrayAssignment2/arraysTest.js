/*.............Setting referense for assert object as assert..............*/
const assert = require ('assert');
const library = require ('./arraysLib.js');

/*.....................Test to partition even and odd numbers...................*/
const partitionNumbers = library.partitionNumbers;

assert.deepEqual(partitionNumbers([]),{ even : [], odd : [] });
assert.deepEqual(partitionNumbers([2]),{ even : [2], odd : [] });
assert.deepEqual(partitionNumbers([1]),{ even : [], odd : [1]});
assert.deepEqual(partitionNumbers([4,2]),{ even : [4,2], odd : [] });
assert.deepEqual(partitionNumbers([3,2]),{ even : [2], odd : [3] });
assert.deepEqual(partitionNumbers([2,3]),{ even : [2], odd : [3] });
assert.deepEqual(partitionNumbers([1,7]),{ even : [], odd : [1,7] });
assert.deepEqual(partitionNumbers([-2]),{ even : [-2], odd : [] });
assert.deepEqual(partitionNumbers([-1]),{ even: [], odd: [ -1 ] });
assert.deepEqual(partitionNumbers([-4,-2]),{ even: [-4,-2], odd: [] });
assert.deepEqual(partitionNumbers([-1,2]),{ even: [2], odd: [-1] });
assert.deepEqual(partitionNumbers([1,-2]),{ even: [-2], odd: [1] });
assert.deepEqual(partitionNumbers([-2,3]),{ even: [-2], odd: [3] });

/*.................Test to find the sum of elements in an array..................*/
const sum = library.sum;

assert.deepEqual(sum([]),0);
assert.deepEqual(sum([1]),1);
assert.deepEqual(sum([1,0]),1);
assert.deepEqual(sum([1,2]),3);
assert.deepEqual(sum([1,-2]),-1);
assert.deepEqual(sum([-1,2]),1);

/*.........................Test to reverse numbers.........................*/
const reverse = library.reverse;

assert.deepEqual(reverse([]),[]);
assert.deepEqual(reverse([1]),[1]);
assert.deepEqual(reverse([1,2]),[2,1]);
assert.deepEqual(reverse([2,1]),[1,2]);

/*......................Select every second element from numbers..................*/
const secondElement = library.secondElement;

assert.deepEqual(secondElement([]),[]);
assert.deepEqual(secondElement([0]),[0]);
assert.deepEqual(secondElement([1,2]),[1]);
assert.deepEqual(secondElement([1,2,3]),[1,3]);

/*......................Reverse Fibonacci..........................*/
const fibonacciReverse = library.fibonacciReverse;

assert.deepEqual(fibonacciReverse(1),[0]);
assert.deepEqual(fibonacciReverse(2),[1,0]);
assert.deepEqual(fibonacciReverse(3),[1,1,0]);
assert.deepEqual(fibonacciReverse(4),[2,1,1,0]);

/*................largest and lowest number............................*/
const largestAndLowest = library.largestAndLowest;

assert.deepEqual(largestAndLowest([]),{ large: undefined , low: undefined });
assert.deepEqual(largestAndLowest([0]),{ large: 0 , low: 0 });
assert.deepEqual(largestAndLowest([1,2]),{ large: 2 , low: 1 });
assert.deepEqual(largestAndLowest([1,2,3]),{ large: 3 , low: 1 });

/*..................average of numbers......................*/
const average = library.average;

assert.deepEqual(average([0]),0);
assert.deepEqual(average([1,2]),1.5);
assert.deepEqual(average([2,4]),3);

/*....................mapping word length............*/
const mapLength = library.mapLength;

assert.deepEqual(mapLength(""),0);
assert.deepEqual(mapLength("a"),1);
assert.deepEqual(mapLength("ab"),2);
assert.deepEqual(mapLength("a b"),3);

/*..............Even Odd Count.....................*/
const oddEvenCount = library.oddEvenCount;
const oddEvenInputs = [[],[0],[1],[1,2],[1,1],[2,4]];
const oddCounts = [0,0,1,1,2,0];
const evenCounts = [0,1,0,1,0,2];

for(let index in oddEvenInputs){
  assert.deepEqual(oddEvenCount(oddEvenInputs[index]).odd,oddCounts[index]);
  assert.deepEqual(oddEvenCount(oddEvenInputs[index]).even,evenCounts[index]);
}

/*.................count numbers above and below a threshold...............*/
const countUpDownThreshold = library.countUpDownThreshold;
const numbersToCount = [[0],[1,2],[1,2,3]];
const threshold = [0,1,2];
const aboveCount = [0,1,1];
const belowCount = [0,0,1];

for(let index in numbersToCount){
  assert.deepEqual(countUpDownThreshold(numbersToCount[index],threshold[index]).above,aboveCount[index]);
  assert.deepEqual(countUpDownThreshold(numbersToCount[index],threshold[index]).below,belowCount[index]);
}

/*................reverse an array.....................*/
//const reverseArray = library.reverseArray;
//for(let index in numbersToReverse){
//  assert.deepEqual(reverse(numbersToReverse[index]),reverseNumbers[index]);
//}

/*...........index of a number in an array.............*/
//const indexOfArray = library.indexOfArray;
//const inputArray = [[0],[1,2]];
//const indexArray = [0,1];
