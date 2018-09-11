
function takeANumber (currentLine, person) {
  currentLine.push(person);

  return `Welcome, ${person}. You are number ${(currentLine.length)} in line.`;
}

function nowServing (currentLine) {
  if(currentLine.length>0) return `Currently serving ${currentLine.shift()}.`;
  else return "There is nobody waiting to be served!";
}

function currentLine(line) {
  if(line.length>0) {
    var text="The line is currently: ";
    for(var i=0; i<line.length; i++) {
      if(i>0) text=text + ", ";
      text = text + `${i+1}. ${line[i]}`
    }
  }
  else text="The line is currently empty.";
  return text;
}
