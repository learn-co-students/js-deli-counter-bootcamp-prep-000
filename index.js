function takeANumber(deliLine, newName) {
  deliLine.push(newName);
  return `Welcome, ${newName}. You are number ` + deliLine.length + " in line."
}

function nowServing(deliLine) {
  var msg = "There is nobody waiting to be served!";
  if (deliLine.length > 0) {
    var curName = deliLine.shift();
    msg = `Currently serving ${curName}.`;
  }
  return msg;
}

function currentLine(deliLine) {
  var msg = "The line is currently empty."
  if (deliLine.length > 0) {
    msg = "The line is currently: ";
    var i = 0;
    for (i = 0; i < deliLine.length; i++) {
      if (i > 0) msg += ", ";
      msg += (i + 1) + ". " + deliLine[i];
    }
  }
  return msg;
}