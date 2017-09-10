var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var numberInLine = katzDeliLine.length;
  return `Welcome, ${name}. You are number ${numberInLine} in line.`;
}

function nowServing(line) {
  if(line.length < 1) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${line.shift()}.`
  }
  return line;
}

function currentLine(line) {
  if(line.length === 0) {
    return "The line is currently empty.";
  } else {
    var i = 0;
    var waiting = [];
    while(i < line.length) {
      waiting.push(` ${i + 1}. ${line[i]}`);
      i++;
    }
      return `The line is currently:${waiting}`;
  }

}
