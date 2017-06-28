function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(arr) {
  if (arr.length < 1) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + arr.shift() + ".";
  }
}

function currentLine(katzDeliLine) {
  var lineSentence = "The line is currently: ";
  var count = 1;
  if (katzDeliLine.length < 1) {
    return "The line is currently empty.";
  } else {
    for (var i = 0; i < katzDeliLine.length; i++) {
      if (i === katzDeliLine.length - 1) {
        lineSentence += count + ". " + katzDeliLine[i];
      } else {
        lineSentence += count + ". " + katzDeliLine[i] + ", ";
        count++;
      }
    }
  }
  return lineSentence;
}
