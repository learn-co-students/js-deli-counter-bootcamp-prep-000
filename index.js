function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName)
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length > 0){
    return `Currently serving ${katzDeliLine.shift()}.`

  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine){
    var newArray = []
    for (var i=0; i < katzDeliLine.length; i++){
    newArray[i]=parseInt(i+1) +". "+ katzDeliLine[i]
    }
  if(newArray.length > 0){
    return `The line is currently: ${newArray.join(', ')}` 
} else {
    return "The line is currently empty."
   }
}
