var katzDeliLine = [];

function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(person);
  return "Welcome, " + person + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var person = katzDeliLine[0];
    katzDeliLine.shift();
    return "Currently serving " + person + ".";
  }
}

function currentLine(line) {
  string = "The line is currently: ";
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    var i = 1;
    var string = "The line is currently: ";
    line.forEach(function(e) {
      string = string + i + ". " + e + ", ";
      i += 1;
    });
    string = string.slice(0, -2);
    return string;
  }
}