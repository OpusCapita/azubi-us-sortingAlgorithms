/* eslint-disable */
var selectionsort = require("../sortingAlgorithms").selectionsort
var gnomesort = require("../sortingAlgorithms").gnomesort
var bubblesort = require("../sortingAlgorithms").bubblesort
var expect = require('chai').expect
var assert = require('assert');

describe('Array', function() {
  describe('Sorting', function() {
    describe('Bubblesort', function(){
    it('Accepts an array', function(){ compareSortedArray([1], bubblesort)})
    it('Checks if given array is sorted', function(){compareSortedArray([1,2,3,4,5,6,7,8,9,10], bubblesort)})
    it('Sorts the array ascending', function(){
      compareSortedArray([671, 384, 458, 981, 184, 10, 258, 212, 345, 239, 971, 355,
          713, 448, 378, 961, 111, 162, 613, 45, 647, 31, 948, 608,
          477, 31, 642, 531, 58, 415, 523, 144, 113, 261, 936, 566,
          418, 557, 36, 672, 398, 592, 102, 249, 965, 68, 747, 280,
          12, 919, 998, 277, 686, 441, 182, 406, 28, 129, 775, 899,
          456, 447, 868, 449, 564, 364, 462, 508, 740, 135, 636, 881,
          165, 918, 947, 623, 125, 227, 571, 264, 613, 302, 536, 904,
          525, 203, 270, 334, 501, 758, 597, 826, 859, 35, 432, 914,
          770, 673, 729, 304], bubblesort);})
    it('Sorts the array reversed',
      function(){
        var myArray = [1,3,2,5,9]
        var myComparison = myArray.slice(0);

        var mySortedComparison = myComparison.sort(function(a,b){return b-a})
        var myFinalArray = bubblesort(myArray, function(a,b){
        if (b > a) {
        return 1
        } else if (b < a) {
        return -1
        }
        return 0;
        });
        expect(myFinalArray).to.deep.equal(mySortedComparison)
        });
    it('Bubblesort sorts an array according the given function a-b',
      function(){
        var myArray = [1,3,2,5,9]
        var myComparison = myArray.slice(0);

        var compare = function(a,b){return a-b}
        var mySortedComparison = myComparison.sort(compare)
        var myFinalArray = bubblesort(myArray,compare)

        expect(myFinalArray).to.deep.equal(mySortedComparison)
      })
    it('Sorts by type, only numbers, not strings',
      function(){
        var myArray = [2,1,5,"myString",6,"myOtherString",-1]
        var myComparison = myArray.slice(0);

          var compare = function(a,b){
          if (typeof a === "string") {
            return -1
          }
          if (typeof b === "string") {
            return 1
          }
          return b - a;
        };
        var mySortedComparison = myComparison.sort(compare);
        var myFinalArray = bubblesort(myArray,compare);

        expect(myFinalArray).to.deep.equal(mySortedComparison);
      })
      it('Sorts a JSon file',
      function(){

        let pimteam =
    [
      {
       "name": "Alexej",
        "employeeid": 100
      },
      {
        "name": "Bjoern",
        "employeeid": 70
      },
      {
        "name": "Charleen",
        "employeeid": 80
      },
      {
        "name": "Philipp",
        "employeeid": 90
      },
      {
        "name": "Jens",
        "employeeid": 50
      },
      {
        "name": "Tobias",
        "employeeid": 102
      }
    ]
       var myComparison = pimteam.slice(0);

       let sort = function(a,b) {return a.employeeid > b.employeeid};
       var mySortedComparison = myComparison.sort(sort);
       var myFinalArray = bubblesort(pimteam,sort);

       expect(myFinalArray).to.deep.equal(mySortedComparison);
    })
})

describe('Selectionsort', function(){
  it('Accepts an array', function(){compareSortedArray([1], selectionsort)})
  it('Checks if given array is sorted', function(){compareSortedArray([1,2,3,4,5,6,7,8,9,10], selectionsort)})
  it('Sorts the array ascending', function(){
    compareSortedArray([671, 384, 458, 981, 184, 10, 258, 212, 345, 239, 971, 355,
        713, 448, 378, 961, 111, 162, 613, 45, 647, 31, 948, 608,
        477, 31, 642, 531, 58, 415, 523, 144, 113, 261, 936, 566,
        418, 557, 36, 672, 398, 592, 102, 249, 965, 68, 747, 280,
        12, 919, 998, 277, 686, 441, 182, 406, 28, 129, 775, 899,
        456, 447, 868, 449, 564, 364, 462, 508, 740, 135, 636, 881,
        165, 918, 947, 623, 125, 227, 571, 264, 613, 302, 536, 904,
        525, 203, 270, 334, 501, 758, 597, 826, 859, 35, 432, 914,
        770, 673, 729, 304], selectionsort);})
    it('Sorts the array reversed',
    function(){
    var myArray = [1,3,2,5,9]
    var myComparison = myArray.slice(0);

    var mySortedComparison = myComparison.sort(function(a,b){return b-a})
    var myFinalArray = selectionsort(myArray, function(a,b){
    if (b > a) {
    return 1
    } else if (b < a) {
    return -1
    }
    return 0;
    })
    expect(myFinalArray).to.deep.equal(mySortedComparison)
    })
    it('Selectionsort sorts an array according the given function a-b',
      function(){
        var myArray = [1,3,2,5,9]
        var myComparison = myArray.slice(0);

        var compare = function(a,b){return a-b}
        var mySortedComparison = myComparison.sort(compare)
        var myFinalArray = selectionsort(myArray,compare)

        expect(myFinalArray).to.deep.equal(mySortedComparison)
      })
      it('Sorts by type, only numbers, not strings',
        function(){
          var myArray = [2,1,5,"myString",6,"myOtherString",-1]
          var myComparison = myArray.slice(0);

            var compare = function(a,b){
            if (typeof a === "string") {
              return -1
            }
            if (typeof b === "string") {
              return 1
            }
            return b - a;
          };
          var mySortedComparison = myComparison.sort(compare);
          var myFinalArray = selectionsort(myArray,compare);

          expect(myFinalArray).to.deep.equal(mySortedComparison);
        })
        it('Sorts a JSon File',
        function(){

          let pimteam =
      [
        {
         "name": "Alexej",
          "employeeid": 100
        },
        {
          "name": "Bjoern",
          "employeeid": 70
        },
        {
          "name": "Charleen",
          "employeeid": 80
        },
        {
          "name": "Philipp",
          "employeeid": 90
        },
        {
          "name": "Jens",
          "employeeid": 50
        },
        {
          "name": "Tobias",
          "employeeid": 102
        }
      ]
         var myComparison = pimteam.slice(0);

         let sort = function(a,b) {return a.employeeid > b.employeeid};
         var mySortedComparison = myComparison.sort(sort);
         var myFinalArray = selectionsort(pimteam,sort);

         expect(myFinalArray).to.deep.equal(mySortedComparison);
      })
})

describe('Gnomensort', function(){
    it('Accepts an array', function(){compareSortedArray([1], gnomesort)})
    it('Checks if given array is sorted', function(){compareSortedArray([1,2,3,4,5,6,7,8,9,10], gnomesort)})
    it('Sorts the array ascending', function(){
      compareSortedArray([671, 384, 458, 981, 184, 10, 258, 212, 345, 239, 971, 355,
          713, 448, 378, 961, 111, 162, 613, 45, 647, 31, 948, 608,
          477, 31, 642, 531, 58, 415, 523, 144, 113, 261, 936, 566,
          418, 557, 36, 672, 398, 592, 102, 249, 965, 68, 747, 280,
          12, 919, 998, 277, 686, 441, 182, 406, 28, 129, 775, 899,
          456, 447, 868, 449, 564, 364, 462, 508, 740, 135, 636, 881,
          165, 918, 947, 623, 125, 227, 571, 264, 613, 302, 536, 904,
          525, 203, 270, 334, 501, 758, 597, 826, 859, 35, 432, 914,
          770, 673, 729, 304], gnomesort)})
    it('Sorts the array reversed',
    function(){
    var myArray = [1,3,2,5,9]
    var myComparison = myArray.slice(0);

    var mySortedComparison = myComparison.sort(function(a,b){return b-a});
    var myFinalArray = gnomesort(myArray, function(a,b){
    if (b > a) {
    return 1
    } else if (b < a) {
    return -1
    }
    return 0;
    });
    expect(myFinalArray).to.deep.equal(mySortedComparison);
    });
    it('Gnomsort sorts an array according the given function a-b',
      function(){
        var myArray = [1,3,2,5,9]
        var myComparison = myArray.slice(0);

        var compare = function(a,b){return a-b}
        var mySortedComparison = myComparison.sort(compare);
        var myFinalArray = gnomesort(myArray,compare)

        expect(myFinalArray).to.deep.equal(mySortedComparison);
      })
    it('Sorts by type, only numbers, not strings',
      function(){
        var myArray = [2,1,5,"myString",6,"myOtherString",-1]
        var myComparison = myArray.slice(0);

        var compare = function(a,b){
        if (typeof a === "string") {
        return -1
        }
        if (typeof b === "string") {
        return 1
        }
        return b - a;
        };
        var mySortedComparison = myComparison.sort(compare);
        var myFinalArray = gnomesort(myArray,compare);

        expect(myFinalArray).to.deep.equal(mySortedComparison);
      })
      it('Sorts a JSon file',
      function(){

        let pimteam =
    [
      {
       "name": "Alexej",
        "employeeid": 100
      },
      {
        "name": "Bjoern",
        "employeeid": 70
      },
      {
        "name": "Charleen",
        "employeeid": 80
      },
      {
        "name": "Philipp",
        "employeeid": 90
      },
      {
        "name": "Jens",
        "employeeid": 50
      },
      {
        "name": "Tobias",
        "employeeid": 102
      }
    ]
       var myComparison = pimteam.slice(0);

       let sort = function(a,b) {return a.employeeid > b.employeeid};
       var mySortedComparison = myComparison.sort(sort);
       var myFinalArray = gnomesort(pimteam,sort);

       expect(myFinalArray).to.deep.equal(mySortedComparison);
    })
})
})
})


function compareSortedArray(myArray, sortAlgortihm){
  var myComparison = myArray.slice(0);
  var mySortedComparison = myComparison.sort(function(a,b){return a-b});
  var myFinalArray = sortAlgortihm(myArray);
  expect(myFinalArray).to.deep.equal(mySortedComparison);
  expect(myArray).not.to.be.undefined;
}
