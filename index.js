var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var position = katzDeliLine.indexOf(name) + 1;
  return `Welcome, ${name}. You are number ${position} in line.`;
}

function nowServing(line){
  if (line.length === 0){
    return "There is nobody waiting to be served!";
  }
  else {
    var next = line.slice(0, 1);
    line.shift();
    return `Currently serving ${next}.`;
  }
}

function currentLine(line) {
    var string = "The line is currently:";
    if (line.length === 0) {
        return "The line is currently empty.";
    } else {
        for (var i = 0; i < line.length; i++) {
            var num = i + 1;
            var person = line[i];
            string += " " + num + ". " + person + ",";
        }
    }
    return string.slice(0, -1);
}
