function takeANumber(katzDeliLine, name) {
  var currentPlaceInLine = katzDeliLine.length + 1;
  katzDeliLine.push(name);
  return "Welcome, " + name +". You are number " + currentPlaceInLine +" in line."
}
  
function nowServing(katzDeliLine) {
  var name;
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    name = katzDeliLine.shift()
    return "Currently serving " + name +"."
  }
}

function currentLine(katzDeliLine) {
  var string;
  if(katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    string = `The line is currently: 1. ${katzDeliLine[0]}`
    for(let i = 1; i < katzDeliLine.length; i++) {
      string += `, ${i+1}. ${katzDeliLine[i]}`
    }
    return string;
  }
}