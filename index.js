var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return "There is nobody waiting to be served!"
  } else {
    var first = katzDeliLine.shift();
    return "Currently serving " + first + ".";
  }
}

function currentLine(katzDeliLine) {
  var count = 0;
  var index = 1;
  var array = [];
  if (katzDeliLine.length < 1) {
    return "The line is currently empty.";
  }
  while (count < katzDeliLine.length) {
    array.push(" " + index + ". " + katzDeliLine[count]);
    count++;
    index++;
  }
  return "The line is currently:" + array;
}
