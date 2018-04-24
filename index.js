var katzDeli = [];

  function takeANumber(currentLine, name) {
   currentLine.push(name);
return `Welcome, ${name}. You are number ${currentLine.length} in line.`;
}

function nowServing(waitTime) {
  if(waitTime.length === 0) {
   return "There is nobody waiting to be served!";
  } else { 
    var please = `Currently serving ${waitTime[0]}.`;
 waitTime.shift();
  } return please;
}

function currentLine(line) {
  if(line.length === 0) {
     return 'The line is currently empty.';
  } else {return `The line is currently: 1. ${line[0]}, 2. ${line[1]}, 3. ${line[2]}`}
}

