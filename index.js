function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  return (`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}
function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
  return (`Currently serving ${katzDeliLine.shift()}.`);
  }
}
function currentLine(katzDeliLine) {
  var i = 0;
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  else {
    var line = [];
    for (let i = 0; i < katzDeliLine.length; i++) {
    line.push(` ${i+1}. ${katzDeliLine[i]}`);
  }
  return (`The line is currently:`) + line;
  }
}