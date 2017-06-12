var katzDeliLine = []

function takeANumber(katzDeliLine, name){
  katzDeliLine[katzDeliLine.length] = name

  var whichPlace = katzDeliLine.length

  return `Welcome, ${name}. You are number ${whichPlace} in line.`
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length > 0){
    var firstName = katzDeliLine[0]
    katzDeliLine.shift()

    return `Currently serving ${firstName}.`
  }else{
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine){
  var string = "The line is currently: "

  if(katzDeliLine.length > 0){
    for(var x = 0; x < katzDeliLine.length; x++){
      if (x == katzDeliLine.length-1){
        string += `${x+1}. ${katzDeliLine[x]}`
      }else{
        string += `${x+1}. ${katzDeliLine[x]}, `
      }
    }
  }else{
    string = "The line is currently empty."
  }

  return string
}
