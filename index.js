
var katzDeliLine = [];
var name = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
  }
function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`
  } else {
    return `There is nobody waiting to be served!`
  }
}

function currentLine(kLine){
  var line = [];
  if (kLine.length > 0){
    for(var i = 0; i < kLine.length; i++){
      line.push(" "+ (i+1) + ". "+ kLine[i])
    }
    return 'The line is currently:' + line
  } else {
    return 'The line is currently empty.'
  }
}
