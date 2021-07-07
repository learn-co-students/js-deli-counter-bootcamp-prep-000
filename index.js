var katzDeliLine = [];

function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name);
  var position =  katzDeliLine.indexOf(name)+1;
  return "Welcome, " + name + ". You are number " + position + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var firstPersonInLine = katzDeliLine[0];
    katzDeliLine.shift();
    return "Currently serving " + firstPersonInLine + ".";
  } else {
    return "There is nobody waiting to be served!"
  }
}

var line =[];

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    for (var i=0; i < katzDeliLine.length; i++) {
      line.push(" "+[i+1]+". " + katzDeliLine[i])
    }
  }
  return "The line is currently:" + line;
}
