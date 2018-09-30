var katzDeliLine = [];

function takeANumber(currentLine,newPerson) {
  currentLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${currentLine.length} in line.`; 
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var serving = katzDeliLine.shift();
    return `Currently serving ${serving}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line) {
  var solution = `The line is currently:`;
  if (line.length>0){
  for (var i=1; i<line.length;i++){
    solution = solution + ` ${i}. ${line[i-1]},`;
  }
  solution = solution + ` ${line.length}. ${line[line.length-1]}`;
  return solution;
  } else {
    return "The line is currently empty.";
  }
}