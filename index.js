var katzDeliLine = []

function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
  return "Welcome, "+newName+". You are number "+katzDeliLine.length+" in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    return "Currently serving " +katzDeliLine.shift()+".";  
  }
  
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length ===0) {
    return "The line is currently empty."
  }
  else {
  //var line = ['1. ${katzDeliLine[0]}']
  var line = ['1. '+katzDeliLine[0]]
  for (let i = 1; i < katzDeliLine.length; i++) {
    //line.push(' ${[i+1]}. ${katzDeliLine[i]}')
    line.push(' '+[i+1]+'. '+katzDeliLine[i])
  }
  return "The line is currently: "+ line;  
  }
}