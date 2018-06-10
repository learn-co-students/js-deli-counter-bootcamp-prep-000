var katzDeliLine = [];

function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(person); 
  var position = katzDeliLine.length; 
  return "Welcome, " + person + ". You are number " + position + " in line."
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    let current = katzDeliLine[0]; 
    katzDeliLine.shift(); 
    return `Currently serving ${current}.`
  }
  else return "There is nobody waiting to be served!"
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  else 
  var line = []; 
  for (var i = 0; i < katzDeliLine.length; i +=1) {
    line.push(" " + [i+1] + ". " + katzDeliLine[i])
  }
  return "The line is currently:" + line; 
}