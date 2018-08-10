// Bubblesort
// Start on the right of the array. Compare two items. Make the items
// switch places if the left one is bigger than the right one. Proceed
// one step. Repeat until at the end of array: the smallest element is
// now at the front.
// Proceed like this with the rest of the array.
// [2][5][1]
// [2][1][5]
// [1][2][5]

function bubblesort(array, testFunction) {
  const ArrayToSort = array;
  if (!testFunction) {
    testFunction = function regularSort(a, b) {
      return a - b;
    };
  }
  for (let j = 0; ArrayToSort.length > j; j++) {
    for (let i = ArrayToSort.length - 1; i > 0; i--) {
      const indexPosition = i;
      const leftFromIndexPosition = i - 1;
      let leftElement = ArrayToSort[leftFromIndexPosition];
      let rightElement = ArrayToSort[indexPosition];

      if (testFunction(leftElement, rightElement) > 0) {
        const temp = leftElement;
        leftElement = rightElement;
        rightElement = temp;
        ArrayToSort[leftFromIndexPosition] = leftElement;
        ArrayToSort[indexPosition] = rightElement;
      }
    }
  }
  return ArrayToSort;
}

// Selection Sort
// Go through all elements of the input array to find the smallest one.
// Swap this item to be on the far left. Proceed like this with the rest
// of the array.
// [8][3][5]
// [3][8][5]
// [3][5][8]
function selectionsort(array, testFunction) {
  if (!testFunction) {
    testFunction = function regularSort(a, b) {
      return a - b;
    };
  }
  for (let i = 0; i < array.length; i++) {
    let smallestElementIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (testFunction(array[smallestElementIndex], array[j]) > 0) {
        smallestElementIndex = j;
      }
    }
    swapPositions(array, i, smallestElementIndex);
  }
  return array;
}


// Gnome Sort
// Suppose you have a gnome who wants to sort your array. He starts
// at the left.
// If he sees that the two items in front of him are sorted, he makes a
// step to the right.

// If he sees that the two items in front of him are not sorted, he swaps
// them and makes a step to the left.
// If he can't go further to the left, he goes one step to the right.
// If he arrives at the far right, he stops, since there is no number to
// compare to.


function gnomesort(array, testFunction) {
  let gnomeComparesElements = testFunction;
  let positionOfGnome = 1;

  function moveGnomeToLeft() {
    positionOfGnome--;
  }
  function moveGnomeToRight() {
    positionOfGnome++;
  }
  function isGnomeOnTheLeft() {
    return positionOfGnome === 1;
  }
  function isGnomeOnTheRight() {
    return positionOfGnome >= array.length;
  }
  function getElementLeftOfGnome() {
    return array[positionOfGnome - 1];
  }
  function getRightElementOfGnome() {
    return array[positionOfGnome];
  }
  if (!gnomeComparesElements) {
    gnomeComparesElements = function regularSort(a, b) {
      return a - b;
    };
  }

  function gnomeSwitchesElements() {
    const indexOfLeft = positionOfGnome - 1;
    const indexOfRight = positionOfGnome;
    swapPositions(array, indexOfLeft, indexOfRight);
  }

  while (!isGnomeOnTheRight()) {
    const leftElement = getElementLeftOfGnome();
    const rightElement = getRightElementOfGnome();

    if (gnomeComparesElements(leftElement, rightElement) <= 0) {
      moveGnomeToRight();
    } else {
      gnomeSwitchesElements();

      if (isGnomeOnTheLeft()) {
        moveGnomeToRight();
      } else {
        moveGnomeToLeft();
      }
    }
  }
  return array;
}


function swapPositions(array, firstIndex, secondIndex) {
  const myArray = array;
  const temp = myArray[firstIndex];
  myArray[firstIndex] = myArray[secondIndex];
  myArray[secondIndex] = temp;
}

module.exports.selectionsort = selectionsort;
module.exports.gnomesort = gnomesort;
module.exports.bubblesort = bubblesort;
