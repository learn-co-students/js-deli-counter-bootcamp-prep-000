function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length===0){
    return "There is nobody waiting to be served!"
  }
  else{
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine(katzDeliLine){
  var retString=""
  if (katzDeliLine.length===0){
    retString="The line is currently empty."
    return retString
  }
  else{
    retString="The line is currently: "
    for (var i=0; i<katzDeliLine.length-1; i++){
      retString=retString+`${i+1}. ${katzDeliLine[i]}, `
    }
    retString=retString+`${katzDeliLine.length}. ${katzDeliLine[katzDeliLine.length-1]}`
    return retString
  }
}
