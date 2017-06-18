var num;

function takeANumber(line, name) {
  line.push(name);
  num = line.length;
  return "Welcome, " + name + ". You are number " + num + " in line.";
}

function nowServing(line) {
  var name;
  if(!Array.isArray(line) || !line.length)
    return "There is nobody waiting to be served!";
  else {
    name = line.shift();
    return "Currently serving " + name + ".";
  }
}

function currentLine(line) {
  var ordered = [];
  if(!Array.isArray(line) || !line.length)
    return "The line is currently empty.";
  else {
    for(var i = 0; i < line.length; i++) {
      num = i+1;
      ordered.push(" " + num + ". " + line[i]);
    }
    return "The line is currently:" + ordered.join();
  }
}
