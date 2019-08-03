var katzDeliLine = [];

function takeANumber(katzDeliLine, persons) {
  katzDeliLine.push(persons);
  var length = katzDeliLine.length ;
  var output = "Welcome, " + persons + ". You are number " + length + " in line.";
  return output;
}

function nowServing(katzDeliLine) {
  var nextUp = katzDeliLine.shift();
  if (katzDeliLine.length > 0) {
    return "Currently serving " + nextUp + ".";
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  var addOn = "";
  for (var i = 0; i < katzDeliLine.length; i++) {
    var x = i + 1;

    if (i === katzDeliLine.length - 1) {
      addOn = addOn + x + ". " + katzDeliLine[i]
    }
    else {
      addOn = addOn + x + ". " + katzDeliLine[i] + ", "
    }
  }

  if (katzDeliLine.length > 0) {
    return "The line is currently: " + addOn;
  }
  else {
    return "The line is currently empty."
  }
}
