var katzDeliLine = []

function takeANumber(katzDeliLine, name) {
  var position = katzDeliLine.length + 1;
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${position} in line.`;
}

function nowServing(deliLine) {
  if (deliLine.length > 0) {return `Currently serving ${deliLine.shift()}.`;
}
  else {return "There is nobody waiting to be served!";
}

}

function currentLine(deliLine) {
  var newline = [];
  let i = 0;
  if (deliLine.length > 0) {
  for (i = 0; i < (deliLine.length); i++){
    newline.push(`${i+1}. ${deliLine[i]}`);
  }
  var newline2 = newline.join(", ");
  return `The line is currently: ${newline2}`;
}
  else {return "The line is currently empty."}
}
