// Learn.co Bootcamp Prep 15 JavaScript Deli Counter

var katzDeliLine = [];  // Initialise line to 0 at the beginning of the day.

// Define a function that takes two parameters:
// katzDeliLine - current line of people,
// name - new person in line.
// Return the new person's position in the line.
function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name);
  var numInLine = katzDeliLine.length;
  return `Welcome, ${name}. You are number ${numInLine} in line.`;
}

// Define a function that takes one parameter:
// katzDeliLine - current line of people.
// If empty, return line empty message,
// else, return name of person being served and remove that person from the line.
function nowServing (katzDeliLine) {
  if (katzDeliLine.length !== 0) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

// Define a function that takes one parameter:
// katzDeliLine - current line of people.
// If current line of people is greater than 0, return current line message,
// else, return empty line message.
function currentLine (katzDeliLine) {
  if (katzDeliLine.length !== 0) {
    var line = "The line is currently: ";
    for (var numInLine = 1; numInLine < katzDeliLine.length; numInLine++) {
      line += `${numInLine}. ${katzDeliLine[numInLine - 1]}, `;
    }
    return line += `${katzDeliLine.length}. ${katzDeliLine[katzDeliLine.length - 1]}`;
  } else {
    return "The line is currently empty.";
  }
}
