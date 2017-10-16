var katzDeli = []

function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!'
  } else{
    var temp = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${temp}.`
  }
}

function currentLine(katzDeli){
  if (katzDeli.length === 0){
    return "The line is currently empty."
  } else{
    var string = `The line is currently: 1. ${katzDeli[0]}`
    for(let i = 1; i < katzDeli.length; i++){
      string += `, ${i+1}. ${katzDeli[i]}`
    }
    return string
  }
}
