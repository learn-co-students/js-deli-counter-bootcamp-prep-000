function takeANumber(katzDeliLine, name){
  var i = katzDeliLine.length
  if (i < 1) {
    katzDeliLine.push(name)
    return `Welcome, ${name}. You are number 1 in line.`;
  } else {
    katzDeliLine.push(name)
    return `Welcome, ${name}. You are number ${i+1} in line.`;
  }
}

function nowServing(katzDeliLine){
  var i = katzDeliLine.length
  if (i < 1) {
    return "There is nobody waiting to be served!"
  } else {
      var first = katzDeliLine.shift()
      return `Currently serving ${first}.`
  }
}

function currentLine(line){
  var newLine = []
  if (line.length < 1) {
    return "The line is currently empty."
  }
  for (let i = 0; i < line.length; i++) {
    newLine.push(` ${i + 1}. ${line[i]}`);
  }
  return `The line is currently:${newLine}`
}
