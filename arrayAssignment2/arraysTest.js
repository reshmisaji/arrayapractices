/*.............Setting referense for assert object as assert..............*/
const assert = require ('assert');

/*.....................Test to partition even numbers...................*/
const partitionNumbers = require ('./arraysLib.js').partitionNumbers;

assert.deepEqual(partitionNumbers([]).even,[]);             // empty array
assert.deepEqual(partitionNumbers([2]).even,[2]);           // only one even
assert.deepEqual(partitionNumbers([1]).even,[]);            // only one odd
assert.deepEqual(partitionNumbers([4,2]).even,[4,2]);       // two evens
assert.deepEqual(partitionNumbers([3,2]).even,[2]);         // odd and even
assert.deepEqual(partitionNumbers([2,3]).even,[2]);         // even and odd
assert.deepEqual(partitionNumbers([1,7]).even,[]);          // odd and odd
assert.deepEqual(partitionNumbers([-2]).even,[-2]);         // negative even
assert.deepEqual(partitionNumbers([-1]).even,[]);           // negative odd
assert.deepEqual(partitionNumbers([-4,-2]).even,[-4,-2]);   // two negative evens
assert.deepEqual(partitionNumbers([-1,2]).even,[2]);        // negative odd and positive even
assert.deepEqual(partitionNumbers([1,-2]).even,[-2]);       // positive odd and negative even
assert.deepEqual(partitionNumbers([-2,3]).even,[-2]);       // negative even and positive odd
assert.deepEqual(partitionNumbers([-2,1]).even,[-2]);       // positive even and negative odd


/*................Test to partition odd numbers.............................*/

assert.deepEqual(partitionNumbers([]).odd,[]);              //empty array
assert.deepEqual(partitionNumbers([0]).odd,[]);             //only one even
assert.deepEqual(partitionNumbers([1]).odd,[1]);            //only one odd
assert.deepEqual(partitionNumbers([1,3]).odd,[1,3]);        //odd and odd
assert.deepEqual(partitionNumbers([1,2]).odd,[1]);          //odd and even
assert.deepEqual(partitionNumbers([2,1]).odd,[1]);          //even and odd
assert.deepEqual(partitionNumbers([2,8]).odd,[]);           //even and even
assert.deepEqual(partitionNumbers([-2]).odd,[]);            //negative even
assert.deepEqual(partitionNumbers([-1]).odd,[-1]);          //negative odd
assert.deepEqual(partitionNumbers([-4,-2]).odd,[]);         // two negative evens
assert.deepEqual(partitionNumbers([-1,2]).odd,[-1]);        // negative odd and positive even
assert.deepEqual(partitionNumbers([1,-2]).odd,[1]);         // positive odd and negative even
assert.deepEqual(partitionNumbers([-2,3]).odd,[3]);         // negative even and positive odd
assert.deepEqual(partitionNumbers([-2,1]).odd,[1]);         // positive even and negative odd

/*.................Test to find the sum of elements in an array..................*/
const sum = require ('./arraysLib.js').sum;

assert.deepEqual(sum([]),0);                                // empty array
assert.deepEqual(sum([1]),1);                               // only one number
assert.deepEqual(sum([1,0]),1);                             // two numbers
assert.deepEqual(sum([1,2]),3);
assert.deepEqual(sum([1,-2]),-1);

/*.........................Test to reverse of an array.........................*/
const reverse = require ('./arraysLib.js').reverse;

assert.deepEqual(reverse([1,2]),[2,1]);
assert.deepEqual(reverse([0,2]),[2,0]);
