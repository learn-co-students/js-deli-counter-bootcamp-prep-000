var katzDeliLine = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine) {
  let i = 0
  while (i < katzDeliLine.length) {
    i++}
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    return "Currently serving " + katzDeliLine.shift() + "."
  }
}

function currentLine(line) {
     if (line.length === 0){ 
        return ("The line is currently empty.")   }
    else { 
         return "The line is currently: 1. " + line[0] + ", 2. " + line[1] + ", 3. " + line[2] }
 }
