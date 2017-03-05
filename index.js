var katzDeli = [];
var katzDeliLine = [];

function takeANumber(line, name) {
  line.push(name);
  var length = line.length;
  return `Welcome, ${name}. You are number ${length} in line.`;
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var frontOfLine = line[0];
    line.shift();
    return `Currently serving ${frontOfLine}.`;
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    let lineMessage = "The line is currently: ";
    
    for(let i = 0; i < line.length; i++) {
      lineMessage += `${i + 1}. ${line[i]}`;
      if(i + 1 != line.length) {
        lineMessage += ", ";
      }
    }

    return lineMessage;
  }
}