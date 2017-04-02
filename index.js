/* Build a function that a new customer will use when entering the deli.
The function, takeANumber, should accept the current line of people, katzDeliLine, along with the new person's name as parameters.
The function should return their position in line. */
var katzDeli = []; // at begining of day, deli is empty. This is the empty line of people.

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push (name); // We took the new person and added them to the end of the list of people already in line.
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.` // We returned the total number of people in line.
    }

/* Build a function nowServing.
This function should return the first person in line and then remove that individual from the line.
If there is nobody in line, it should return "There is nobody waiting to be served!" */
function nowServing (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
  return katzDeliLine
}

/* Build a function currentLine that returns the current line.
For example, if katzDeliLine is currently ["Ada", "Grace"], currentLine(katzDeliLine) would return "The line is currently: 1. Ada 2. Grace".
If there is nobody in line, it should return "The line is currently empty."*/
var line = []; // Empty array to hold the current line of people statement

function currentLine (katzDeliLine) {
  let i = 0;
  while (i < katzDeliLine.length) {
    line.push (" " + [i+1] + ". " + katzDeliLine[i]);
    i++
  }
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    return "The line is currently:" + line
  }
}

/*  function currentLine (katzDeliLine) {
    var i = 0;
    for (i = 0; i<katzDeliLine.length; i++) {
      line.push ([i+1] + ". " + katzDeliLine[i] + ", ");
      return line
    }
    if (katzDeliLine.length === 0) {
      return "The line is currently empty.";
    } else {
      return "The line is currently: " + line
    }
    }
*/
