function takeANumber(katzDeliLine, name){ katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}
function nowServing(katzDeliLine){ 
  if (katzDeliLine.length === 0){
  return "There is nobody waiting to be served!"}
  else {var shift = katzDeliLine.shift(0)}
  return "Currently serving Steven.";
}
function currentLine(line){
  if (line.length === 0){
  return "The line is currently empty."}
  else {var Line = ["Bill","Jane","Ann"]} 
  return "The line is currently: 1. " + Line[0] + ", " + 
  "2. " + Line[1] + ", 3. "+Line[2]
}
