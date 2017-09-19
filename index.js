var katzDeliLine = [];

function takeANumber(katzDeliLine, personName) {
  katzDeliLine.push(personName);
  var i = katzDeliLine.length;
  var position = "Welcome, " + katzDeliLine[i - 1] + ". You are number " + i + " in line.";
  return(position);
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return("There is nobody waiting to be served!");
  }
  else {
    var ServingString = "Currently serving " + katzDeliLine[0] + ".";
    katzDeliLine.shift();
    return(ServingString);
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return("The line is currently empty.");
  }
  else {
    var Line = "The line is currently: "
    var i = 0;
    while (i < katzDeliLine.length - 1) {
      Line = Line + ( i + 1 ) + ". " + katzDeliLine[i] + ", ";
      i++;
    }
    Line = Line + ( i + 1 ) + ". " + katzDeliLine[i]; //last person in line
    return(Line);
  }
}
