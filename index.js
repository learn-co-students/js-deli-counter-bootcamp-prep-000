function takeANumber(katzDeliLine, name) {
  var InLine = false;
  var positionInLine;
  for( var i = 0; i < katzDeliLine.length; i++) {
    if (name === katzDeliLine[i]) {
      InLine = true;
      positionInLine = i + 1;
    }
  }
  if (InLine === true) {
    return `Welcome, ${name}. You are number ${positionInLine} in line.`;
  }
  else {
    katzDeliLine.push(name);
    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
  }
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  var name = katzDeliLine[0];
  katzDeliLine.splice(0,1);
  return `Currently serving ${name}.`;
}

function currentLine(line) {
  var array = line; //array to manipulate
  if (line.length === 0) {
    return "The line is currently empty."
  }
  for(var i = 0; i < line.length; i++) {
    array[i] = ` ${i+1}. ${array[i]}`;
  }
  return `The line is currently:${array}`;
}
