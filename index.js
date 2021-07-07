var katzDeliLine = [];
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(`${name}`);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;

}

function nowServing(katzDeliLine) {

  if(katzDeliLine.length === 0) {
  return "There is nobody waiting to be served!"
  }
  else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}



function currentLine(line){

  var i = 0;
  var lineCount = [];

  while (i < line.length) {
    lineCount.push(` ${i + 1}. ${line[i]}`);
    i++;
  }
    if(line.length === 0) {
      return "The line is currently empty.";
    }
    else {
      return `The line is currently:${lineCount}`;
    }

}
