var katzDeliLine = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return ("Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.")
}

function nowServing(katzDeliLine) {
 if (katzDeliLine.length > 0){
   var next = katzDeliLine.shift();
   return "Currently serving " + next +"."
 } else {
 return "There is nobody waiting to be served!"}
}


function currentLine(katzDeliLine) { 
  var whosNext = []
  if (katzDeliLine.length === 0){return "The line is currently empty."
  } else {
    for (let i = 0; i < katzDeliLine.length; i++) {
      whosNext.push(" " + (i+1) + ". " + katzDeliLine[i])}
      return "The line is currently:" + whosNext
    }
}
