function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  else{
    var first = katzDeliLine[0];
    katzDeliLine.shift()

    return `Currently serving ${first}.`
  }

}

function currentLine(line){
  if(line.length === 0){
    return "The line is currently empty."
  }
  else{
    var feedback = "The line is currently:"
    for(var i = 0; i< line.length-1; i++){
      feedback = feedback + ` ${i+1}. ${line[i]},`
    }
    feedback = feedback + ` ${i+1}. ${line[i]}`
    return feedback
  }
}
