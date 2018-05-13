/* need an array of names 
need an array of objects with key value pairs of the person's name and their number
the function for taking a number:
grab a person's name and assign them a number 

print a sentence with the name and number




var katzDeli = [];
var katzDeliLine = [];
var katzDeliNames = []


function takeANumber(katzDeliLine, name) {
  object.assign({"Ada": katzDeliLine.length+1}, katzDeli)
  var number = katzDeliLine.length+1
  Object.assign({number : name}, katzDeli)
  return ("Welcome, " + katzDeliLine.number + ". You are number " + katzDeliNames.name + " in line.")
}

*/

var array = [];

function takeANumber(array, name) {
  array.push(name)
  return "Welcome, " + name + ". You are number " + array.length + " in line."
}



function nowServing(array) {
  var arrayLength = array.length;
  if (arrayLength > 0) {
    return "Currently serving " + array.shift() + ".";
  } else if (arrayLength === 0) {
    return "There is nobody waiting to be served!";
  }
}


var line = [];

function currentLine(array) {
  var arrayLength = array.length
  if (arrayLength === 0) {
      return "The line is currently empty.";
    } else {
      for (var i=0; i<arrayLength; i++) {
      line.push(" " + (i+1) + ". " + array[i])
    }
    return "The line is currently:" + line;
  }
}

