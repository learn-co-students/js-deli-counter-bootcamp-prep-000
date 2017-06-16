var katzDeliLine = []
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  var position = katzDeliLine.length
  return `Welcome, ${name}. You are number ${position} in line.`
  return katzDeliLine

}


function nowServing(katzDeliLine){
  var vip = katzDeliLine[0]

  if (katzDeliLine.length >= 1){
    var announcement = `Currently serving ${katzDeliLine[0]}.`
    katzDeliLine.shift()
    katzDeliLine
    return announcement
  } else {
    return `There is nobody waiting to be served!`
  }

}

function currentLine(katzDeliLine){
  if (katzDeliLine.length < 1){
    return `The line is currently empty.`
  } else {
    var statement = `The line is currently: `
      for (var i = 0; i < katzDeliLine.length; i++){
        statement = statement + `${i+1}. ${katzDeliLine[i]}`
        if (i < katzDeliLine.length - 1){
          statement = statement + `, `
        }
    }
    return statement
  }
}
