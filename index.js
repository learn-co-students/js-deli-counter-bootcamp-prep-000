var katzDeliLine = [];

function takeANumber(line, name) {
  line.push(name);
  var queue =  line.indexOf(name) + 1;
  return `Welcome, ${name}. You are number ${queue} in line.`
}


function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
  var name = line[0];
  line.shift();
  return `Currently serving ${name}.`;
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    var currentLine = "The line is currently: "
    for (var i = 0; line.length > i; i++) {
      var name = line[i];
      if (i === 0) {
      currentLine += `${i+1}. ${name}`;
      } else {
      currentLine += `, ${i+1}. ${name}`;
    }
    }
    return currentLine;
  }
}
