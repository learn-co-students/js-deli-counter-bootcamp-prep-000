var katzDeliLine = [];

function takeANumber(katzDeli, otherDeli) {
  katzDeliLine.shift();
  katzDeli.push(otherDeli);
  katzDeliLine.push("Welcome, " + otherDeli + ". You are number " + katzDeli.length + " in line.");
  return katzDeliLine;
}

function nowServing(katzDeli) {
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var next = katzDeli[0];
    katzDeli = katzDeli.shift();
    return "Currently serving " + next + ".";
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    var order = [];
    do {
      order.unshift(" " + line.length + ". " + (line[(line.length - 1)]));
      --line.length;
    } while (line.length > 0);
    return "The line is currently:" + order;
  }
}