<<<<<<< HEAD
var katzDeliLine = [];

// Build a function takeANumber, should accept the current line of people, katzDeliLine,
// along with the new person's name as parameters. The function should return their
// position in line.

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var lineNumber = katzDeliLine.indexOf(name)+1;
  return `Welcome, ${name}. You are number ${lineNumber} in line.`;
}

// Build a function nowServing. This function should return the first person in line and
// then remove that individual from the line. If there is nobody in line, it should return
// "There is nobody waiting to be served!"

function nowServing(katzDeliLine) {
 if ( katzDeliLine == "") {
   return `There is nobody waiting to be served!`;
 } else {
   var serving = katzDeliLine[0];
   katzDeliLine.shift()
   return `Currently serving ${serving}.`;
 }
}

// Build a function currentLine that returns the current line. For example, if katzDeliLine
// is currently ["Ada", "Grace"], currentLine(katzDeliLine) would return "The line is
// currently: 1. Ada, 2. Grace". If there is nobody in line, it should return "The line is
// currently empty."

function currentLine(line) {
 if ( line == "" ) {
   return `The line is currently empty.`;
 } else {
   var peopleCurrentlyInLine = [];
   for (var i = 0; i < line.length; i++) {
   var peopleInLine = line[i];
   var lineNumber = " "+(line.indexOf(peopleInLine)+1);
   peopleCurrentlyInLine.push(`${lineNumber}. ${peopleInLine}`);
  }
 }
 return `The line is currently:${peopleCurrentlyInLine}`;
}
=======

>>>>>>> a35838333b8b554b69892c751788934e5886bcab
