var katzDeli=[];

function takeANumber(katzDeliLine,peep){
  katzDeliLine.push(peep);
  return `Welcome, ${peep}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
if (katzDeliLine.length>0) {
  var string = `Currently serving ${katzDeliLine[0]}.`
  katzDeliLine.splice(0,1)
  return string
}  else {
  return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    var status = ""
    var placeInLine = 1

    for (var i = 0; i < katzDeliLine.length; i++){
      status += ` ${placeInLine}. ${katzDeliLine[i]}`
      placeInLine += 1

      if (i+1 !=katzDeliLine.length) {
        status += ','
      }

    }
     return (`The line is currently:` + status)
  }
}
