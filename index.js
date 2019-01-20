function takeANumber(currentLine, newName) {
  currentLine.push(newName);
  var position = currentLine.length; 
  return `Welcome, ${newName}. You are number ${position} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    var statement = "The line is currently:";
    for (var i=0; i<line.length-1; i++){
      statement = statement + ` ${i+1}. ${line[i]},`;
    }
    statement = statement + ` ${line.length}. ${line[line.length-1]}`;
    return statement;
  }
}
