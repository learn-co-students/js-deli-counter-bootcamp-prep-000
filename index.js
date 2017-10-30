var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  var nowServing = "";

  if (katzDeliLine[0]) {
    nowServing = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${nowServing}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  var queue = "";

  if (katzDeliLine.length > 0) {
    for (let i = 0; i < katzDeliLine.length ; i++) {
      queue += ` ${i + 1}. ${katzDeliLine[i]},` ;
    }
    return `The line is currently:${queue.slice(0, -1)}`;
  } else {
    return "The line is currently empty."
  }
}
