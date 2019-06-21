function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  } else if (katzDeliLine.length > 0) {
    var removedIndividual = katzDeliLine.shift();
    return `Currently serving ${removedIndividual}.`;
  }
}


function currentLine(line) {
  if (line.length === 0) {
    return 'The line is currently empty.';
  }
  var positionAndName = [];
  for (var i = 0; i < line.length; i++) {
      positionAndName.push(` ${i+1}. ${line[i]}`);
  }
  return `The line is currently:${positionAndName}`;
}
    
    
    
