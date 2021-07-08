var katzDeliLine = []
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  var number = katzDeliLine.length
  return `Welcome, ${name}. You are number ${number} in line.`
}

function nowServing(deliLine){
  if (deliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  else{
    var next = deliLine.shift()
    return `Currently serving ${next}.`
  }
}

function currentLine(line){
  if (line.length === 0){
    return "The line is currently empty."
  }
  else{
    var onLine = []
    for(let i = 0; i < line.length; i++){
      onLine.push(` ${i+1}. ${line[i]}`)
    }
    return `The line is currently:${onLine}`
  }
}
