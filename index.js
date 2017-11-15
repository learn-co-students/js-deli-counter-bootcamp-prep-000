var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  var position = katzDeliLine.length
  return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    var serving = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${serving}.`
  }

}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    var line = "The line is currently: "
    for (var i = 0; i < katzDeliLine.length; i++){
      if (i < katzDeliLine.length - 1){
        line += `${i+1}. ${katzDeliLine[i]}, `
      } else {
        line += `${i+1}. ${katzDeliLine[i]}`
      }

    }
    return line
  }

}
