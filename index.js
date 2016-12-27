var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return  ("Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.")
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var text = "Currently serving " + katzDeliLine[0] + "."; 
    katzDeliLine.shift();  
    return text;
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 1) {
    for (var = i ; i < katzDeliLine.length ; i++) {
      return "The line is currently: " + katzDeliLine[i]
      }
  }
  else { return "The line is currently empty."}
}