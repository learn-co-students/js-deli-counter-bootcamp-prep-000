function takeANumber(queue,customer) {
  queue.push(customer)
  return `Welcome, ${customer}. You are number ${queue.length} in line.`
}
function nowServing(queue) {
  var nextCustomer
  if (queue.length>0) {
    nextCustomer=queue[0]
    queue.shift()
    return `Currently serving ${nextCustomer}.`
  } else return "There is nobody waiting to be served!"
}
function currentLine(queue) {
  var queueString="", i=0
  if (queue.length>0) {
    do {
      queueString=queueString.concat(`${i+1}. `,queue[i],", ")
      i++
    } while (i<queue.length)
    // inelligent hack but efficient because no more condditionals
    // however i'm unsatisfied and will return!
    queueString=queueString.substr(0,queueString.length-2)
    return `The line is currently: ${queueString}`
  } else return "The line is currently empty."
}