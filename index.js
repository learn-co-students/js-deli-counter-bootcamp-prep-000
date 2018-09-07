function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return `There is nobody waiting to be served!`
  }
  var firstPerson = katzDeliLine.shift()
  return `Currently serving ${firstPerson}.`
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return `The line is currently empty.`
  }
  var line = `The line is currently:`
  for (var i = 0; i < katzDeliLine.length; i++) {
    if (i === katzDeliLine.length - 1) {
      line = `${line} ${[i + 1]}. ${katzDeliLine[i]}` 
    } else {
      line = `${line} ${[i + 1]}. ${katzDeliLine[i]},`
    }
  }
  return line
}