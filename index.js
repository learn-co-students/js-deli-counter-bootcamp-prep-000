function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name)
  var message = `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
  return message
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length == 0){
    return "There is nobody waiting to be served!"
  } else{
    var name = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${name}.`
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length == 0){
    return "The line is currently empty."
  } else {
    var message = `The line is currenly: 1. ${katzDeliLine[0]}`
    for(var i=1;i<katzDeliLine.length;i++){
      message = message + `, ${i+1}. ${katzDeliLine[i]}`
    }
    return message
  }
}
