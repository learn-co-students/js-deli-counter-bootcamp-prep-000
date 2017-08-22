//var katzDeli = [];
var katzDeliLine = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number `+ katzDeliLine.length + " in line."
};

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return "Currently serving " + katzDeliLine.shift() + ".";

  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line){
  // 'The line is currently: 1. Bill, 2. Jane, 3. Ann'
  // '1. Bill'
  if (line.length >= 1) {
    var array = []
    for (var i = 0; i < line.length; i++) {
      array.push(i+1 + ". " + line[i])
    }
    return "The line is currently: " + array.join(', ');
    }
  else {
    return "The line is currently empty."
  }
}
