
function takeANumber (line, name){
  var length = line.length
  line [length] = name;
  return `Welcome, ${name}. You are number ${length + 1} in line.`
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length > 0){
  var serving = katzDeliLine[0];
  katzDeliLine = katzDeliLine.shift();
  return `Currently serving ${serving}.`;
}
else {
  return "There is nobody waiting to be served!"
}
}

function currentLine (line) {

if (line.length > 0){
  var lineString = "The line is currently:"
  for (var i = 0; i < line.length; i++) {
    lineString += ` ${i+1}. ${line[i]}`
    if (i< line.length -1) {
      lineString += ","

    }
  }

  return lineString;
}
else {
  return "The line is currently empty."
}
}
