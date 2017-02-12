function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var linePosition = katzDeliLine.indexOf(name) + 1;
  return "Welcome, " + name + ". You are number " + linePosition + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var currentCustomer = katzDeliLine[0];
    katzDeliLine.shift();
    return "Currently serving " + currentCustomer + ".";
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    var array = [];
    for (var i = 0; i < katzDeliLine.length; i++) {
      array.push((i + 1) + ". " + katzDeliLine[i]);
    }
    return "The line is currently: " + array.join(", ");
  }
}
