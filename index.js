function takeANumber(queue, customer) {
  queue.push(customer)
  return `Welcome, ${customer}. You are number ${queue.length} in line.`
}

function nowServing(queue) {
  return queue.length === 0 ? "There is nobody waiting to be served!" : `Currently serving ${queue.shift()}.`
}

function currentLine(queue) {
  if (queue.length === 0) {
    return 'The line is currently empty.'
  }
  else {
    let line = 'The line is currently: '
    for (let i = 0; i < queue.length; i++) {
      line += `${i + 1}. ${queue[i]}${queue.length !== (i+ 1) ? ", " : "" }`
    }
    return line
  }
}
