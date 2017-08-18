var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeli = katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeli} in line.`
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(line) {

var numberLine = [];


    if(line.length === 0) {
      return 'The line is currently empty.';
    } else {
        for(var i = 0; i < line.length; i++) {
          numberLine.push(`${i + 1}. ${line[i]}` );
          }
        return `The line is currently: ${numberLine.join(', ')}`;
}
}
