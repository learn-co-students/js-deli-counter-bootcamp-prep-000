
function takeANumber(queue, newCust){
  queue.push(newCust)
  return `Welcome, ${newCust}. You are number ${queue.length} in line.`
}

function nowServing(queue){
  if (queue.length > 0){
    return `Currently serving ${queue.shift()}.`
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(queue){

  if (queue.length > 0){
    var output = `The line is currently: 1. ${queue[0]}`
    for (var count = 1; count< queue.length; count++){
     output += `, ${count+1}. ${queue[count]}`
    }
  }
  else {
    return "The line is currently empty."
  }
return output
  }
