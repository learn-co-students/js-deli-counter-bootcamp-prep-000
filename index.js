var lineNumber = [];

function takeANumber(lineNumber, name) {
  lineNumber.push(name);

  console.log ("Welcome, " + name + ". You are number " + lineNumber.length + " in line.");

  return "Welcome, " + name + ". You are number " + lineNumber.length + " in line."
}

function nowServing(lineNumber) {
  if(lineNumber.length > 0){
    return "Currently serving " + lineNumber.shift() + ".";
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(lineNumber) {
  var line = [];
  if(lineNumber.length === 0) {
    return "The line is currently empty.";
  } else {

    for(var i = 0; i < lineNumber.length; i++) {
        line += (i + 1) + ". " + lineNumber[i] + ", "
      }
      line = line.slice(0, line.length-2)
      return "The line is currently: " + line
  }
}