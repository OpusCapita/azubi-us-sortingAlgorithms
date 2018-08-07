//Bubblesort
// Start on the right of the array. Compare two items. Make the items
// switch places if the left one is bigger than the right one. Proceed
// one step. Repeat until at the end of array: the smallest element is
// now at the front.
// Proceed like this with the rest of the array.
// [2][5][1]
// [2][1][5]
// [1][2][5]

function bubblesort(array, testFunction)
{
  for(var j = 0; array.length > j; j++)
  {
    for (var i = array.length-1; i > 0; i--)
    {
      let leftElement = array[i-1]
      let rightElement = array[i]

      if(leftElement > rightElement)
      {
        let temp = leftElement;
        leftElement = rightElement;
        rightElement = temp;
        array[i-1] = leftElement;
        array[i] = rightElement;
      }
    }
  }
  return array;
}
//console.log(bubblesort([43, 65, 37, 51, 80, 76, 88, 14, 83, 27, 76, 75]));


//Selection Sort
// Go through all elements of the input array to find the smallest one.
// Swap this item to be on the far left. Proceed like this with the rest
// of the array.
//[8][3][5]
//[3][8][5]
//[3][5][8]
function selectionsort(array, testFunction)
{
  for(var i = 0; i < array.length; i++)
  {
    var smallestElementIndex = i;
    for (var j = i+1; j < array.length; j++)
    {
      if(array[j]<array[smallestElementIndex])
      {
        smallestElementIndex = j;
      }
    }
    swapPositions(array, i, smallestElementIndex);
  }
  return array;
}
//console.log(selectionsort([43, 65, 37, 51, 80, 76, 88, 14, 83, 27, 76, 75]));



//Gnome Sort
// Suppose you have a gnome who wants to sort your array. He starts
// at the left.
// If he sees that the two items in front of him are sorted, he makes a
// step to the right.
// If he sees that the two items in front of him are not sorted, he swaps
// them and makes a step to the left.
// If he can't go further to the left, he goes one step to the right.
// If he arrives at the far right, he stops, since there is no number to
// compare to.


function gnomesort(array, testFunction)
{
  var i = 1;
  var isGnomeOnTheRight = false;
  while(!isGnomeOnTheRight)
  {
    function goLeft() {
      i--
    }
    function goRight() {
      i++
    }
    var indexOfLeft = i-1
    var indexOfRight = i
    var leftElement = array[indexOfLeft]
    var rightElement = array[indexOfRight]

    if(leftElement <= rightElement)
    {
      goRight()
    } else {
      swapPositions(array, indexOfLeft, indexOfRight);
      goLeft()
      if(i==0)
      {
        goRight()
      }
    }
    isGnomeOnTheRight = (indexOfRight >= array.length-1)
  }
  return array;
}
//console.log(gnomesort([43, 65, 37, 51, 80, 76, 88, 14, 83, 27, 76, 75]));

function swapPositions(array, firstIndex, secondIndex)
{
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

function simpleSort(array, testFunction) {
  array.sort();
  return array;
}

module.exports.selectionsort = selectionsort;
module.exports.gnomesort = gnomesort;
module.exports.bubblesort = bubblesort;
module.exports.simpleSort = simpleSort;
