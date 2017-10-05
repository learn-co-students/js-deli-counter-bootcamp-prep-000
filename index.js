function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
  return "Welcome, " + newName + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(array) {
  if (array[0] != null) {
    return ('Currently serving ' + array.shift() + '.');
  } else {
    return ('There is nobody waiting to be served!');
  }
}

function currentLine(line) {
  var lineNames = [];
  var count = 0;
  var i = 0;
  if (line[0] == null) {
    return ('The line is currently empty.')
  } else {
      while (count < line.length) {
        lineNames.push(' ' + (count+1) + '. ' + line[i]);
        count++;
        i++;
      }
  }
  return ('The line is currently:' + lineNames);
}
