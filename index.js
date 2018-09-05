function takeANumber(line, name) {
  line.push(name);
  return "Welcome, " + name + ". You are number " + line.length + " in line.";
}
function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var tmp = line[0];
    line.shift();
    return "Currently serving " + tmp + ".";
  }
}
function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    var tmp = "The line is currently: ";
    var i = 0;
    
    while(i < line.length) {
      if (i === line.length - 1) tmp += (i+1) + ". " + line[i];
        else tmp += (i+1) + ". " + line[i] + ", ";
      i++;
    }
    return tmp;
  }
}