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

console.log("........All tests passed for partitioning even and odd numbers........");

/*.................Test to find the sum of elements in an array..................*/
const sum = library.sum;

assert.deepEqual(sum([]),0);
assert.deepEqual(sum([1]),1);
assert.deepEqual(sum([1,0]),1);
assert.deepEqual(sum([1,2]),3);
assert.deepEqual(sum([1,-2]),-1);
assert.deepEqual(sum([-1,2]),1);

console.log("..........All tests passed for finding the sum of an array............");

/*.........................Test to reverse numbers.........................*/
const reverse = library.reverse;

assert.deepEqual(reverse([]),[]);
assert.deepEqual(reverse([1]),[1]);
assert.deepEqual(reverse([1,2]),[2,1]);
assert.deepEqual(reverse([2,1]),[1,2]);

console.log(".........All tests passed for reversing an array......................");

/*......................Select every second element from numbers..................*/
const secondElement = library.secondElement;

assert.deepEqual(secondElement([]),[]);
assert.deepEqual(secondElement([0]),[0]);
assert.deepEqual(secondElement([1,2]),[1]);
assert.deepEqual(secondElement([1,2,3]),[1,3]);

console.log("...........All tests passed for selecting every second element of an array..........");

/*......................Reverse Fibonacci..........................*/
const fibonacciReverse = library.fibonacciReverse;

assert.deepEqual(fibonacciReverse(1),[0]);
assert.deepEqual(fibonacciReverse(2),[1,0]);
assert.deepEqual(fibonacciReverse(3),[1,1,0]);
assert.deepEqual(fibonacciReverse(4),[2,1,1,0]);

console.log("............All tests passed for geting the fibonacci series upto a limit in the reverse order......");

/*................largest and lowest number............................*/
const largestAndLowest = library.largestAndLowest;

assert.deepEqual(largestAndLowest([]),{ large: undefined , low: undefined });
assert.deepEqual(largestAndLowest([0]),{ large: 0 , low: 0 });
assert.deepEqual(largestAndLowest([1,2]),{ large: 2 , low: 1 });
assert.deepEqual(largestAndLowest([1,2,3]),{ large: 3 , low: 1 });

console.log(".............All tests passed for finding the largest and lowest of an array........");

/*..................average of numbers......................*/
const average = library.average;

assert.deepEqual(average([0]),0);
assert.deepEqual(average([1,2]),1.5);
assert.deepEqual(average([2,4]),3);

console.log(".............All tests passed for finding the average of an aray.................");

/*....................mapping word length............*/
const mapLength = library.mapLength;

assert.deepEqual(mapLength(""),0);
assert.deepEqual(mapLength("a"),1);
assert.deepEqual(mapLength("ab"),2);
assert.deepEqual(mapLength("a b"),3);

console.log("............All tests passed for mapping the word length of an array of string.......");

/*..............Even Odd Count.....................*/
const oddEvenCount = library.oddEvenCount;

assert.deepEqual(oddEvenCount([]),{ even : 0, odd : 0 });
assert.deepEqual(oddEvenCount([0]),{ even : 1, odd : 0 });
assert.deepEqual(oddEvenCount([1]),{ even : 0, odd : 1 });
assert.deepEqual(oddEvenCount([1,2]),{ even : 1, odd : 1 });
assert.deepEqual(oddEvenCount([1,1]),{ even : 0, odd : 2 });
assert.deepEqual(oddEvenCount([2,4]),{ even : 2, odd : 0 });

console.log(".........All tests passed for counting the even and odd numbers in an array..........");

/*.................count numbers above and below a threshold...............*/
const countUpDownThreshold = library.countUpDownThreshold;
const numbersToCount = [[0],[1,2],[1,2,3]];

assert.deepEqual(countUpDownThreshold([0],0),{ above : 0, below : 0 });
assert.deepEqual(countUpDownThreshold([1,2],1),{ above : 1, below : 0 });
assert.deepEqual(countUpDownThreshold([1,2,3],2),{ above : 1, below : 1 });

console.log(".........All tests passed for counting numbers above and below threshold frequency..........");

/*................reverse an array.....................*/
const reverseArray = library.reverseArray;

assert.deepEqual(reverse([]),[]);
assert.deepEqual(reverse([1]),[1]);
assert.deepEqual(reverse([1,2]),[2,1]);
assert.deepEqual(reverse([1,2,3]),[3,2,1]);

console.log(".............All tests passed for reversing an array....................");

/*............Ascending and descsending order.......*/
const ascendDescendArray = library.ascendDescendArray;
 
assert.deepEqual(ascendDescendArray([1,2]),{ ascending : true, descending : false });
assert.deepEqual(ascendDescendArray([3,2]),{ ascending : false, descending : true });

console.log("..........All tests passed for  checking the array is in ascending or descending order.........");

/*....................extract digits...............*/
const extractDigits = library.extractDigits;

assert.deepEqual(extractDigits(0),[0]);
assert.deepEqual(extractDigits(120),[1,2,0]);
assert.deepEqual(extractDigits(12),[1,2]);

console.log("..........All the tests passed for extracting the digits of an number........");

/*.................zip..........................*/
const zipArray = library.zipArray;

assert.deepEqual(zipArray([0],[0]),[[0,0]]);
assert.deepEqual(zipArray([1,0],[0,1]),[[1,0],[0,1]]);
assert.deepEqual(zipArray([1,0,3],[0,2,7]),[[1,0],[0,2],[3,7]]);     
assert.deepEqual(zipArray([2,1,0,3],[0,2,7]),[[2,0],[1,2],[0,7]]);     

console.log("..........All tests passed for zipping two arrays in to one.............");

/*.................partition...............*/
const partition = library.partition;

assert.deepEqual(partition([1,2,3,4,2,0],2),[[1,2,2,0],[3,4]]);

console.log("...........All tests passed for the partition of an array..................");

/*.................rotate array....................*/
const rotateArray = library.rotateArray;

assert.deepEqual(rotateArray([0],1),[0]);
assert.deepEqual(rotateArray([1,0],1),[0,1]);
assert.deepEqual(rotateArray([1,0,3,4],2),[3,4,1,0]);

console.log(".....................All tests passed for rotating an array............................");

/*...............Index of an element in an array...........................*/
const getIndexOfArray = library.getIndexOfArray;

assert.deepEqual(getIndexOfArray([1,2,1,3,4,5,6],3),3);
assert.deepEqual(getIndexOfArray([1,2,1,3,4,5,6],6),6);
assert.deepEqual(getIndexOfArray([1,2,1,3,4,5,6],7),-1);

console.log("................All tests passed for finding the index of an element of the array............");

/*..........................Unique array .................................*/
const uniqueArray = library.uniqueArray;

assert.deepEqual(uniqueArray([1,1]),[1]);
assert.deepEqual(uniqueArray([1,2,3,1,2]),[1,2,3]);

console.log("............All tests passed for finding unique numbers from an array....................");

/*...............................union of arrays...............................*/
const unionArray = library.unionArray;

assert.deepEqual(unionArray([1],[2]),[1,2]);
assert.deepEqual(unionArray([1,2],[2]),[1,2]);
assert.deepEqual(unionArray([1,2,3],[2,3,4]),[1,2,3,4]);

console.log("............All tests passed for finding the union array.......................");
