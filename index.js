function takeANumber(katzDeliLine, name) {
 katzDeliLine.push(name);
 return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
}

function nowServing(katzDeliLine) {
  var i = katzDeliLine.length;
  if (i === 0) {
      return ("There is nobody waiting to be served!");
    } else {
      return ('Currently serving ' + katzDeliLine.shift() + '.');
    }
    return katzDeliLine;
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    let newString = "The line is currently: ";
    let newLine = [];
    for (var i = 0; i<line.length; i++) {
      newLine.push(`${[i+1]}. ${line[i]}`);
    }
    return newString + newLine.join(", ");
  }
}