var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  var name = katzDeliLine[0];
  var message = (`Currently serving ${name}.`);
  katzDeliLine.shift();
  return message;
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  var result = "The line is currently: ";
  for (var i = 0; i < katzDeliLine.length - 1; i++) {
   var name = katzDeliLine[i];
   var spot = i + 1;
   result += `${spot}. ${name}, `;
  }
  result += katzDeliLine.length + '. ' + katzDeliLine[katzDeliLine.length - 1];
  return result;
}
