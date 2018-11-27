
var katzDeliLin = [];
// the current line of people
function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name);
return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`; 
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length !== 0) {
    var firstInLine = katzDeliLine[0];
  katzDeliLine.shift();
return `Currently serving ${firstInLine}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine (array) {
  // if loop numerates elements starting with 1. (1. index0)
  var testArray = [];
  if (array.length) {
    for (var i = 0; i < array.length; i++) {
      testArray.push(` ${i+1}. ${array[i]}`);
    }
    var numsAndNames = "The line is currently:";
    return numsAndNames + testArray;
  } else {
    var emptyLine ="The line is currently empty.";  
    return emptyLine;
  }
}