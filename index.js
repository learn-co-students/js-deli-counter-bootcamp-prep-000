var katzDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  return "Welcome, " + name + ". You are number " + (katzDeli.indexOf(name) + 1) + " in line."
}

function nowServing(deliLine) {
  var shifter = deliLine.shift()
  if (deliLine.length > 0) {
    return "Currently serving " + shifter + ".";
  } else {
    return "There is nobody waiting to be served!"
  } 
}

function currentLine(line) {
  var emptyArray = [];
  if (line.length > 0) {
    for (var i = 0; i < line.length; i++) {
      emptyArray.push(" " + (i + 1) + ". " + line[i]);
    }
  } else {
    return "The line is currently empty.";
  } return "The line is currently:" + emptyArray;
}