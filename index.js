function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(deliLine){
  if(deliLine.length > 0){
    var firstInLine = deliLine.shift()
    return `Currently serving ${firstInLine}.`
  }
  else
    return "There is nobody waiting to be served!"
}

function currentLine(katzDeliLine){
  var lineLen = katzDeliLine.length
  var result = []
  if(lineLen > 0){
    for(var i= 0; i<lineLen; i++){
      result.push(`${i+1}. ${katzDeliLine[i]}`)
    }
    return "The line is currently: " + result.join(", ")
  }
  else{
    return "The line is currently empty."
  }
}