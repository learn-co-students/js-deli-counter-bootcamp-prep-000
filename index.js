function takeANumber (line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing (line) {
  return line.length ? `Currently serving ${line.shift()}.` : 'There is nobody waiting to be served!'
}

function currentLine (line) {
  if (line.length) {
    let lineWithCount = []
    for (let i = 0; i < line.length; i++) {
      lineWithCount.push(` ${i + 1}. ${line[i]}`)
    }
    return `The line is currently:${lineWithCount.join()}`
  } else {
    return 'The line is currently empty.'
  }
}
