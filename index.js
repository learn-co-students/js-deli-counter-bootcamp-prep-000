function takeANumber(deliLine, newPerson){
  deliLine.push(newPerson)

  var welcomeMsg =`Welcome, ${newPerson}. You are number ${(deliLine.length)} in line.`
  
  return welcomeMsg
}

function nowServing(deliLine){
  if (deliLine.length > 0){

    return `Currently serving ${deliLine.shift()}.`
  }else{
    return "There is nobody waiting to be served!"
  }
}

function currentLine(deliLine){
  var order = ""
  var i = 0
  
  if (deliLine.length === 0){
    return "The line is currently empty."
  }else{
    while (i<deliLine.length) {
      if (i === 0){
        order += 1 +". "+deliLine[i]
        i++
      }else{
        order += ", "+(i+1)+". "+deliLine[i]
        i++
      }
    }
  }
  
  return `The line is currently: ${order}` 
}