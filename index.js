var katzDeli = [];
var myName = 'my name';

function takeANumber(line,myName) {
  var myString = '';
  line.push(myName)
  myString = "Welcome, " + myName + ". You are number " + (line.length) + " in line.";
  return myString;
}
function nowServing(line) {
  var myString = '';
  if (line.length===0) {
    myString = 'There is nobody waiting to be served!'
  }
  else {myString = 'Currently serving ' + line.shift() + '.'
  }
  return myString
}

function currentLine(line) {
  var i = 0;
  var currentlineReturn = '';
  if (line.length===0) {
    currentlineReturn='The line is currently empty.'
  }
  else {
    currentlineReturn = 'The line is currently: '
    for (i=0; i<line.length-1; i++) {
      currentlineReturn = currentlineReturn + (i+1) +'. ' + line[i] + ', '
    }
    currentlineReturn = currentlineReturn + (line.length) + '. ' + line.pop()
  
  }
  return currentlineReturn;
}
