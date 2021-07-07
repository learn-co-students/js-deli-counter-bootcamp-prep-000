function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  var position = parseInt(katzDeliLine.indexOf(name))
  return `Welcome, ${name}. You are number ${position+1} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length == 0){
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
    katzDeliLine
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length == 0){
    return "The line is currently empty."
  } else {
    var line_format = []
    for (var i = 0; i < katzDeliLine.length; i++){
      var name = katzDeliLine[i]

      line_format.push(` ${i+1}. ${name}`)
      line_format
    }
    return `The line is currently:${line_format}`

  }
}
