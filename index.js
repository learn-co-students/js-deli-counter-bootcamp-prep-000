function takeANumber(katzDeliLine, name){
  return `Welcome ${name}. You are number ${katzDeliLine} in line.`
}

function nowServing(katzDeliLine){
  if katzDeliLine != []{
    return katzDeliLine[0]
    katzDeliLine.unshift()
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine){
  if katzDeliLine == []{
    return "The line is currently empty."
  } else {
    var queue = 0
     for(var i = 0; i < katzDeliLine.length; i++){
       queue = queue + 1
     }
     return Object.assign({},{[queue] : katzDeliLine})

  }

  }
