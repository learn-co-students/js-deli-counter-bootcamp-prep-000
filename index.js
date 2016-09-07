function takeANumber(katzDeliLine, newCust) {
  katzDeliLine.push(newCust);
  var position = 1 + katzDeliLine.indexOf(newCust);
  return ('Welcome, ' + newCust + '. You are number ' + position + ' in line.');
}

function nowServing(deliLine) {
  if (deliLine.length > 0) {
    var nextInLine = deliLine.shift();
    return "Currently serving " + nextInLine + ".";
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line) {
  if (line.length > 0) {
    var list = '';
    for (var i = 0; i < line.length; i++) {
      list += (i+1) + "." + " " + line[i] + ", ";
    }
    list = list.substring(0, list.length - 2);
    return "The line is currently: " + list;
  } else {
    return "The line is currently empty."
  }

}
