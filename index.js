var katzDeliLine = [];

function takeANumber (katzDeliLine, person) {
    katzDeliLine.push(person);
    var lineLength = katzDeliLine.length;
    var positionInLine = "Welcome, "+ person + ". You are number "+ lineLength + " in line.";
    return positionInLine;
}

function nowServing (katzDeliLine) {
    if (katzDeliLine.length > 0) {
    return "Currently serving " + katzDeliLine.shift() +".";

  } else {
    return "There is nobody waiting to be served!";
  }
}
function currentLine(katzDeliLine) {
  if (!katzDeliLine.length) {
    return "The line is currently empty.";
  }

  const numbersAndNames = [];

  for (let i = 0; i < katzDeliLine.length; i++) {
    numbersAndNames.push(`${i + 1}. ${katzDeliLine[i]}`)
  }

  return `The line is currently: ${numbersAndNames.join(', ')}`
};
