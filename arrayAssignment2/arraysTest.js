/*.............Setting referense for assert object as assert..............*/
const assert = require ('assert');

/*.....................Test to partition even numbers...................*/
const partitionNumbers = require ('./arraysLib.js').partitionNumbers;

assert.deepEqual(partitionNumbers([]).even,[]);        // empty array
assert.deepEqual(partitionNumbers([2]).even,[2]);      // only one even
assert.deepEqual(partitionNumbers([1]).even,[]);       // only one odd
assert.deepEqual(partitionNumbers([4,2]).even,[4,2]);  // two evens
assert.deepEqual(partitionNumbers([3,2]).even,[2]);    // odd and even
assert.deepEqual(partitionNumbers([2,3]).even,[2]);    // even and odd
assert.deepEqual(partitionNumbers([1,7]).even,[]);     // odd and odd
assert.deepEqual(partitionNumbers([-2]).even,[-2]);     // negative even
assert.deepEqual(partitionNumbers([-1]).even,[]);     // negative odd
assert.deepEqual(partitionNumbers([-4,-2]).even,[-4,-2]);  // two negative evens
assert.deepEqual(partitionNumbers([-1,2]).even,[2]);     // negative odd and positive even
assert.deepEqual(partitionNumbers([1,-2]).even,[-2]);     // positive odd and negative even
assert.deepEqual(partitionNumbers([-2,3]).even,[-2]);     // negative even and positive odd
assert.deepEqual(partitionNumbers([-2,1]).even,[-2]);     // positive even and negative odd


/*................Test to partition odd numbers.............................*/

assert.deepEqual(partitionNumbers([]).odd,[]);
assert.deepEqual(partitionNumbers([0]).odd,[]);
assert.deepEqual(partitionNumbers([1]).odd,[1]);
assert.deepEqual(partitionNumbers([2]).odd,[]);
assert.deepEqual(partitionNumbers([1,3]).odd,[1,3]);
assert.deepEqual(partitionNumbers([1,2]).odd,[1]);
assert.deepEqual(partitionNumbers([2,8]).odd,[]);

/*.................Test to find the sum of elements in an array..................*/
const sum = require ('./arraysLib.js').sum;

assert.deepEqual(sum([]),0);
assert.deepEqual(sum([1]),1);
assert.deepEqual(sum([1,0]),1);
assert.deepEqual(sum([1,2]),3);
assert.deepEqual(sum([1,-2]),-1);

/*.........................Test to reverse of an array.........................*/
const reverse = require ('./arraysLib.js').reverse;

assert.deepEqual(reverse([1,2]),[2,1]);
assert.deepEqual(reverse([0,2]),[2,0]);
