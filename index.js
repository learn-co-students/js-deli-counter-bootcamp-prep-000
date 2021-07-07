var katzDeliLine = []

function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
}
function nowServing(line) {
  //(line.length === 0) ? return "There is nobody waiting to be served!" : return line.shift()
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${line.shift()}.`;
  }
  
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    var Str = "";
    var n = 0;
    for (var i = 0; i < line.length; i++) {
      n = i+1
      Str += " " + n + ". " + line[i]
      if (i < line.length-1) {
        Str += ","
      }
    }
    
    return "The line is currently:" + Str
  }
}