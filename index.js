var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing(katzDeliLine) {

  if (katzDeliLine.length > 0) {
  return (`Currently serving ${katzDeliLine.shift()}.`);
  }
else {
  return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  var newArray = [];
  let i = 0;
  if (line.length > 0) {
      for (i = 0; i < line.length; i++) {
      newArray.push(`${[i+1]}. ${line[i]}`);
      }
    }

  else {
    return "The line is currently empty.";
  }
  var newArray1 = newArray.join(', ');
  return (`The line is currently: ${newArray1}`);
}
