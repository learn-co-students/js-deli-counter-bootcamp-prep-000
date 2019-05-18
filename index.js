//1
var katzDeli = []
var katzDeliLine = []
function takeANumber(katzDeliLine,Name){
  katzDeliLine.push(Name)
  var position = katzDeliLine.length
  return "Welcome, " + Name + ". You are number " + position + " in line."
}

//2
function nowServing(katzDeliLine){
  var num = katzDeliLine.length
  if (num<1){
    return "There is nobody waiting to be served!"
  } else {
    console.log("Currently serving " + katzDeliLine[0] + ".")
    katzDeliLine.shift()
  }
}
//3
function currentLine(katzDeliLine){
  var num = katzDeliLine.length
  if (num<1){
    return "The line is currently empty."
  } else {
    for (var i=0; i<num; i++)
    
  }
}
