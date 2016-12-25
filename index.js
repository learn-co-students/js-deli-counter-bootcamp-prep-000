function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length > 0){
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0){
    var numbered = [];
    for (let y = katzDeliLine.length-1; y >= 0; y--){
      numbered.unshift(` ${y+1}. ${katzDeliLine[y]}`)
    }
    return `The line is currently:${numbered}`;
  }
  else {
    return "The line is currently empty.";
  }
}
