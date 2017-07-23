var katzDeli = [];
function takeANumber(katzDeli, name){
  katzDeli.push(`${name}`)
  return (`Welcome, ${name}. You are number ${katzDeli.length} in line.`)
}

function nowServing(deliLine) {
  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${deliLine.shift()}.`;
  }
}

var line = []
function currentLine(katzDeli) {
  for (var i = 0; i < katzDeli.length; i++) {
    line.push(' ' + [i+1] + '. ' + katzDeli[i])
  }

  if (katzDeli.length === 0) {
    return "The line is currently empty."
  }

  return('The line is currently:' + line)
}
