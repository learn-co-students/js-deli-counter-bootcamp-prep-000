katzDeliLine = []

function takeANumber (katzDeliLine, otherDeli) {
katzDeliLine.push(otherDeli);
  return `Welcome, ${otherDeli}. You are number ` + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
}

function currentLine(katzDeliLine){
var line = []
  for(var i=0; i < katzDeliLine.length; i++){
  line.push(i+1 + ". " + katzDeliLine[i])
  }
  if (line.length === 0){
    return "The line is currently empty."
} else {
  return "The line is currently: " + line.join(', ');
}
}
