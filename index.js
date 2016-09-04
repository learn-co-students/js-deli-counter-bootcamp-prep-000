function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);

  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var name = katzDeliLine.shift();
    return `Currently serving ${name}.`;
  }

  return "There is nobody waiting to be served!";
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) { return "The line is currently empty."; }

  var msg = "The line is currently:";
  for (var i = 0; i < katzDeliLine.length; i++) {
    msg += ` ${i + 1}. ${katzDeliLine[i]},`;
  }

  return msg.slice(0, -1);
}
