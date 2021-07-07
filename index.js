function takeANumber(katzDeliLine,newPerson) {
  katzDeliLine.push(newPerson)
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length===0) {
    return 'There is nobody waiting to be served!'
  } else {
    var nextInLine=katzDeliLine.shift()
    return `Currently serving ${nextInLine}.`
  }
}

function currentLine(currentQueue) {
  if (currentQueue.length===0) {
    return 'The line is currently empty.'
  } else {
    var message=['The line is currently:']
    var i
    for (i=0;i<currentQueue.length-1;i++) {
      message=`${message} ${i+1}. ${currentQueue[i]},`
    }
    message=`${message} ${currentQueue.length}. ${currentQueue.slice(-1)}`
    return message
  }
}