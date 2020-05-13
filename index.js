
function takeANumber(queue, name) {
  queue.push(name)
  return `Welcome, ${name}. You are number ${queue.length} in line.`
}

function nowServing(queue) {
  if (queue.length > 0) {
    return `Currently serving ${queue.shift()}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(queue) {
  if (queue.length > 0) {
    var userQueuePositions = []
    for (let i = 0; i < queue.length; i++) {
      userQueuePositions.push(`${i + 1}. ${queue[i]}`)
    }
    return `The line is currently: ${userQueuePositions.join(", " )}`
  } else {
    return "The line is currently empty."
  }
}
