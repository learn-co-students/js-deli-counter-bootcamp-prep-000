
function takeANumber(katzDeliLine,newname){
  katzDeliLine.push(newname)
  return `Welcome, ${newname}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length===0){
    return 'There is nobody waiting to be served!'
  }
  else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine(katzDeliLine){
  var n = katzDeliLine.length
  if (n===0){
    return "The line is currently empty."
  }
  else {
    var positionandname = []

    for (var i=0; i<n; i++){
      positionandname.push(`${i+1}. ${katzDeliLine[i]}`)
    }
    return `The line is currently: ${positionandname.join(', ')}`
  }
}
