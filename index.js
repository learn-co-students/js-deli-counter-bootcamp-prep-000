var katzDeliLine = [];
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  var spot = katzDeliLine.length
  return `Welcome, ${katzDeliLine[katzDeliLine.length-1]}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length>0){
    var front = katzDeliLine.shift()
    console.log(front)
    return `Currently serving ${front}.`
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine){
  var output = "The line is currently:"
  if (katzDeliLine.length>0){
    for (let i=0; i<katzDeliLine.length; i++){
      if (i===0){
        output = output+" "+(i+1) + ". " + katzDeliLine[i]
      }
      else{
        output = output+", "+(i+1) + ". " + katzDeliLine[i]
      }

    }
  }
  else {
    return "The line is currently empty."
  }
  return output
}
