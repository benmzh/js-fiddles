var myArray = Array(100).fill(null).map(function() { return Math.floor(Math.random()*1000) })
var number1, number2, i, j;
var pairs = [];
var displayedArray = document.getElementById("array");
var displayedPairs = document.getElementById("pairs");
var sum = document.getElementById("sum");

function displayArray() {
  displayedArray.innerHTML = myArray.join(", ")
}

function add(a,b) {
  return a + b;
}

function sumArray() {
  sum.innerHTML = myArray.reduce(add);
  displayArray();
}

function listPairs(number1, number2) {
  if (( number1 <= number2 ) && ( number1 + number2 === 1000 )) {
    console.log(number1 + ' & ' + number2)
    pairs.push(number1 + ' & ' + number2)
    displayedPairs.innerHTML = pairs.join("<br/>");
  }
  displayArray();
}

function checkPairs() {
  for (i=0; i<myArray.length; i++) {
    var number1 = myArray[i];
    for (j=0; j<myArray.length; j++) {
      var number2 = myArray[j];
      if (j !== i) {
        listPairs(number1, number2);
      }
    }
  }
}

textField
todos

function addItem() {
  var newItem = document.getElementById("score").value;
  console.log(newItem);
}
