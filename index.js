var katzDeliLine = []


function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length > 0) {
    return `Currently serving ${line.shift()}.`
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  var i =0;
  var message = 'The line is currently:';
  if (line.length === 1) {
    return `The line is currently: ${[i+1]}. ${line[i]}`
  }
  else if (line.length >1) {
    while (line.length >= (i+1)) {
      if (line.length > (i+1)){
        message = message + ` ${i+1}. ${line[i]},`
        i++
      }
      else {
        message = message + ` ${i+1}. ${line[i]}`
        i++
      }
}
return message
}
  else {
    return "The line is currently empty."
  }
}
