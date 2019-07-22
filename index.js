function takeANumber(line, name) {
  var curLength = line.length;
  line.push(name);
  return "Welcome, " + name + ". You are number " + (curLength + 1) + " in line.";
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  }
  var name=line[0];
  line.shift();
  return "Currently serving " + name + ".";
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  }
  var retString="The line is currently:";
  for (var x=0;x < line.length;x++) {
    retString+=" " + (x+1) + ". " + line[x] + ",";
  }
  return retString.substring(0, retString.length - 1);
}