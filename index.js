var katzDeliLine = [ ];

function takeANumber(line,name) {
  line.push(name)
  return "Welcome, " + name +". You are number " + line.length + " in line.";
}

function nowServing (line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var serving = line[0];
    line.shift()
     return "Currently serving " + serving + ".";
  }
  
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    var linelist = "The line is currently: "
    let i = 0
    do {
      var string = i+1 + ". " + line[i] + ", "
      linelist = linelist + string
      i += 1;
    } while (i+1 < line.length)
    var string = i+1 + ". " + line[i]
    linelist = linelist + string
 return linelist;
    }
}