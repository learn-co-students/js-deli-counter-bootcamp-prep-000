
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  var spot = katzDeliLine.length
  var greeting = `Welcome, ${name}. You are number ${spot} in line.`

  return greeting
}

function nowServing(katzDeliLine){
  var line = katzDeliLine.length
  if (line === 0){
    return "There is nobody waiting to be served!"
  }
  else if (line > 0){
    var serving = katzDeliLine[0]
    var announcement = `Currently serving ${serving}.`
    katzDeliLine.splice(0, 1);
    return announcement
  }
}

function currentLine(katzDeliLine){
  var length = katzDeliLine.length
  if (length === 0){
    return "The line is currently empty."
  }
  else if (length > 0){
    i = 1
    var current = katzDeline.map(funtion(name) { 
      var numberedName = `${i}. ${name}`
      i += 1
      numberedName
    }
    /*
    var current = []
    for (let i = 0; i < length; i++){
      var name = katzDeliLine[i]
      var list = `${i + 1}. ${name}`
      current.push(list)
    }
    */
    return `The line is currently: ${current.join(', ')}`

  }

}
