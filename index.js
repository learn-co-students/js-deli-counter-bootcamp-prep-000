function takeANumber(queue, customer) {
  return `Welcome, ${customer}. You are number ${queue.size} in line.`
}

function nowServing(queue) {
  return queue.length === 0 ? "There is nobody waiting to be served" : queue.shift()
}

function currentLine(queue) {
  line = 'The line is currently: '
  for (let i = 0; i < queue.length; i++) {
    line += `${i + 1}. ${katzDeliLine[i]}`
  }
  return line
}
