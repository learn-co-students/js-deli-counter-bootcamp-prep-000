
function takeANumber(curLine, newName){
  if(curLine.length === 0){
    curLine[0] = newName
    return `Welcome, ${newName}. You are number ${curLine.length} in line.`
  } else if(curLine.length > 0) {
    curLine.push(newName)
    return `Welcome, ${newName}. You are number ${curLine.length} in line.`
  }
}


function nowServing(curLine) {
  if (curLine.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${curLine.shift()}.`
  }
}


function currentLine(curLine) {
  if (curLine.length === 0) {
    return "The line is currently empty."
  } else {
    var announcement = ""
    do {
      var i = 0
      announcement = announcement + `${i + 1}. ${curLine[i]}, `
      i++
    } while (i < curLine.length)
    return `The line is currently: ` + announcement
  }
}