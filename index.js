function takeANumber(currentLine, name) {
  var number = currentLine.length + 1;
  currentLine.push(name);
  return "Welcome, " + name + ". You are number " + number + " in line."
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var firstPerson = katzDeliLine[0];
    katzDeliLine.shift();
    return "Currently serving " + firstPerson +".";
  }
}

function currentLine(line) {
  if(line.length === 0) {
    return "The line is currently empty."
  } else {
    var currently = "The line is currently: "
    for(var num = 0; num < line.length - 1; num++) {
      currently = currently + (num+1) + ". " + line[num] +", "
    }
    return currently + (num+1) + ". " + line[num]
  }
}
