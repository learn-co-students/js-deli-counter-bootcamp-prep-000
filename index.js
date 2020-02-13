var Deli = [];

function takeANumber(line, name) {
  line.push(name)
    console.log("Welcome, " + name + ". You are number " + line.length + " in line.");
  return "Welcome, " + name + ". You are number " + line.length + " in line."
}

function nowServing(line) {
 if (line.length === 0) {
    console.log("There is nobody waiting to be served!")
    return "There is nobody waiting to be served!"
  } else {
    var name = line[0];
    line.splice(0, 1);
    return "Currently serving " + name + ".";
  }
}

function currentLine(NewLine) {
    var line = []
    if (NewLine.length === 0) {
      return "The line is currently empty."
    }
    else {
      for(var i = 0; i < NewLine.length; i++) {
        line += (i + 1) + ". " + NewLine[i] + ", "
      }
      line = line.slice(0, line.length-2)
      return "The line is currently: " + line
    }
}















