function takeANumber(n, name) {
  n.push(name);
  var num = n.length;
  return `Welcome, ${name}. You are number ${num} in line.`;
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
  var serving = line.shift();
  return `Currently serving ${serving}.`;
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  }
  else {
    var deliLine = ["The line is currently:"]
    for (let i = 0; i < line.length; i++) {
      deliLine.push(` ${i+1}. ${line[i]}`);
    }
    var stringLine = deliLine.toString();
    return stringLine.replace(",",'')
    }
}