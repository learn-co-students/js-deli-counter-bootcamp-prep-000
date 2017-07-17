
var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}


function nowServing(katzDeliLine){
if (katzDeliLine.length === 0){
  return "There is nobody waiting to be served!"
  //console.log('The line is currently empty.')
}
else {
  return "Currently serving " + katzDeliLine.shift() + "."
}
}

function currentLine(katzDeliLine) {
  var i = 0
  var string = "The line is currently:"
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  }
  else {
    for ( i = 0; i <= katzDeliLine.length - 1; i++) {
      if (i === katzDeliLine.length - 1){
        string = string + " " + (parseInt(i, 10) + 1) + ". " + katzDeliLine[i]
      }
      else{
        string = string + " " + (parseInt(i, 10) + 1) + ". " + katzDeliLine[i] + ","
        }
      }
      return string
    }
}
