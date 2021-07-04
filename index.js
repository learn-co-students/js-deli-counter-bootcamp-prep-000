
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}


function nowServing(katzDeliLine) {
  if (katzDeliLine.length !== 0) {
    return `Currently serving ${katzDeliLine.shift()}.`
  } else {
    return `There is nobody waiting to be served!`
  }
}


function currentLine(katzDeliLine) {
  var array = []
  for (var counter = 0; counter < katzDeliLine.length; counter++) {
     array.push(` ` + [counter + 1] + `.` + ` ` + katzDeliLine[counter])
  }
  if (katzDeliLine.length === 0) {
    return `The line is currently empty.`
  } else {
    return(`The line is currently:` + array)
  }
}
