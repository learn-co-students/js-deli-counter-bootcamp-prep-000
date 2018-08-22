function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length !== 0) {
    var currentlyServing = katzDeliLine.shift();
    return `Currently serving ${currentlyServing}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine (katzDeliLine) {
  let chronologicalOrder = [];
  if (katzDeliLine.length !== 0) {
    for (var i = 0; i < katzDeliLine.length; i++) {
      chronologicalOrder.push(` ${i + 1}. ${katzDeliLine[i]}`);
    }
    return `The line is currently:${chronologicalOrder.join()}`;
  } else {
    return "The line is currently empty.";
  }
}