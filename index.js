var katzDeli = []

function takeANumber(katzDeliLine, name){
katzDeliLine.push(name)
var position = katzDeliLine.indexOf(name) + 1
return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0 ){
    return "There is nobody waiting to be served!"
  }
  else {
    katzDeliLine[0] = "Currently serving " + katzDeliLine[0] + "."
    return katzDeliLine.shift()
  }
}

function currentLine(katzDeliLine){
  var position = katzDeliLine.indexOf(name) + 1
    if(katzDeliLine.length === 0){
      return "The line is currently empty."
    }
    else {
      katzDeliLine[0] = `1. ${katzDeliLine[0]}`
      for(let i = 1; i < katzDeliLine.length; i++){
        var a = i + 1
        katzDeliLine[i] = ` ${a}. ${katzDeliLine[i]}`
      }
      return `The line is currently: ${katzDeliLine}`
    }
}
