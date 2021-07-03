function takeANumber(line, person) {
  line.push(person);
  return "Welcome, " + person + ". You are number " + line.length + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) return "There is nobody waiting to be served!";
  return "Currently serving " + katzDeliLine.shift() + ".";
}

function currentLine(line) {
  if (line.length === 0) return "The line is currently empty.";

  var lineMsg = "The line is currently: ";

  for (let i = 0; i < line.length; i++) {
    var n = i+1;
    lineMsg += n + ". " + line[i];
    if (i < line.length - 1) lineMsg += ", ";
  }
  return lineMsg;
}


