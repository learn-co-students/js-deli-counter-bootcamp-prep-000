function takeANumber (deliLine, person) {
  deliLine.push(person);
  return("Welcome, " + person + ". You are number " + (deliLine.length) + " in line.")
}

function nowServing (deliLine) {
  if (deliLine.length === 0) {
    return("There is nobody waiting to be served!")
  } else{
    return("Currently serving " + deliLine.shift() + ".")
  }
}

var aline = [];
function currentLine(deliLine) {
  for (let i = 0; i < deliLine.length; i++) {
    aline.push(" " + [i+1] + ". " + deliLine[i]);
  }
  if (deliLine.length === 0) {
    return("The line is currently empty.")
  } else{
    return("The line is currently:" + aline);
  }
}
