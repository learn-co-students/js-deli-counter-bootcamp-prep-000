
var katzDeliLine = [];

function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  if (line.length > 0) {
    var name = line.shift();
    return `Currently serving ${name}.`  ;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line) {
  var message = "The line is currently "
  if (line.length < 1) {
    return message += "empty.";
    
  } else {
    
    for (var i = 0; i < line.length; i++) {
      
      message += `${i + 1}. ${line[i]}`;
      
      if (i <= line.length) {
        message += ",";
      }
    }
    return message;
  }
}


