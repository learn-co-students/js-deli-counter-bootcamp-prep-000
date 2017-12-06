var katzDeli = [];

function takeANumber(katzDeliLine, newName) {
  for(i = 0; i < katzDeliLine.length; i++) {
    katzDeliLine.push(newName)
  }
   return "Welcome, " + katzDeliLine[i] + ". You are number " + katzDeliLine[i + 1] + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine = []) {
    return "There is nobody waiting to be served!"
  } else {return "Currently serving " + katzDeliLine[0] + ".";}
}