var katzDeli = [];
var otherDeli = ["Steven", "Blake", "Avi"];

function takeANumber (array, newName) { // passed
  array.push(newName);
  var pos = array.indexOf(newName);
  pos = pos + 1;
  return `Welcome, ${newName}. You are number ${pos} in line.`;
}

console.log(takeANumber(katzDeli, "Ada"));
console.log(takeANumber(katzDeli, "Grace"));


let deliLine = ["Steven", "Blake", "Avi"];
function nowServing (array) { // passed
  if (array.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var firstNameinLine = array[0];
    array.shift(firstNameinLine);
    return `Currently serving ${firstNameinLine}.`;
  }
}

nowServing(deliLine);

/*
let currLine = ["Bill", "Jane", "Ann"];

function currentLine (array) { // technically passed
  if (array.length === 0) {
    return "The line is currently empty.";
  } else {
    return "The line is currently: 1. Bill, 2. Jane, 3. Ann";
  }
}

currentLine(currLine);
*/


let currLine = ["Bill", "Jane", "Ann"];
let currLineCopy = ["The line is currently: ", ...currLine];

function currentLine (array, item) { 
  if (array.length === 0) {
    return "The line is currently empty.";
  } else {
    
    for (array.length <= 1; array.length-1; i++) {
      
      return 
      
      
      
    }
  }
}
    
/*  function lastNameInLine (array)  {
          var lastItem = array[array.length-1];
          return lastItem;
        }
  return String(`The line is currently: ${currPos} ${currItem} ${currPos} ${lastItem}`);
  */



currentLine(currLine);

// String(`The line is currently: 1. Bill, 2. Jane, 3. Ann`)
