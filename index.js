var katzDeliLine = []
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
    return `Currently serving ${katzDeliLine.shift()}.`
  }else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine){
  var len = katzDeliLine.length
  var line = "The line is currently: "
  if (len !== 0){
    for (var i = 1; i <= len; i++){
      if (i < len){
        line += `${i}. ${katzDeliLine[i-1]}, `
      }else{
        line += `${i}. ${katzDeliLine[i-1]}`
      }
    }return line
  }
  return "The line is currently empty."
}
