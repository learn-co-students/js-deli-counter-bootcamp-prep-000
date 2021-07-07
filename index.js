function takeANumber (katzDeliLine, otherDeli){
 var i = katzDeliLine.length
 katzDeliLine.push(otherDeli)
 return ("Welcome, " + otherDeli + ". You are number " +  [i + 1] + " in line.")
}

function nowServing(deliLine){
  if (deliLine.length > 0){
for (let i = 0; i < deliLine.length; i++) {
  var serving = "Currently serving " + deliLine[i] + "."
   console.log(serving)
   deliLine.shift()
   return serving
}
} else {
  return ("There is nobody waiting to be served!")
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length > 0){
  for (let i = 0; i < katzDeliLine.length; i++) {
  var serving = [i + 1] + ". " + katzDeliLine[i] + ", " + [i + 2] + ". " + katzDeliLine[i + 1] + ", " + [i + 3] + ". " + katzDeliLine[i + 2]
  return ("The line is currently: " + serving )
  }
  } else {
  return ("The line is currently empty.")
  }
  }
