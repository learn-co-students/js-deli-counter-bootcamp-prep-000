var katzDeli = [];
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine) {
  var str;
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  if (katzDeliLine.length !== 0) {
    str = "Currently serving " + katzDeliLine.shift() + ".";
    return str;
  }
}

function currentLine(katzDeliLine) {
  var str = "The line is currently";
  if (katzDeliLine.length === 0) {
    str += " empty.";
    return str;
  } else {
    str += ": ";
    for (var i = 0; i < katzDeliLine.length; i++) {
      if (i !== katzDeliLine.length - 1) {
        str += (i + 1) + ". " + katzDeliLine[i] + ", ";
      } else {
        str += (i + 1) + ". " + katzDeliLine[i];
      }
    }
  }
  return str;
}
