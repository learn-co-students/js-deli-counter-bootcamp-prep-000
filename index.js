var katzDeliLine = [];
// create an array
function takeANumber(katzDeliLine, name){ // function takes two parameters
  katzDeliLine.push(name); //Adds new pereson to the end of the line / array
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`; // gives back their position in the line because their position will be as long as the line is
}

function nowServing(katzDeliLine){  // Shows next person in line and removes them from the array
  if (katzDeliLine.length === 0){ // if there's no more strings in the array
    return "There is nobody waiting to be served!" // return this string
  } else {
    var nextUp = katzDeliLine[0]; // store the first value of the array
    katzDeliLine.shift(); // remove the first value of the array
    return `Currently serving ${nextUp}.`; // return the first value that we stored in a variable
  }
}
function currentLine(katzDeliLine){  // function shows current people's position in line
  if (katzDeliLine.length === 0){ // if the array equals 0 return `"The line is currently empty."
    return "The line is currently empty."
  }else { // if there are people in line, return their position with numbers
    return `The line is currently: 1. ${katzDeliLine[0]}, 2. ${katzDeliLine[1]}, 3. ${katzDeliLine[2]}`
  }
}
