
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
  for (var counter = 1; counter < katzDeliLine.length; counter++) {
    return `The line is currently: ${counter}. ${katzDeliLine.shift()}`
  }
  if (katzDeliLine.length === 0) {
    return `The line is currently empty.`
  }
}
