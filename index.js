function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(katzDeliLine) {
  var currentLine = '';
  
  for (var i = 0; i < katzDeliLine.length; i++) {
    var person = katzDeliLine[i];
    if (i === katzDeliLine.length - 1) {
      currentLine += (i + 1) + '. ' + person;
    } else {
      currentLine += (i + 1) + '. ' + person + ', ';
    }
  }
  
  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.';
  } else {
    return 'The line is currently: ' + currentLine;
  }
}







