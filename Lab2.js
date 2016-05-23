
function convertNumberGradeToLetter(arr) {
  //determine the letter grade for each value in array and log to console
  for (var i = 0; i < arr.length; i++)
    if(arr[i] >= 95){
      console.log("A");
    }
    else if (arr[i] >= 85){
      console.log("B");
    }
    else if (arr[i] >= 75){
      console.log("C");
    }
    else if (arr[i] >= 65){
      console.log("D");
    }
    else {
      console.log("F");
    }
}

function findAverage(arr){
  //find average oa all values in array and log to console
  var total = 0;
  for(var i = 0; i < arr.length; i++) {
  total += arr[i];
  }
  var avg = total / arr.length
  console.log(avg);
}

function findAverageLetter(arr){

  //find average of all values in array
  var total = 0;
  var letter = " ";
  for(var i = 0; i < arr.length; i++) {
  total += arr[i];
  }
  var avg = total / arr.length

  //determine letter grade
  if(avg >= 95){
    letter = "A"
  }
  else if (avg >= 85){
    letter = "B"
  }
  else if (avg >= 75){
    letter = "C"
  }
  else if (avg >= 65){
    letter = "D"
  }
  else {
    letter = "F"
  }

  //log result to console
  console.log(letter);
}

function findLargestGrade(arr){

  //find the largest value in the array
  var largest= 0;
  for (i=0; i<=arr.length;i++){
      if (arr[i] > largest) {
          var largest = arr[i];
      }
  }

  //log result to console
  console.log(largest);
}

function findSmallestGrade(arr){

  //find the smallest value in the array
  var smallest= 100;
  for (i=0; i<=arr.length;i++){
      if (arr[i] < smallest) {
          var smallest = arr[i];
      }
  }

  //log result to console
  console.log(smallest);
}

const tests = [ 98, 100, 86, 74, 78, 83, 83, 86, 91, 93, 92, 92, 100, 100, 96, 88, 70, 89, 92, 87 ];

convertNumberGradeToLetter(tests);
console.log(tests.length);
findAverage(tests);
findAverageLetter(tests);
findLargestGrade(tests);
findSmallestGrade(tests);
