var katzDeliLine = [];
var name = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(array) {
  if (array.length > 0) {
    return `Currently serving ${array.shift()}.`
  } else { return `There is nobody waiting to be served!`}
}

function currentLine(array) {
  var position = [];
  for (let i = 0; i < array.length; ++i) {
      position.push(` `+[i+1]+`. ${array[i]}`) }
    if (array.length > 0) {
      return `The line is currently:` +  `${position}`
    } else { return `The line is currently empty.`}
}
