function takeANumber(waitingArray, newName){
  waitingArray.push(newName)
  return `Welcome, ${newName}. You are number ${waitingArray.length} in line.`
}
function nowServing(waitingArray){
  if (waitingArray.length === 0){
    return "There is nobody waiting to be served!"
  }else{
    var nextUp = waitingArray[0]
    waitingArray.shift()
    return `Currently serving ${nextUp}.`
  }
}
function currentLine(waitingArray){
  if (waitingArray.length === 0){
    return "The line is currently empty."
  }else{
    var title = "The line is currently: "
    var retStr = ''
    for (let i = 0; i < waitingArray.length; i++){
      if (i === 0){
        retStr = title.concat(`${i+1}. ${waitingArray[i]}`)
      }else{
        retStr = retStr.concat(`, ${i+1}. ${waitingArray[i]}`)
      }
    }
    return retStr
  }
}
