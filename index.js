var katzDeliLine = []

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return 'There is nobody waiting to be served!'
  } 
  else{
    var customer = katzDeliLine.shift()
    return `Currently serving ${customer}.`
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0){
    return 'The line is currently empty.'
  }
  else {
    var string = 'The line is currently:'
    for (var i = 0; i < katzDeliLine.length - 1; i++){
      string = string + ` ${[i+1]}. ${katzDeliLine[i]},`
    }
    string = string + ` ${[i+1]}. ${katzDeliLine[i]}`
    return string
  }
}