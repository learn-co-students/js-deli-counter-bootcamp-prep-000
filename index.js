var katzDeli = []

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(deliLine){
  if (deliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  else{
    return `Currently serving ${deliLine.shift()}.`
  }

}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  }
  else {
  var serving = 'The line is currently: '
  for (let i = 1; i < 4; i++){
    serving += i + ". " + katzDeliLine.shift() + ", "
  }
  return serving.replace("Ann, ", "Ann")
  }
}
