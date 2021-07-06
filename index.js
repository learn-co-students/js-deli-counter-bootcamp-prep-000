function takeANumber(line,name) {
  
 line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(queue) {
  var i = 0
  if (queue.length === 0) {
    return "There is nobody waiting to be served!"
    } else if (queue.length > 0) {
      return `Currently serving ${queue.shift()}.`
  }
}

function currentLine(line) {
  var i = 0
  if (line.length === 0) {
    return "The line is currently empty."
  } else if (line.length > 0) {
    return `The line is currently: ${i + 1}. ${line[i]}, ${i + 2}. ${line[i + 1]}, ${i + 3}. ${line[i + 2]}` 
  }
}