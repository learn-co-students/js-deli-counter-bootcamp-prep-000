
function takeANumber(queue, newCustomer){
  var newQueue = queue.length + 1
  queue[queue.length] = newCustomer
  
  return `Welcome, ${newCustomer}. You are number ${newQueue} in line.`
}

function nowServing(currentLine){
  if (currentLine.length === 0){
    return "There is nobody waiting to be served!"
  } else{
    var currentCust = currentLine[0]
    currentLine.shift()
    return `Currently serving ${currentCust}.`
  }
}

function currentLine(line){
  
  if (line.length === 0){
    return "The line is currently empty."
  } else{
    var lineString = "The line is currently: "
    var i;
  for (i = 0; i < line.length; i++) { 
  if (i == line.length - 1){
    lineString += `${i + 1}. ${line[i]}`
  } else
  lineString += `${i + 1}. ${line[i]}, `
  }
    return lineString
  }
}
