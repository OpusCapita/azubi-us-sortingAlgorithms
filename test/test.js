var selectionsort = require("../sortingAlgorithms").selectionsort
var gnomesort = require("../sortingAlgorithms").gnomesort
var bubblesort = require("../sortingAlgorithms").bubblesort
var expect = require('chai').expect
var assert = require('assert');
describe('Array', function() {
  describe('sort()', function() {
    it('should return undefined when no value is present',
    function(){
      expect(undefined).to.be.undefined;
    });

    it('Compare sorted arrays for equality',
    function(){
      var myArray = [1];

      var myComparison = myArray.slice(0);
      var mySortedComparison = myComparison.sort(function(a,b){return a-b});
      var myFinalArray = selectionsort(myArray);
      expect(myFinalArray).to.deep.equal(mySortedComparison);
    });

    it('Compare sorted arrays for equality',
    function(){
      compareSortedArray([1,2,3,4,5,6,7,8,9,10], selectionsort);
    });

    it('Compare sorted arrays for equality',
    function(){
      compareSortedArray([10,9,8,7,5,4,3,2,1], selectionsort);
    });

    it('Compare sorted arrays for equality',
    function(){
      compareSortedArray([43, 65, 37, 51, 80, 76, 88, 14, 83, 27, 76, 75, 0,
        69, 40, 68, 31, 63, 1, 69, 18, 6, 78, 95, 59, 23, 53, 43, 80, 29,
        71, 39, 36, 9, 14, 58, 54, 6, 77, 64, 44, 89, 93, 70, 34, 86, 89,
        33, 45, 83, 79, 45, 67, 9, 78, 84, 74, 63, 96, 68, 18, 23, 92, 90,
        24, 9, 75, 53, 91, 5, 17, 95, 22, 93, 63, 54, 37, 19, 86, 12, 20,
        29, 35, 83, 46, 61, 53, 77, 65, 22, 75, 11, 70, 49, 65, 77, 67, 85,
        1, 43], bubblesort);
    });

    it('Compare sorted arrays for equality',
    function(){
      compareSortedArray([79, 67, 4, 91, 60, 61, 93, 24, 99, 78, 72, 62, 7,
        92, 74, 81, 92, 54, 74, 1, 77, 52, 12, 44, 1, 2, 96, 28, 39,
        75, 76, 40, 27, 76, 91, 17, 33, 46, 9, 20, 21, 0, 31, 10, 22,
        7, 23, 51, 65, 51, 17, 54, 93, 60, 69, 93, 41, 91, 21, 33, 40,
        37, 10, 47, 11, 7, 88, 45, 49, 64, 16, 95, 43, 21, 59, 65, 83,
        90, 46, 23, 34, 36, 29, 46, 45, 51, 97, 12, 2, 13, 0, 69, 62,
        17, 45, 54, 66, 70, 84, 44], selectionsort);
    });

    it('Compare sorted arrays for equality',
    function(){
      compareSortedArray([671, 384, 458, 981, 184, 10, 258, 212, 345, 239, 971, 355,
      713, 448, 378, 961, 111, 162, 613, 45, 647, 31, 948, 608,
      477, 31, 642, 531, 58, 415, 523, 144, 113, 261, 936, 566,
      418, 557, 36, 672, 398, 592, 102, 249, 965, 68, 747, 280,
      12, 919, 998, 277, 686, 441, 182, 406, 28, 129, 775, 899,
      456, 447, 868, 449, 564, 364, 462, 508, 740, 135, 636, 881,
      165, 918, 947, 623, 125, 227, 571, 264, 613, 302, 536, 904,
      525, 203, 270, 334, 501, 758, 597, 826, 859, 35, 432, 914,
      770, 673, 729, 304], bubblesort);
    });
  });
});

function compareSortedArray(myArray, sortAlgortihm){
  var myComparison = myArray.slice(0);
  var mySortedComparison = myComparison.sort(function(a,b){return a-b});
  var myFinalArray = sortAlgortihm(myArray);
  expect(myFinalArray).to.deep.equal(mySortedComparison);
}
