function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var position = katzDeliLine.indexOf(name)+1;
  return "Welcome, " + name + ". You are number " + position + " in line.";
}

function nowServing(katzDeli) {
  if (katzDeli[0] !== undefined) {
  return "Currently serving " + katzDeli.shift() + ".";
} else {
  return "There is nobody waiting to be served!";
}
}

function currentLine(line) {
  var position = '';
  for (var i = 0; i < line.length; i++) {
    var place = i+1;
    position += place + ". " + line[i];
    if (i !== line.length - 1) {
      position += ", ";
    }
  }
  if (line[0] !== undefined){
    return "The line is currently: " + position;
  } else {
    return "The line is currently empty.";
  }
}
