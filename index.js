var katzDeli = [];

function takeANumber (deliLine, name) {
  deliLine.push (name);
  return `Welcome, ${name}. You are number ${deliLine.length} in line.`;
}

function nowServing (deliLine) {
  if (deliLine.length ===  0) {
      return `There is nobody waiting to be served!`
  } else {
    return `Currently serving ${deliLine.shift()}.`
  }
}


function currentLine (line) {
  if (line.length === 0) {
    return `The line is currently empty.`
  } else {
    var newArray = []
    for (var i = 0; i < line.length; i++) {
      newArray.push (` ${i+1}. ${line[i]}`)
    }
    return `The line is currently:${newArray}` 
  }
}

