var katzDeliLine = [];

function takeANumber(katzDeliLine, name) { // create a function takeANumber with two parameters: katzDeliLine array and new guest's name
  katzDeliLine.push(name); // add new guests name to the end of the line/array
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.` // greet the new guests and returns their number in line. Using `${}` interpolation to insert variables into a string.
}

function nowServing(katzDeliLine) { // create a function nowServing
  if (katzDeliLine.length > 0) { // check if the line is empty
    return `Currently serving ${katzDeliLine.shift()}.` // if the line is not empty, return the name of the person who is currently being served and remove the name of the person being served from the line
  } else {
    return "There is nobody waiting to be served!" // "The line is currently empty. Time to lean, time to clean." // if the line is empty, make employees do some cleaning
  }
}

function currentLine(katzDeliLine) { // create a function with an array as a parameter
  if (katzDeliLine.length == 0) { // make sure the array is not empty
    return "The line is currently empty." // if it is empty return this fact
  }
  var currentLineArray = []; // create an empty array to be used to build the current line list later
    for (var i = 0; i < katzDeliLine.length; i++){ // apply for loop to iterate through katzDeliLineArray
      currentLineArray.push(i+1 + ". " + katzDeliLine[i]) // build currentLineArray by pushing elements from katzDeliLine to the end of the currentLineArray and enumerating them in the form of an ordered list
    }
    return "The line is currently: " + currentLineArray.join(', '); // return the currentLineArray
}
