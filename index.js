var katzDeli = [];

function takeANumber(katsDeliLine, name) {
  var num = katsDeliLine.push(name);
   return `Welcome, ${name}. You are number ${katsDeliLine.length} in line.`;
}

function nowServing(katsDeliLine) {
  if (katsDeliLine.length >= 1) {
    var name = katsDeliLine.shift();
    return `Currently serving ${name}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katsDeliLine) {
  if (katsDeliLine.length < 1) {
    return "The line is currently empty.";
  }
  var arr = [];
    for (let i = 0; i < katsDeliLine.length; i++) {
      arr.push(i+1 + ". " + katsDeliLine[i]);
    }
      return "The line is currently: " + arr.join(', ');
}
