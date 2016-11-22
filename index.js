var katzDeliLine = [];

function takeANumber(line, name) {
  line.push(name);
  var welcome = `Welcome, ${name}. You are number ${line.indexOf(name) + 1} in line.`;
  return welcome;
}

function nowServing(line) {
  if (line.length < 1) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${line.shift()}.`;
  }
}

function currentLine(line) {
  if (line.length < 1) {
    return "The line is currently empty.";
  } else {
    var stringMessage = "The line is currently: ";
    for (var i = 0; i < line.length; i++) {
      stringMessage += `${i+ 1}. ${line[i]}`;
      if (i < line.length - 1) {
        stringMessage += ", "
      }
    }

  }
  return stringMessage;
}
