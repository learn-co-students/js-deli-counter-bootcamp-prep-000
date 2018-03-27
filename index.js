var katzDeliLine = [];


function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name); {
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
    }
}

function nowServing(line) {
  if (line.length === 0) {
  return "There is nobody waiting to be served!"
    } else {
      return "Currently serving " + line.shift() + "."
    }
}
var person = [];

function currentLine(line) {
  for (let i = 0; i < line.length; i++) {
    person.push(" "+[i+1]+". "  + line[i])
  }
  if (line.length === 0) {
    return "The line is currently empty.";
  } else
  return("The line is currently:" + person);
}