function takeANumber(katzDeliLine, name) {
  var position = checkPosition(katzDeliLine, name)
  
  if (position === 0) {
    katzDeliLine.push(name)
    //position = checkPosition(katzDeliLine, name)
    position = katzDeliLine.length
  }
  //console.log(position)
  return `Welcome, ${name}. You are number ${position} in line.`
}

function checkPosition(katzDeliLine, name) {
  var position = 0;
  for (let i = 0; i < katzDeliLine.length; i++) {
    if (katzDeliLine[i] == name) {
      position = i + 1
    }
  }
  return position
}

var katzDeliLine = ['Ada'];
console.log(takeANumber(katzDeliLine, "Ada"))

function nowServing (katzDeliLine) {
  var name = katzDeliLine.shift()
  var serving = ''
  
  if (name !== undefined) {
    serving = `Currently serving ${name}.`
  }
  else {
    serving = 'There is nobody waiting to be served!'
  }
  return serving
}

function currentLine(katzDeliLine) {
  var newString = 'The line is currently: ';
  var position = 0;
  var length = katzDeliLine.length
  
  for (let i=0; i < length; i++) {
    position = i + 1
    newString += position + '. ' + katzDeliLine[i]
    if (position !== length) {
      newString += ', '
    }
  }
  if (!length) {
    newString = 'The line is currently empty.'
  }
  return newString
}