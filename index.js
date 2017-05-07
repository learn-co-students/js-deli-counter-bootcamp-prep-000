var katzDeliLine = []

function currentLine(line) {
  if (line.length == 0) {
    return 'The line is currently empty.'
  } else {
    let text = 'The line is currently:'
    for (let i = 0; i < line.length; i++) {
      text += ` ${i + 1}. ${line[i]},`
    }
    text = text.substr(0, text.length - 1)
    return text
  }
}

function nowServing(line) {
  if (line.length == 0) {
    return 'There is nobody waiting to be served!'
  } else {
    return `Currently serving ${line.shift()}.`
  }
}

function takeANumber(arr, name) {
  arr.push(name)
  return `Welcome, ${name}. You are number ${arr.length} in line.`
}
