var katzDeli = [];
var katzDeliLine = [];

// function(katzDeliLine)
// accepts

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(l) {
  if (l.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    var name = l[0];
    l.shift();
    return "Currently serving " + name + ".";
  }
}

function currentLine(l) {
    var line = []  // do brackets indicate strings too? or only arrays?
    if (l.length === 0) {
      return "The line is currently empty."
    } else {
      for(var i = 0; i < l.length; i+=1) {
        line += (i + 1) + ". " + l[i] + ", "
      }
      line = line.slice(0, line.length-2) // COOL !!!
      return "The line is currently: " + line
    }
}

// COOL - remove 'n' characters from end of entire returned array