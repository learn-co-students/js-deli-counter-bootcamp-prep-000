var katzDeli  = [];

function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name);
  var position = katzDeliLine.indexOf(name) + 1;
  return "Welcome, " + name + ". You are number " + position + " in line.";
}



function nowServing(katzDeliLine) {
  if (typeof katzDeliLine !== 'undefined' && katzDeliLine.length > 0) {
    var nextInLine = "Currently serving " + katzDeliLine[0] + ".";
  } else {
    nextInLine = "There is nobody waiting to be served!";
  }
  katzDeliLine.shift();
  return nextInLine;
}

function currentLine(katzDeliLine) {
  if (typeof katzDeliLine !== 'undefined' && katzDeliLine.length > 0) {
    var line = [];
    var i;
    for (i = 0; i < katzDeliLine.length; i += 1) {

      line.push((i+1), ". ", katzDeliLine[i], ", ");
    }
    line.pop();
    var current = "The line is currently: "  + line.join('');
  } else {
    var current = "The line is currently empty.";
  }
  return current;
}
