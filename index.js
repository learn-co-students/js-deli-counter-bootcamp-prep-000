var katzDeliLine = []
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
}
function nowServing(katzDeliLine,name) {
  var i= 0
  while (i<katzDeliLine.length){i++}
  if (katzDeliLine.length === 0) {
  return "There is nobody waiting to be served!"}
else
return (`Currently serving ${katzDeliLine.shift()}.`)
}

var line = []

function currentLine(line) { 
  var newLine = []   
  for (let i = 0; i < line.length; i++) {
    newLine.push([i + 1]+ ". " + line[i])
  }
  
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    return(`The line is currently: ` + newLine.join(', '));
  }
}
