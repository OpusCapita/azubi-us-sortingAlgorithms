const selectionsort = require('./sortingAlgorithms').selectionsort;
const gnomesort = require('./sortingAlgorithms').gnomesort;
const bubblesort = require('./sortingAlgorithms').bubblesort;


function createRandomArray(lengthOfArray, maxNumber) {
  const maximumNumber = maxNumber;
  const arrayToCreate = [];
  for (let i = 0; i < lengthOfArray; i++) {
    arrayToCreate[i] = Math.floor(Math.random() * Math.floor(maximumNumber));
  }
  return arrayToCreate;
}

function createSortedArray(lengthOfArray) {
  const arrayToCreate = [];
  for (let i = 0; i < lengthOfArray; i++) {
    arrayToCreate[i] = i;
  }
  return arrayToCreate;
}

function createReversedArray(lengthOfArray) {
  const arrayToCreate = [];
  let index = 0;
  for (let i = lengthOfArray; i > 0; i--) {
    arrayToCreate[index] = i;
    index++;
  }
  return arrayToCreate;
}

function returnSortedArray(lengthOfArray, maxNumber) {
  const randomArray = createRandomArray(lengthOfArray, maxNumber);
  const sortedArray = randomArray.sort((a, b) => a - b);

  return sortedArray;
}

function returnReversedArray(lengthOfArray, maxNumber) {
  const randomArray = createRandomArray(lengthOfArray, maxNumber);
  const reversedArray = randomArray.sort((a, b) => {
    if (b > a) {
      return 1;
    } if (b < a) {
      return -1;
    }
    return 0;
  });
  return reversedArray;
}

function writeResultsinFile(message) {
  const data = message;
  const txtFile = 'C:\\repositories\\azubi-us-sortingAlgorithms\\performanceTest.txt';
  const fs = require('fs');
  fs.appendFile(txtFile, `${data}\n`, (err) => {
    if (err) {
      return console.log(err);
    }
  });
}

function performanceTest(fn, array, timesToRun) {
  let counter = timesToRun;
  const functionName = fn;
  let testResult = 0;

  while (counter !== 0) {
    let sum = 0;
    const start = new Date().getTime();
    fn(array);
    const end = new Date().getTime();
    const elapsedTime = end - start;
    sum += elapsedTime;

    const result = sum / 10;
    testResult += result;
    counter--;
  }
  const dataToFile = testResult;
  writeResultsinFile(dataToFile);
  return [functionName, testResult];
}

const randomArraySmall = createRandomArray(1000, 1000);
const randomArrayMedium = createRandomArray(10000, 1000);
const randomArrayLarge = createRandomArray(100000, 1000);

const sortedArraySmall = createSortedArray(1000);
const sortedArrayMedium = createSortedArray(10000);
const sortedArrayLarge = createSortedArray(100000);

const reversedArraySmall = createReversedArray(1000);
const reversedArrayMedium = createReversedArray(10000);
const reversedArrayLarge = createReversedArray(100000);

console.log('\n' + 'Array with 1.000 Elements');
console.log('Random Array:');
console.log(performanceTest(bubblesort, randomArraySmall, 10));
console.log(performanceTest(selectionsort, randomArraySmall, 10));
console.log(performanceTest(gnomesort, randomArraySmall, 10));

console.log('Sorted Array:');
console.log(performanceTest(bubblesort, sortedArraySmall, 10));
console.log(performanceTest(selectionsort, sortedArraySmall, 10));
console.log(performanceTest(gnomesort, sortedArraySmall, 10));

console.log('Reversed Array:');
console.log(performanceTest(bubblesort, reversedArraySmall, 10));
console.log(performanceTest(selectionsort, reversedArraySmall, 10));
console.log(performanceTest(gnomesort, reversedArraySmall, 10));

console.log('\n' + 'Array with 10.000 Elements');
console.log('Random Array:');
console.log(performanceTest(bubblesort, randomArrayMedium, 10));
console.log(performanceTest(selectionsort, randomArrayMedium, 10));
console.log(performanceTest(gnomesort, randomArrayMedium, 10));

console.log('Sorted Array:');
console.log(performanceTest(bubblesort, sortedArrayMedium, 10));
console.log(performanceTest(selectionsort, sortedArrayMedium, 10));
console.log(performanceTest(gnomesort, sortedArrayMedium, 10));

console.log('Reversed Array:');
console.log(performanceTest(bubblesort, reversedArrayMedium, 10));
console.log(performanceTest(selectionsort, reversedArrayMedium, 10));
console.log(performanceTest(gnomesort, reversedArrayMedium, 10));

console.log('\n' + 'Array with 100.000 Elements');
console.log('Random Array:');
console.log(performanceTest(bubblesort, randomArrayLarge, 10));
console.log(performanceTest(selectionsort, randomArrayLarge, 10));
console.log(performanceTest(gnomesort, randomArrayLarge, 10));

console.log('Sorted Array:');
console.log(performanceTest(bubblesort, sortedArrayLarge, 10));
console.log(performanceTest(selectionsort, sortedArrayLarge, 10));
console.log(performanceTest(gnomesort, sortedArrayLarge, 10));

console.log('Reversed Array:');
console.log(performanceTest(bubblesort, reversedArrayLarge, 10));
console.log(performanceTest(selectionsort, reversedArrayLarge, 10));
console.log(performanceTest(gnomesort, reversedArrayLarge, 10));
