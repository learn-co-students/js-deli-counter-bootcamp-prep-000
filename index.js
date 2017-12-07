var katzDeli = [];

function takeANumber(katzDeliLine, newName) {
   katzDeliLine.push(newName)
   return "Welcome, " + (katzDeliLine.length - 1) + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine[0]) {
    return "Currently serving " + katzDeliLine[0] + ".";
  } else {
    return "There is nobody waiting to be served!";
  }
  katzDeliLine.shift()
  return katzDeliLine
}

function currentLine(katzDeliLine) {

}