var katzDeli = [];

function takeANumber(katzDeliLine, name) {
katzDeliLine.push(name)
return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}


function nowServing (katzDeliLine, name) {
if (katzDeliLine.length === 0) {
return "There is nobody waiting to be served!"}
else {
return `Currently serving ${katzDeliLine.splice(0, 1)}.`;
}
}

function currentLine (line) {
if (line.length === 0) {
  return "The line is currently empty."
}
else if (line.length === 1) {
  return `The line is currently: 1. ${line[0]}`
}
else if (line.length === 2) {
  return `The line is currently: 1. ${line[0]}, 2. ${line[1]}`
}
else if (line.length === 3) {
  return `The line is currently: 1. ${line[0]}, 2. ${line[1]}, 3. ${line[2]}`
}
}
