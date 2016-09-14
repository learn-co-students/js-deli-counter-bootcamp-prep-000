var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name);
    return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name) + 1} in line.`
}

function nowServing(deliLine, name) {
  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var line = deliLine[0];
    deliLine.shift(name);
    return `Currently serving ${line}.`

  }

}



function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  }
  var newLine = [];
  for (let i = 0; i < line.length; ++i) {
    newLine.push( `${i + 1}. ${line[i]}, `); ++i;
    return `The line is currently: ${newLine}`
}
}
