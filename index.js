
var katzDeliLine = [];

function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  return `Currently serving ${line.shift}`
}

function currentLine(line) {
  var message = "The line is currently"
  if (line.length < 1) {
    return message += "empty";
    
  } else {
    
    for (var i = 0; i < line.length; i++) {
      
      message += `${i}. ${line[i]}`;
      if (i <= line.length - 1) {
        message += ",";
      }
    }
  }
}


