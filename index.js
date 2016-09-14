var katzDeliLine = [];

function takeANumber(line, name) {
  var num = line.length + 1;
  line.push(name);
  return `Welcome, ${name}. You are number ${num} in line.`;
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var nxt = line[0];
    line.shift();
    return `Currently serving ${nxt}.`
  }
}

function currentLine(line) {
  if (line.length === 0){
    return "The line is currently empty."
  } else {
    var txt = "The line is currently: ";
    for (var i = 0; i < line.length; i++) {
      txt += (i + 1) + ". " + line[i];
      if (line.length - 1 !== i) {
        txt += ", ";
      }
    }
    return txt;
  }
}
