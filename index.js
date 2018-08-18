function takeANumber(deliLine, name) {
  deliLine.push(name);
  return "Welcome, " + name + ". You are number " + deliLine.length + " in line."
}
//
function nowServing(deliLine) {
  if (deliLine.length > 0) {
    return ("Currently serving " + deliLine.shift() + ".")
  }
  else {
    return "There is nobody waiting to be served!"
  }
}
//
function currentLine(deliLine) {
  var names = "";
  if (deliLine.length > 0) {
    for (var i = 0; i < deliLine.length; i++) {
      names = names + (i + 1) + ". " + deliLine[i];
      if (i < deliLine.length - 1) {
        names = names + ", " 
      }
    }
    return ("The line is currently: " + names)
  }
  else {
    return "The line is currently empty."
  }
}
//
//takeANumber(katzDeliLine, name);
//nowServing(katzDeliLine);