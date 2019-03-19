var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return 'Welcome, ' + name + '. ' + 'You are number ' + katzDeliLine.length +' in line.';
}

function nowServing(katzDeliLine) {
  let currentServe = katzDeliLine[0];
  katzDeliLine.shift();
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
  return 'Currently serving ' + currentServe + '.';
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    var currentQueue = [];
    var i;
    var placeInQueue;
    for (i = 0; i < katzDeliLine.length; i++) {
      placeInQueue = (i + 1);
      let currentServe = katzDeliLine[i];
      currentQueue.push(' ' + placeInQueue + '. ' + currentServe);
    }
    return ('The line is currently:' + currentQueue);
  }
}

takeANumber(katzDeliLine, "Ada"); // "Welcome, Ada. You are number 1 in line."
takeANumber(katzDeliLine, "Grace"); // "Welcome, Grace. You are number 2 in line."
takeANumber(katzDeliLine, "Kent"); // "Welcome, Kent. You are number 3 in line."

currentLine(katzDeliLine); // "The line is currently: 1. Ada, 2. Grace, 3. Kent"

nowServing(katzDeliLine); // "Currently serving Ada."

currentLine(katzDeliLine); // "The line is currently: 1. Grace, 2. Kent"

takeANumber(katzDeliLine, "Matz"); // "Welcome, Matz. You are number 1 in line."

currentLine(katzDeliLine); // "The line is currently: 1. Grace, 2. Kent, 3. Matz"

nowServing(katzDeliLine); // "Currently serving Grace."

currentLine(katzDeliLine); // "The line is currently: 1. Kent, 2. Matz"
