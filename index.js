function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(line){
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    var i = 0;
    var waiting = [];
    while (i < line.length) {
      waiting.push(` ${i + 1}. ${line[i]}`);
      i++;
    }
    return `The line is currently:${waiting}`;
  }
}
