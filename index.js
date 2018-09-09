function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  katzDeliLine = katzDeliLine.indexOf(name) + 1;
  return `Welcome, ${name}. You are number ${katzDeliLine} in line.`;
}

function nowServing(katzDeliLine) {
  var newLine = katzDeliLine.shift();
  if (katzDeliLine.length > 0) {
    katzDeliLine = newLine;
    return `Currently serving ${katzDeliLine.slice(0)}.`;
  } else if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  }
}

function currentLine(line) {
  // var lineSpace = line.indexOf(name) + 1;
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    var index = 0;
    var newString = "The line is currently: "
    while (index < line.length) {
    newString += `${index + 1}. ${line[index]}, `;
    index++;
    var finalString = newString.substring(0, newString.length - 2 );
    }
      return finalString;
    }
  }
//str = str.slice(0, -1)