var katzDeli = [];


function takeANumber (katzDeliLine,name) {
  katzDeliLine.push(name);
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}


function nowServing (name) {
  if (name.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${name.shift()}.`;
  }
}

function currentLine (line) {
  if (line.length === 0) {
    return "The line is currently empty."
  }
  var lineNumbers = [];
  for (var i = 0; i < line.length; i++) {
    lineNumbers.push (i+1 + ". " + line[i])
  }
    console.log ("The line is currently: " + lineNumbers.join (', '))
    return `The line is currently: ${lineNumbers.join(', ')}`
  }
