function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}
function nowServing(line) {
  if (line.length != 0) {
    let next = line[0]
    line.shift()
    return `Currently serving ${next}.`
  } else {
    return 'There is nobody waiting to be served!'
  }
}
function currentLine(line) {
  let waiting = '';
  for (let i = 0; line.length > i; i++) {
    waiting += `${i + 1}. ${line[i]}${line.length > 1 && i != line.length -1 ? ', ' : ''}`
  }
  if (line.length != 0) {
    return `The line is currently: ${waiting}`
  } else {
    return 'The line is currently empty.'
  }
}
