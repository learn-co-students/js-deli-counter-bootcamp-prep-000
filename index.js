function takeANumber (line, name) {
    line.push(`${name}`);
    return "Welcome," + ` ${name}. ` + "You are number " + line.length + " in line."
}
function nowServing (katzDeliLine) {
  var firstinline = katzDeliLine[0]
  if (!katzDeliLine.length) {
    return "There is nobody waiting to be served!"
  }
else {
  katzDeliLine.shift()
  return "Currently serving " + `${firstinline}` + "."
}
}
function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty."
  }
  else {
      var totalLine = [];
      for (var i = 0, h = 0; i < line.length; i++, h++) {
       totalLine.push(i+1 + ". " + `${line[h]}`);
    }
    return "The line is currently: " + totalLine.join("," + " ");
    }
  }
