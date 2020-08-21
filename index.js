var katzDeli = [];

function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length>0){
    var served = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${served}.`
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line){
    if (line.length == 0) {
      return "The line is currently empty.";
    }
    else {
      var string = "The line is currently:"
      for (var i = 0; i < line.length-1; i++) {
        string += " " + (i+1).toString() + ". " + line[i] + ",";
     }
      string += " " + line.length + ". " + line[line.length-1];
      return string;
  }
}
