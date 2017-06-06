function takeANumber(passedArray, name) {
  var counter = passedArray.length
  passedArray.push(`${name}`)

  return `Welcome, ${name}. You are number ${counter + 1} in line.`
}

function nowServing(passedArray) {
  if(passedArray.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    return `Currently serving ${passedArray.shift()}.`
  }
}

function currentLine(line) {
  if(line.length === 0) {
    return 'The line is currently empty.'
  } else {
    var newLine = []
    for(let i = 0; i < line.length; i++) {
      newLine.push(` ${i+1}. ${line[i]}`)
    }
    return `The line is currently:${newLine}`
  }
}
