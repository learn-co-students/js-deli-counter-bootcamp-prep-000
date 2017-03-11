var katzDeliLine = [];
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var greeting = String("Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.");
  return greeting;
};
function nowServing(katzDeliLine) {
  var first = katzDeliLine[0];
  var announce = String("Currently serving " + first + ".");
  katzDeliLine.shift();
  if (katzDeliLine.length > 0) {
    return announce;
  } else {
    var emptyLine = String("There is nobody waiting to be served!")
    return emptyLine;
  }
};
function currentLine(katzDeliLine) {
  var i = 0;
  var numberedLine = [];
  var n = 1
  while (i < katzDeliLine.length) {
    numberedLine.push(` ${n}. ${katzDeliLine[i]}`)
    i++;
    n++;
  }
  if (katzDeliLine.length > 0) {
    return ("The line is currently:" + numberedLine)
  } else {
    return ("The line is currently empty.")
  }
};
