function takeANumber(katzDeliLine, name){
  var newkatzDeliLine = []
  if (katzDeliLine.length === 0) {
    newkatzDeliLine = katzDeliLine.push(`${name}`)
    return `Welcome, ${name}. You are number 1 in line.`

  }else {
     newkatzDeliLine = katzDeliLine.push(`${name}`)
    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
  }
return newkatzDeliLine
}

function nowServing(katzDeliLine) {
  var newkatzDeliLine = []
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    newkatzDeliLine = katzDeliLine.shift()
    return `Currently serving ${newkatzDeliLine}.`
  }
  return newkatzDeliLine
}

function currentLine(line){
  if (line.length === 0) {
    return "The line is currently empty."
  }else {
    var newline = [];
    for (var i = 0; i < line.length; i++) {
       newline.push( ""+`${i + 1}. ${line[i]}`+ " ")

     }
    return `The line is currently: ${newline}`
}
}
