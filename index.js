function takeANumber(line, name) {
  var katzDeliLine = line;
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(line) {
  var nextUp = "There is nobody waiting to be served!"
  if (line.length > 0) {
    nextUp = line[0];
    line.splice(0,1);
    return "Currently serving " + nextUp + ".";
  } else {
    return nextUp;
    }
}

function currentLine(line) {
if (line.length <= 0) {
  return "The line is currently empty.";
} else {
    var lineAnnounce = "The line is currently: ";
    var j = 1;
    var i = line.length;
    for (var i = line.length; i > 0; --i) {
      if (i > 1) {
        lineAnnounce = lineAnnounce + j + ". " + line[j-1] + ", ";
      } else {
        lineAnnounce = lineAnnounce + j + ". " + line[j-1];
      }
      j++;
    }
    return lineAnnounce;
  }
}
