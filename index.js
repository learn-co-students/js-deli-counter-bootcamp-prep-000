var katzDeliLine = [];

function takeANumber(deliLine, name) {
  var i = deliLine.length;
  deliLine[i] = name;
  return ("Welcome, " + name + ". You are number " + (i+1) + " in line.");
}

function nowServing(deliLine) {
  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var currentServing = ("Currently serving " + deliLine[0] + ".");
    deliLine.shift();
    return currentServing;
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    var i = 0;
    var arr = [];
    for (i; i<line.length; i++) {
      arr[i] = (" " + (i+1) + ". " + line[i]);
    }
    return ("The line is currently:" + arr);
  }
}
